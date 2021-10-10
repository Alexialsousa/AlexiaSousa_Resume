<template>
  <v-app>
    <v-main>
      <Navbar/>
      <router-view class="animate__animated animate__fadeInLeft animate__faster"/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },
};
</script>

<style>
* {
  font-family: sans-serif !important;
}
</style>