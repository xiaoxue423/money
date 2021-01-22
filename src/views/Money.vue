<template>
    <layout class-prefix="layout">
      {{record}}
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
      <Notes @update:value="onUpdateNotes"/>
<!--      <Types :value="record.type" @update:value="onUpdateType"/>-->

      <Types :value.sync="record.type" />
<!--      <NumberPad :value="record.amount" @update:value="onUpdateAmount"/>-->

      <NumberPad :value.sync="record.amount" />
    </layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import NumberPad from "@/components/Money/NumberPad.vue"
  import Notes  from "@/components/Money/Notes.vue"
  import Types  from "@/components/Money/Types.vue"
  import Tags  from "@/components/Money/Tags.vue"
  import {Component} from 'vue-property-decorator'

  // var record = {
  //   tags:['1','2'],
  //   notes:'xxxx'
  //   type:'-'
  //   amount:100
  // }

  // 声明一个类型
  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
  }

@Component({
  components: { NumberPad,Notes,Types,Tags},
})
export default class Money extends Vue{
  // data(){
  //   return {
  //     tags: ['衣','食','住','行']
  //   }
  // }
  tags = ['衣','食','住','行']
  record: Record = {
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
}
</script>

<style lang="scss">
//.layout-content {
//  display: flex;
//  flex-direction: column-reverse;
//}
</style>

