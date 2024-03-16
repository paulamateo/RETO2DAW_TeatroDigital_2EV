<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from './components/Elements/HeaderApp.vue'
  import Footer from './components/Elements/FooterApp.vue'
  import { useRoute } from 'vue-router';
  const route = useRoute()

  function isInAdminPanel() {
    return route.path.startsWith('/Admin-Panel')
  }
</script>

<template>
  <template v-if="!isInAdminPanel()">
      <Header></Header>
      <RouterView></RouterView>
      <Footer></Footer>
  </template>
  <template v-else>
      <RouterView></RouterView>
  </template>
</template>