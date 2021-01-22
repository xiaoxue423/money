<template>
  <div>
    <layout>
      Labels.vue
      <ol class="tags">
        <li>
          <span>衣</span>
          <Icon name="right"/>
        </li>
        <li>
          <span>食</span>
          <Icon name="right"/>
          食
        </li>
        <li>
          <span>住</span>
          <Icon name="right"/>
        </li>
        <li>
          <span>行</span>
          <Icon name="right"/>
        </li>
      </ol>

      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {tagListModel} from '@/models/tagListModel';
  const tags = tagListModel.fetch()

  @Component
  export default class Labels extends Vue{
    // name: "Labels",

  }
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  >li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag{
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-warpper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>