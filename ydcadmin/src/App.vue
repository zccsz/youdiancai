<template>
  <div id="app">
    <my-header></my-header>
    <div class="nav">
      <div class="nav-left">
        <my-aside></my-aside>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app .nav{
  display: flex;
}
#app .nav .nav-left{
  width: 20%;
}
</style>
