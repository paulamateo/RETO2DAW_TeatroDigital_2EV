<script setup lang="ts">
    import Shows from '../components/Billboard/ShowsApp.vue';
</script>

<template>
    <main>
        <div class="banner banner--tickets">
            <h1>{{ $t("Billboard.titleBanner") }}</h1>
        </div>        
        <Shows />
    </main>
</template>

<style scoped>
    .banner--tickets {
        background-image: url(../assets/images/elements/banner_billboard.jpg);
    }
    .banner--tickets h1 {
        padding-top: 60px;
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

    form {
        font-size: 14px;
    }

    .title {
        background-color: #0b0b0b;
        color: white;
        padding: 8px;
        height: 50px;
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
</style>../components/Billboard/ShowsApp.vue