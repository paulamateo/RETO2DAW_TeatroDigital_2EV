<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useShowsStore } from '../../store/Show-Store';
import { useShowsByGenreStore, type Show } from '../../store/Genre-Store';
const store = useShowsStore();
const storeGenre = useShowsByGenreStore();

const genres = ref<string[]>([]);
const filteredShows = ref<Show[]>([]);
const selectedGenre = ref<string>('');

onMounted(async () => {
    genres.value = await storeGenre.getAllGenres();
    filteredShows.value = await store.getAllShows();
});

watch(selectedGenre, async (genre) => {
    if (genre === '') {
        filteredShows.value = await store.getAllShows();
    } else {
        filteredShows.value = await storeGenre.getAllShowsByGenre(genre);
    }
});
</script>

<template>
    <div class="select-genre__form">
        <form method="POST">
            <label for="genre">Filtrar por</label>
            <select v-model="selectedGenre" name="genre" id="genre">
                <option value="" selected disabled hidden><span>GÉNERO</span></option>
                <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
            </select>
        </form>
    </div>

    <div class="container">
        <div v-for="show in filteredShows" :key="show.showId" class="container-item">
            <RouterLink :to="{ path: '/Shows/' + show.showId }">
                <div class="genre">{{ show.genre }}</div>
                <img :src="show.poster" alt="show.title"/>
                <div class="title">
                    <h3>{{ show.title }}</h3>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    select {
        font-family: "Inter", sans-serif;
        width: 110px;
        border-radius: 20px;
        padding: 10px;
        outline: none;
        font-weight: 700;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><polygon points="0,0 12,0 6,6" fill="black"/></svg>') no-repeat right 12px center;
        background-size: 12px auto;
        appearance: none;
        border: 1px solid #353535;
    }

    .select-genre__form {
        margin: 60px 70px 20px 70px;
        display: flex;
        justify-content: right;
        font-size: 14px;
    }

    .select-genre__form label {
        margin-right: 10px;
    }

    .container {
        margin: 20px 70px 70px 70px;
        gap: 30px;
        font-size: 0;
    }

    .container-item {
        position: relative;
        width: 100%;
        overflow: hidden;
        text-align: center;
        height: auto;
        margin-bottom: 30px;
        cursor: pointer;
    }

    .container-item img {
        width: 100%;
        object-fit: cover;
    }

    .title {
        background-color: #0b0b0b;
        color: white;
        padding: 8px;
        height: 60px;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }

    .genre {
        all: unset;
        position: absolute;
        top: 10px;
        left: 15px;
        background-color: #b20000;
        color: white;
        padding: 15px;
        border-radius: 30px;
        font-size: 12px;
        margin: 15px 0 0 10px;
        text-transform: uppercase;
    }

    @media (min-width: 760px) {
        .container {
            display: grid;
            grid-template-columns: repeat(2, calc(50% - 10px));
        }
        .container-item {
            margin-bottom: 0;
        }
    }

    @media (min-width: 990px) {
        .container {
            grid-template-columns: repeat(4, calc(24% - 10px));
        }
    }
</style>