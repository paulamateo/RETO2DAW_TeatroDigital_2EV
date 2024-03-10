<script setup lang="ts">
    import { onMounted } from 'vue'
    import PopUp_CreateShow from './PopUp-CreateShow.vue'
    import PopUp_UpdateShow from './PopUp-UpdateShow.vue'
    import PopUp_DeleteShow from './PopUp-DeleteShow.vue'
    import { useShowsStore } from '../../store/Show-Store'
    import { format } from 'date-fns';
    const store = useShowsStore();

    onMounted(() => {
        store.getAllShows();
    });

    const formatDate = (date: Date) => {
        return format(new Date(date), 'dd/MM/yyyy');
    };
</script>

<template>
    <div class="container-button">
        <div class="popup__access-to-admin">
            <PopUp_CreateShow />
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>
                    <div class="table__header-content">
                        <p>ID</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table-element--visibility-show">
                    <div class="table__header-content">
                        <p>Obra</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table-element--visibility-director">
                    <div class="table__header-content">
                        <p>Director</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table-element--visibility-genre">
                    <div class="table__header-content">
                        <p>Género</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table-element--visibility-price">
                    <div class="table__header-content">
                        <p>Precio</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table-element--visibility-date">
                    <div class="table__header-content">
                        <p>Fecha</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table-element--visibility table-element--visibility-duration">
                    <div class="table__header-content">
                        <p>Duración</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <tr id="row" v-for="show in store.shows" :key="show.showId" class="container-item">
                <th>{{ show.showId }}</th>
                <th class="table-element--visibility table-element--visibility-show">
                    <div class="table-row__showtitle">
                        <img class="table-row__showtitle_img" :src="show.poster" alt="{{ show.title }}"/>
                        <div class="table-row__showtitle_text">
                            <p><strong>{{ show.title }}</strong></p>
                            <p>{{ show.author }}</p>
                        </div>
                    </div>
                </th>
                <th class="table-element--visibility-director">{{ show.director }}</th>
                <th class="table-element--visibility-genre">
                    <div class="table-genre">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                        </svg>
                        <span>{{ show.genre }}</span>
                    </div>
                </th>
                <th class="table-element--visibility-price">{{ show.price }}€</th>
                <th class="table-element--visibility-date">{{ formatDate(show.date) }}</th>
                <th class="table-element--visibility-duration">{{ show.length }}</th>  
                <th class="buttons-actions-panel">
                    <div>
                        <PopUp_UpdateShow :show-id="show.showId.toString()"/>
                    </div>
                    <div>
                        <PopUp_DeleteShow :showId="show.showId.toString()"/>
                    </div>
                </th>
            </tr>
        </tbody>
    </table>   
</template>

<style scoped>
    @media (max-width: 1100px) {
        .table-element--visibility-duration {
            display: none;
        }
    }

    @media (max-width: 980px) {
        .table-element--visibility-date {
            display: none;
        }
    }

    @media (max-width: 780px) {
        .table-element--visibility-date {
            display: none;
        }
        .table-element--visibility-price {
            display: none;
        }
    }

    @media (max-width: 780px) {
        .table-element--visibility-genre {
            display: none;
        }
        .table-element--visibility-director {
            display: none;
        }
    }

    @media (max-width: 400px) {
        .table-element--visibility-show {
            display: none;
        }
    }

    @media (min-width: 800px) {
        .container-button {
            display: flex;
            justify-content: flex-end;
        }
    }

    .v-btn--size-default {
        min-width: 20px;
    }
    
    .buttons-actions-panel__item--delete {
        background-color: #D03A3A;
        margin-right: 10px;
        color: white;
        width: 40px;
    }

    .container-button {
        display: flex;
    }

    .button-create-element__content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 15px;
    }

    .button-create-element__content svg {
        margin-right: 7px;
    }

    .table-genre {
        display: flex;
        align-items: center;
        background-color: #F9FAFB;
        color: #363740;
        padding: 8px;
        border-radius: 20px;
    }

    .table-genre svg {
        margin-left: 5px;
        margin-right: 10px;
        color: #363740;
    }

    tr {
        border-bottom: 1px solid #EAECF0;
    }

    tr:last-child {
        border-bottom: none;
    }

    table {
        font-size: 12px;
        margin-top: 20px;
        border-collapse: collapse;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
    }

    thead {
        background-color: #F9FAFB;
        padding: 20px;
        color: #8A92A6;
    }

    thead th {
        border: none;
        padding: 10px;
        font-weight: 400;
    }

    thead th:first-child {
        border-top-left-radius: 10px;
    }

    thead th:last-child {
        border-top-right-radius: 10px;
    }

    .table__header-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    tbody {
        background-color: white;
        border: 1px solid #EAECF0;
    }

    tbody th {
        font-weight: 400;
        padding: 10px;
    }

    .buttons-actions-panel {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttons-actions-panel__item {
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .buttons-actions-panel__item--delete {
        background-color: #D03A3A;
    }

    .buttons-actions-panel__item--update {
        background-color: #0DBF3F;
        margin-right: 10px;
    }

    .table-row__showtitle {
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .table-row__showtitle_img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

    .table-row__showtitle_text {
        text-align: left;
        margin-left: 15px;
    }

    .table-row__showtitle_text p {
        margin: 0;
    }
</style>./AdminPanel/PopUp-CreateShow.vue./AdminPanel/PopUp-UpdateShow.vue./AdminPanel/PopUp-DeleteShow.vue../../store/Show-Store