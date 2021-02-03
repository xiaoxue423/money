<template>
  <layout class-prefix="layout">
    {{ recordList }}
    {{ record }}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
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
import {recordListModel} from '@/models/recordListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {NumberPad, Types, Notes, Tags},
})
export default class Money extends Vue {
  // tags = ['衣', '食', '住', '行', '彩票'];
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 10};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
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

