<template>
  <div>
    {{msg}}
    <router-view></router-view>
    <router-link to="/acount">acount</router-link>
    <router-link to="/other">other</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'app msg'
      }
    }
  }
</script>

<style></style>