<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  // import welcome from "./views/welcome";
  // import qQuestion from "./components/q-Question"

  export default {

  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button{
  background-color: cadetblue;
  color: white;
  border: 1px solid;
  font-size: 16px;
  border-radius: 10px;
  font-weight: bold;
  padding: 5px;
  &.disable {
      background: rgba(180, 180, 180, 0.64);
   }
}

</style>
