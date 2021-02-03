<template>
  <div>
    <ul class="types">
<!--      <li class="selected">支出</li>-->
      <li :class = "value === '-' && 'selected' " @click="selectType('-')">
        支出
      </li>

      <li :class ="value === '+' && 'selected' " @click="selectType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component,Prop} from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop({default:'-'}) readonly value!: string;// 加!  你管我有没有初始值
  selectType(type: string){ // type 只能是 '-' 和 '+' 中的一个
    if(type !== '-' && type !== '+'){
      throw new Error('type is unknown')
    }
    this.$emit('update:value',type)
  }
}
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    //字体居中
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      //当前li被选中
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>