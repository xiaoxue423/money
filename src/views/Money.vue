<template>
    <layout class-prefix="layout">
      <Tags :data-source.sync="tags"/>
      <Notes />
      <Types />
      <NumberPad />
    </layout>
</template>

<script>
  import NumberPad from "@/components/Money/NumberPad.vue"
  import Notes  from "@/components/Money/Notes.vue"
  import Types  from "@/components/Money/NumberPad.vue"
  import Tags  from "@/components/Money/Tags.vue"

  export default {
    name: "Money",
    components: { NumberPad,Notes,Types,Tags},
    data(){
      return {
        tags: ['衣','食','住','行']
      }
    }
  }
</script>

<style lang="scss">
//.layout-content {
//  display: flex;
//  flex-direction: column-reverse;
//}
</style>

