<template>
  <div>
    <ul class="types">
      <li :class = "value === '-' && 'selected' "
      @click="selectType('-')">支出</li>
      <li :class ="value === '+' && 'selected' "
          @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component,Prop,Watch} from "vue-property-decorator";

//1、自动提示更智能
//2、你不能随便写 .toString()
//3、编译报错 无法变成JS 严谨
@Component
export default class Types extends Vue {
  // 加!  你管我有没有初始值
  @Prop({default:'-'}) readonly value!: string;
  // type = '-' // '-'表示支出    '+'表示收入
  // type: string = 'hi'

  //Number  告诉  Vue   xxx  是个   运行时   Number
  //Prop 告诉 Vue   xxx不是个data是prop
  //number | undefined   告诉  xxx 的   编译时   类型
  //Vue不支持小写的number
  // @Prop(Number) xxx: number | undefined

  //必须要告诉函数的参数
  selectType(type: string){ // type 只能是 '-' 和 '+' 中的一个
    if(type !== '-' && type !== '+'){
      throw new Error
    }
    // this.type = type
    this.$emit('update:value',type)
  }

  // @Watch('type')
  // onTypeChanged(value: string){
  //   this.$emit('update:value',value)
  // }

  mounted(){
    console.log('jack')
    console.log(this.xxx)
    //只有判断类型了才能通过
    if(this.xxx === undefined){
      console.log('没有xxx')
    }else {
      // console.log(this.xxx.yyy)
    }
  }

}

  // export default {
  //   name: "Types",
  //   props: ['xxx'],
  //   data(){
  //     return {
  //       type:'-' // '-'表示支出    '+'表示收入
  //     }
  //   },
  //   mounted() {
  //     console.log(this.xxx)
  //   },
  //   methods: {
  //     selectType(type){ //type 只能是 '-' 和 '+' 中的一个
  //       if(type !== '-' && type !== '+'){
  //         throw new Error
  //       }
  //       this.type = type
  //     }
  //   }
  // }
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
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