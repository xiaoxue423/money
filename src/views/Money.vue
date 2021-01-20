<template>
    <layout class-prefix="layout">
      <NumberPad />
      <Types />
      <Notes />
      <Tags />
    </layout>
</template>

<script lang="ts">
  import NumberPad from "@/components/Money/NumberPad.vue"
  import Notes  from "@/components/Money/Notes.vue"
  import Types  from "@/components/Money/NumberPad.vue"
  import Tags  from "@/components/Money/Tags.vue"

  export default {
    name: "Money",
    components: {Tags, Notes, NumberPad,Types}
  }
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

