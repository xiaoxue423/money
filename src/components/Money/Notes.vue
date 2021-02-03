<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             v-model="value"
             :placeholder="this.placeholder">
      <!--             @input="$emit('update:value',$event.target.value)"-->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  // eslint-disable-next-line no-undef
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;
  @Watch('value') //只要value变化  就触发事件   所以watch这个value
  onValueChanged(value: string) {
    this.$emit('update:value', value); //value变化   就触发事件
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  //垂直居中
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