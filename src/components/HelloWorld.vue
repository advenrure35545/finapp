<template lang="pug">
  div
    h1 Hello World
    p {{name}}
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: this.$store.state.name,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1{
    color: red;
  }

</style>
