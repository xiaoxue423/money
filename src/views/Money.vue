<template>
    <layout class-prefix="layout">
      {{recordList}}
      {{record}}

      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
      <Notes @update:value="onUpdateNotes"/>
<!--      <Types :value="record.type" @update:value="onUpdateType"/>-->

      <Types :value.sync="record.type" />
<!--      <NumberPad :value="record.amount" @update:value="onUpdateAmount"/>-->

      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    </layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import NumberPad from "@/components/Money/NumberPad.vue"
  import Notes  from "@/components/Money/Notes.vue"
  import Types  from "@/components/Money/Types.vue"
  import Tags  from "@/components/Money/Tags.vue"
  import {Component,Watch} from 'vue-property-decorator'
  import {tagListModel} from '@/models/tagListModel';

  // import model from '@/model.js';  TS和JS配合
  // const model = require('@/model.js').model;

  // const {model} = require('@/model.js').model;
  // console.log(model);


  const version = window.localStorage.getItem('version') || '0'

  // const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList'));

  // const recordList: RecordItem[] = model.fetch();

  // if(version === '0.0.1') {
  //   //数据库升级 数据迁移
  //   recordList.forEach(record =>{
  //     record.createAt = new Date(2021,0,1)
  //   });
  //   //保存数据
  //   window.localStorage.setItem('recordList',JSON.stringify(recordList));
  // }else if(version === '0.0.2'){
  //   window.localStorage.setItem('version','0,0,3');
  // }

// const recordList  = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: { NumberPad,Notes,Types,Tags},
})
export default class Money extends Vue{

  // data(){
  //   return {
  //     tags: ['衣','食','住','行']
  //   }
  // }

  tags = tagList;
  // recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList'))
  // recordList: RecordItem[] = []
  record: RecordItem = {
    tags: [],notes: '', type: '-', amount: 10
  }
  onUpdateTags(value: string[]){
    console.log(value);
    this.record.tags = value;
  }
  onUpdateNotes(value: string){
    console.log(value);
    this.record.notes = value
  }

  // onUpdateType(value: string){
  //   console.log(value);
  //   this.record.type = value
  // }

  // onUpdateAmount(value: string){
  //   console.log(value);
  //   this.record.amount = parseFloat(value);
  // }

  saveRecord()
    // const record2：RecordItem = JSON.parse(JSON.stringify(this.record));
    // const record2：RecordItem = model.clone(this.record)
    // record2.createdAt = new Date();

    // this.recordList.push(record2);
    // console.log(this.recordList);
    // localStorage.set('recordList', JSON.str(this.recordList))
  // }

  // @Watch('recordList')
  // onRecordListChange(){
    // window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
    // model.save(this.recordList);
  // }
}
</script>

<style lang="scss">
//.layout-content {
//  display: flex;
//  flex-direction: column-reverse;
//}
</style>

