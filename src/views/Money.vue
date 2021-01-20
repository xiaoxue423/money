<template>
    <layout class-prefix="layout">
      <Tags :data-source="tags"/>
      <Notes />
      <Types :xxx="333"/>
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
    components: {Tags, Notes, NumberPad,Types},
    data(){
      ['衣','食','住','行']
    }
  }
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

