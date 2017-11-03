<template>
  <div>
    <Novel :content3="content3" :img2="img2"></Novel>
  </div>
</template>

<script>
  import Novel from './Novel'

  export default {
    props: {
      content3: {
        type: Object
      },
      img2: {
        type: Object
      }
    },
    components: {
      Novel
    }
  }
</script>

<style scoped>

</style>
