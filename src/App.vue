<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Home from './components/containers/Home'

export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&display=swap');
html, body {
    font-family: "Open Sans", sans-serif;
    margin: 0

}

#app {
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
