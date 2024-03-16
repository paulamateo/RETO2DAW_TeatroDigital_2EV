<script setup lang="ts">
    import { ref } from 'vue';
    const title = ref('');
    import { useShowsStore } from '@/store/Show-Store';
    const store = useShowsStore();

    const searchShow = () => {
        if (title.value) {
            store.searchShow(title.value);
        }
    };
</script>

<template>
    <div class="search search--visibility">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="loupe loupe--position" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input type="text" class="search__input" id="search" name="search" :placeholder="$t('Header.searchInput')" @keyup.enter="searchShow" v-model="title">
    </div>
</template>

<style scoped>
    .search {
        position: relative;
    }

    .search__input {
        padding: 10px;
        border: none;
        border-radius: 20px;
        outline: none;
        font-family: "Inter", sans-serif;
        background-color: #353535;
        margin-bottom: 10px;
        text-indent: 40px;
        color: white;
    }

    .search--visibility {
        display: none;
    }

    .loupe {
        position: absolute;
        left: 40px;
        top: 12px;
    }

    @media screen and (min-width: 990px) {
        .search--visibility {
            display: block;
            margin: 0 30px 0 auto;
        }

        .search__input {
            margin: 0;
            width: 150px;
        }

        .loupe--position {
            left: 20px;
            color: white;
        }
    }

    @media screen and (min-width: 1300px) {
        .search__input {
            margin: 0;
            width: 280px;
        }
    }
  </style>
  