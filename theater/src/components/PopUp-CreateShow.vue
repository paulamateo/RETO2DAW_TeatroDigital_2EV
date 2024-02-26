<template>
    <v-dialog :value="popupVisible" @update:value="handleInput" max-width="500">
      <v-card>
        <v-card-title>
          Hola
        </v-card-title>
        <v-card-text>
         Prueba
        </v-card-text>
    
      </v-card>
    </v-dialog>
  </template>

  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const popupVisible = ref(false);
  
  function handleInput(value: boolean) {
    popupVisible.value = value;
  }
  </script>
  
  