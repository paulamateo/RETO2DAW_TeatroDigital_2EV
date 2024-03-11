<script setup lang="ts">
    import ListShows from '../components/AdminPanel/List-Shows.vue'
    import ListUsers from '../components/AdminPanel/List-Users.vue'
    import ListSessions from '@/components/AdminPanel/List-Sessions.vue';
    import { ref } from 'vue';

    const selectedTabMenu = ref('');
    
    function menuItemClick(tab: string) {
        selectedTabMenu.value = tab;
    }
</script>

<template>
    <div class="container-panel-admin">
        <div class="column-tabs">
            <div class="column-tabs__user">
                <img class="column-tabs__user_img" src="../assets/images/elements/user_default.jpg"/>
                <h3 class="column-tabs__name-user">¡Hola, Admin! 👋</h3>
            </div>
            <RouterLink to="/">
                <div class="button-return">
                    <v-btn class="return">
                        <span>REGRESAR</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/><path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/></svg>
                    </v-btn>
                </div> 
            </RouterLink>
            <nav class="column-tabs__menu">
                <ul>
                    <li :class="{ 'active' : selectedTabMenu == 'shows'}"  @click="menuItemClick('shows')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels-fill" viewBox="0 0 16 16"><path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/><path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>
                        <span>Obras</span>
                    </li>
                    <li :class="{ 'active' : selectedTabMenu == 'sessions'}" @click="menuItemClick('sessions')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                        </svg>
                        <span>Sesiones</span>
                    </li>
                    <li :class="{ 'active' : selectedTabMenu == 'users'}" @click="menuItemClick('users')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <span>Usuarios</span>
                    </li>
                </ul>           
            </nav>
        </div>

        <div class="column-data">
            <div class="column-data__header">
                <h2>Panel de Administración</h2>
                <img class="column-data__img column-data__img--display" src="../assets/images/elements/logo_blanco.png"/>
            </div>
            <div class="column-data__content">
                <ListShows v-if="selectedTabMenu === 'shows'" />
                <ListUsers v-else-if="selectedTabMenu === 'users'" />
                <ListSessions v-else-if="selectedTabMenu === 'sessions'" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    @media (max-width: 500px) {
        .column-data__img--display {
            display: none;
        }
    }

    .column-data__img {
        width: 120px;
    }

    .button-return {
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 30px;
    }

    .return {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: lowercase;
        letter-spacing: 0;
        font-size: 12px;
    }

    .return span {
        margin-right: 10px;
    }

    .return span:first-letter {
        text-transform: uppercase;
    }

    .column-tabs__user {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #363740;
    }

    .column-tabs__user_img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 30px;
    }

    .column-tabs__user h3 {
        margin-top: 20px;
    }

    .column-tabs__menu {
        margin-top: 30px;
        font-size: 12px;
        color: #A4A6B3;
    }
    
    .column-tabs__menu li {
       padding: 15px;
       cursor: pointer;
       display: flex;
       align-items: center;
    }

    .column-tabs__menu ul svg {
       margin-right: 15px;
    }

    .column-tabs__menu li:hover,
    .column-tabs__menu li.active {
        background-color: #454752;
        color: white;
    }

    .container-panel-admin {
        display: grid;
        grid-template-columns: 1fr 7fr;
        background-color: #363740;
    }

    .column-tabs {
        background-color: #363740;
        height: 100vh;
        color: white;
        position: relative;
    }

    .column-data {
        background-color: #EAECF0;
        width: 100%;
    }

    .column-data__header {
        background-color: white;
        padding: 20px 40px 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
    }

    .column-data__header h2 {
        margin: 0;
    }

    .column-data__content {
        margin: 60px;
    }

    .column-tabs__name-user {
        font-size: 15px;
        text-align: center;
    }

    @media (min-width: 950px) { 
        .column-tabs__user_img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-top: 30px;
        }

        .column-tabs__name-user {
            font-size: 20px;
            text-align: center;
        }

        .column-data__header {
            font-size: 15px;
        }
    }
</style>../components/AdminPanel/ListShows.vue../components/AdminPanel/ListUsers.vue../components/AdminPanel/List-Shows.vue../components/AdminPanel/List-Users.vue