<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from './components/HeaderApp.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Header></Header>

  <RouterView></RouterView>

  <Footer></Footer>
</template>