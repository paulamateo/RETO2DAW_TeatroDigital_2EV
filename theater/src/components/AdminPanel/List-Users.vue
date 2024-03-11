<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue'
    import PopUp_CreateUser from './PopUp-CreateUser.vue'
    import PopUp_UpdateUser from './PopUp-UpdateUser.vue'
    import PopUp_DeleteUser from './PopUp-DeleteUser.vue'
    import { useUsersStore } from '../../store/User-Store'
    const store = useUsersStore();

    onMounted(() => {
        store.getAllUsers();
    });

    onUnmounted(() => {
        store.users.splice(0);
    });
</script>

<template>
    <div class="container-button">
        <div class="popup__access-to-admin">
            <PopUp_CreateUser />
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
                <th class="table__header-content--visibility-name">
                    <div class="table__header-content">
                        <p>Nombre</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-lastname">
                    <div class="table__header-content">
                        <p>Apellidos</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>  
                <th class="table__header-content--visibility-email">
                    <div class="table__header-content">
                        <p>Email</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-phone">
                    <div class="table__header-content">
                        <p>Teléfono</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-rol">
                    <div class="table__header-content">
                        <p>Rol</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <tr id="row" v-for="user in store.users" :key="user.userId" class="container-item">
                <th>{{ user.userId }}</th>
                <th class="table__header-content--visibility-name">
                    <div class="table-row__showtitle">
                        <img class="table-row__showtitle_img" src="../../assets/images/elements/user_default.jpg"/>
                        <div class="table-row__showtitle_text">
                            <p><strong>{{ user.userName }}</strong></p>
                        </div>
                    </div>
                </th>
                <th class="table__header-content--visibility-lastname">{{ user.userLastname }}</th>
                <th class="table__header-content--visibility-email">{{ user.email }}</th>
                <th class="table__header-content--visibility-phone">{{ user.phoneNumber }}</th>
                <th class="table__header-content--visibility-rol">
                    <div class="table-genre">
                        <div v-if="user.isAdmin" class="table-genre__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/></svg>
                            <span>Administrador</span>
                        </div>
                        <div v-else class="table-genre__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/></svg>
                            <span>Usuario</span>
                        </div>
                    </div>
                </th>
                <th class="buttons-actions-panel">
                    <div>
                        <PopUp_UpdateUser :userId="user.userId.toString()"/>
                    </div>
                    <div>
                        <PopUp_DeleteUser :userId="user.userId.toString()"/>
                    </div>
                </th>
            </tr>
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
</style>./AdminPanel/PopUp-CreateUser.vue./AdminPanel/PopUp-UpdateUser.vue./AdminPanel/PopUp-DeleteUser.vue../../store/User-Store