<script setup lang="ts">
    import { onMounted } from 'vue'
    import { useShowsByGenreStore } from '../../store/Genre-Store'
    const store = useShowsByGenreStore();

    onMounted(() => {
        store.getAllShowsMusical();
    });
</script>

<template>
    <section class="shows">
        <div class="shows__rectangle">
            <h2>VIVE LA MAGIA MUSICAL</h2>
        </div>
        <div class="shows__grid shows__grid--columns" id="shows-grid__musical-genre">
            <div v-for="musical in store.musicalShows" :key="musical.showId" >
                <div class="grid-item" :style="{ backgroundImage: 'url(' + musical.scene + ')' }">
                    <h2>{{ musical.title }}</h2>
                    <RouterLink :to="{ path: '/Shows/' + musical.showId }">
                        <button class="button button--index" type="submit" id="button">VER ENTRADAS</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.shows__grid {
    margin: 50px;
    color: white;
    font-weight: 400;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 300px);
    grid-gap: 30px;
}

.grid-item {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background-size: cover;
    background-position: center;
    height: 300px;
}
.grid-item h2 {
    font-family: "GothamLight", sans-serif;
    letter-spacing: 0.15em;
}
.grid-item__button:hover {
    background-color: #b0802c;
}
.grid-item__button--position {
    margin: 30px 0 0 auto;
}

.shows__rectangle {
    background-color: #b20000;
    text-align: center;
    color: white;
    font-weight: 300;
    padding: 15px;
}
.shows__rectangle h2 {
    font-family: "GothamLight", sans-serif;
    letter-spacing: 0.15em;
}



.button--index {
    margin-top: 10px;
}

.chevronleft-icon {
    cursor: pointer;
    color: white;
    position: absolute;
    bottom: 50px;
    animation: arrow 2s infinite;
}

.map {
    filter: grayscale(100%);
}

@keyframes arrow {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
}

@media screen and (min-width: 990px) {
    .shows__grid--columns {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 300px;
        grid-gap: 30px;
    }
    .second-banner__review {
        font-size: 14px;
    }
    .second-banner__content {
        margin: 0 0 0 80px;
        line-height: 20px;
    }
    .hero-banner h1 {
        font-size: 280%;
    }
    .hero-banner__subtitles {
        /* line-height: 5px; */
        font-size: 120%;
    }
}
</style>../../store/Genre-Store