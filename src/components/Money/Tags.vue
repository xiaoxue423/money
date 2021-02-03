<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(tag) in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;  //这是一个字符串数组 readonly表示只读
  selectedTags: string[] = [];

  toggle(tag: string) { //toggle表示开关的意思 可以选中或取消tag
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1); //删一个
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  create() {
    const name = window.prompt('请输入标签名');
    // console.log(name);
    if (name === '') {
      window.alert('标签名不能为空');
    } else if (this.dataSource) {
      // this.dataSource.push(name as string) // this.dataSource.push(name!) 告诉ts name不是null 怎么能改外部的数据呢
      this.$emit('update:dataSource', [...this.dataSource, name]);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  border: 1px solid red;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg:#d9d9d9;
      background: $bg;
      $h: 24px;
      //height: 24px;
      height: $h;
      //确定只有一行的时候就用line-height来垂直居中
      line-height: $h;
      //border-radius: $h/2;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      //不给颜色  颜色就和字体就是一样的
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }

}
</style>