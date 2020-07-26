<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/containers/AuditLog/AuditLogPage'

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
  margin: 0;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
