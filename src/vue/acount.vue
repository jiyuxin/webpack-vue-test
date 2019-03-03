<template>
  <div>
    {{msg}}
    <router-view></router-view>
    <router-link to="/acount/login">login</router-link>
    <router-link to="/acount/register">register</router-link>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg: 'acount msg'
      }
    }
  }
</script>

<style></style>