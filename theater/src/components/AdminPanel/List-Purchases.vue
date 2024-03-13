<template>
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
                <th class="table__header-content--visibility-phone">
                    <div class="table__header-content">
                        <p>Fecha</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-phone">
                    <div class="table__header-content">
                        <p>Obra</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-phone">
                    <div class="table__header-content">
                        <p>Sesión</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-phone">
                    <div class="table__header-content">
                        <p>Asientos</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-name">
                    <div class="table__header-content">
                        <p>Nombre completo</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-lastname">
                    <div class="table__header-content">
                        <p>Email</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>  
                <th class="table__header-content--visibility-email">
                    <div class="table__header-content">
                        <p>Teléfono</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-phone">
                    <div class="table__header-content">
                        <p>Precio total</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
            </tr>
        </thead>

        <tbody>
            <th>1</th>
            <th>12/04/2024</th>
            <th>El Fantasma de la Ópera</th>
            <th>3</th>
            <th>15, 16</th>
            <th><strong>Paula Mateo Bordetas</strong></th>
            <th>paulamateob@gmail.com</th>
            <th>123456789</th>
            <th>20.99€</th>
        </tbody>
    </table>
</template>

<style scoped>
    .table-genre__icon {
        display: flex;
        align-items: center;
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

    @media (max-width: 1200px) {
        .table__header-content--visibility-rol {
            display: none;
        }
    }

    @media (max-width: 900px) {
        .table__header-content--visibility-phone {
            display: none;
        }
    }

    @media (max-width: 720px) {
        .table__header-content--visibility-email {
            display: none;
        }
    }

    @media (max-width: 550px) {
        .table__header-content--visibility-lastname {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .table__header-content--visibility-name {
            display: none;
        }
    }

    @media (min-width: 800px) {
        .container-button {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>