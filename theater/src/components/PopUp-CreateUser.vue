<script setup lang="ts">
    import { ref } from 'vue';

    const dialog = ref(false);
</script>

<template>
    <v-btn class="button-create-show">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
        <span>CREAR</span> 
    </v-btn>
</template>

<style scoped>
    .button-create-element {
        all: unset;
        background-color: #000AFF;
        color: white;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        border-radius: 30px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        width: 100px;
    }

    .button-create-show {
        letter-spacing: 0;
        font-size: 12px;
        background-color: #000AFF;
        color: white;
        border-radius: 30px;
    }

    .button-create-show svg {
        margin-right: 7px;
    }

</style>