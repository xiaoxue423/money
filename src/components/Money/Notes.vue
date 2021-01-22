<template>
  <div>
    <label class="notes">
      {{value}}
      <span class="name">备注</span>
<!--      <input type="text" :value="x"-->
<!--             @input="x = $event.target.value"-->
<!--             v-model="x"-->
<!--             placeholder="在这里输入备注">-->

      <input type="text"
             v-model="value"
             placeholder="在这里输入备注">
      <!--             @input="$emit('update:value',$event.target.value)"-->
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component,Watch} from 'vue-property-decorator';


  @Component
  export default class Notes extends Vue{
    value = '';

    @Watch('value')
      onValueChanged(value: string){
        this.$emit('update:value',value);
      }
  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>