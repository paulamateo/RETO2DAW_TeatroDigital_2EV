<script setup lang="ts">

</script> 

<template>
    <div class="container-button">
        <button class="button-create-element">
            <div class="button-create-element__content">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                <span>CREAR</span>
            </div>
        </button>
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

                <th>
                    <div class="table__header-content">
                        <p>Obra</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>

                <th>
                    <div class="table__header-content">
                        <p>Director</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>

                <th>
                    <div class="table__header-content">
                        <p>Género</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>

                <th>
                    <div class="table__header-content">
                        <p>Precio</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>

                <th>
                    <div class="table__header-content">
                        <p>Fecha</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>

                <th>
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
            <tr id="row">
                <th>1</th>
                <th>
                    <div class="table-row__showtitle">
                        <img class="table-row__showtitle_img" src="../assets/images/posters/p_romeoandjuliet.jpeg"/>
                        <div class="table-row__showtitle_text">
                            <p><strong>Romeo y Julieta</strong></p>
                            <p>William Shakespeare</p>
                        </div>
                    </div>
                </th>

                <th>Alfonso García</th>
                <th>
                    <div class="table-genre">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                        </svg>
                        <span>Musical</span>
                    </div>
                </th>

                <th>19,90€</th>

                <th>14/02/2024</th>

                <th>1h 30min</th>

                <th>
                    <div class="buttons-actions-panel">
                        <div class="buttons-actions-panel__item buttons-actions-panel__item--update">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                            </svg>
                        </div>
                        <div class="buttons-actions-panel__item buttons-actions-panel__item--delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </div>
                    </div>
                </th>
            </tr>

        </tbody>
    </table>   
</template>

<style scoped>
    .container-button {
        display: flex;
        justify-content: flex-end;
    }

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
        width: 100%;
        font-size: 12px;
        margin-top: 20px;
        border-collapse: collapse;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
</style>