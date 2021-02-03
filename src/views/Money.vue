<template>
  <layout class-prefix="layout">
    {{ recordList }}
    {{ record }}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import {tagListModel} from '@/models/tagListModel';

// import model from '@/model.js';  TS和JS配合
// const model = require('@/model.js').model;

// const {model} = require('@/model.js').model;
// console.log(model);
const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; //数据类型
  createdAt?: Date; //类 构造函数  ?表示这个字段可以没有
}
// const recordList: RecordItem[] = model.fetch();
// const recordList  = recordListModel.fetch();
// const tagList = tagListModel.fetch();

@Component({
  components: {NumberPad, Types, Notes, Tags},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票'];
  // tags = tagList;
  recordList: Record[] = recordList;
  record: Record = {tags: [], notes: '', type: '-', amount: 10};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    // console.log(value);
    this.record.notes = value;
  }

  saveRecord() {
    // const deepClone = JSON.parse(JSON.stringify(this.record));
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);

    // const record2：RecordItem = model.clone(this.record)
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    // model.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  border: 3px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>

