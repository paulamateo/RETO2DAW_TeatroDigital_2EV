<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { useI18n } from 'vue-i18n';
    const { locale } = useI18n();
    const selectedLocale = ref('');

    interface Language {
        name: string,
        code: string
    }

    const languages: Language[] = [
        { name: 'ES', code: 'es' },
        { name: 'EN', code: 'en' }
    ];

    watch (selectedLocale, (newLocale) => {
        if (newLocale) {
            locale.value = newLocale;
        }
    }, { immediate: true });

    selectedLocale.value = 'es';
</script>

<template>
    <div class="language-selector">
        <select v-model="selectedLocale">
            <option v-for="language in languages" :key="language.code" :value="language.code">{{ language.name }}</option>
        </select>
    </div>
</template>

<style scoped>
    .language-selector select {
        padding: 0.5em;
        margin: 1em 0;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        color: black;
        font-weight: 400;
        outline: none;
        cursor: pointer;
    }
</style>