<script setup lang="ts">
    import Calendar from '../components/Programming/CalendarApp.vue'

    import { ref } from 'vue';
    import { useUsersStore } from '@/store/User-Store';
    const store = useUsersStore();

    const email = ref('');
    const password = ref('');
    const loginError = ref(false);

    const login = async () => {
        await store.LoginToPanelAdmin(email.value, password.value);
    };

    // const login = async () => {
    // const response = await fetch('http://localhost:8001/User/Login', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: email.value, password: password.value }),
    // });

    // if (response.ok) {
    //     const data = await response.json();
    //     console.log('Inicio de sesión exitoso:', data);
    //     loginError.value = false;
    // } else {
    //     loginError.value = true;
    // }
    // };
</script>

<template>
    <main>
        <div class="banner banner--programming">
            <h1>PROGRAMACIÓN</h1>
        </div>

        <div>
                <h2>Login</h2>
                <form @submit.prevent="login">
                <div>
                    <label for="email">Email:</label>
                    <input v-model="email" type="email" id="email" required>
                </div>
                <div>
                    <label for="password">Contraseña:</label>
                    <input v-model="password" type="password" id="password" required>
                </div>
                <button type="submit">Iniciar Sesión</button>
                </form>
                <p v-if="loginError" style="color: red;">Error en el inicio de sesión. Por favor, intenta de nuevo.</p>
        </div>

        <Calendar />
    </main>
</template>

<style scoped>
    .banner--programming {
        background-image: url(../assets/images/elements/banner_programming.jpg);
    }
    .banner--programming h1 {
        padding-top: 70px;
    }

    .weekday-panel {
        text-align: center;
    }

    .info-panel {
        display: flex;
        font-size: 13px;
    }
    .info-panel p {
        margin: 0;
        margin-top: 15px;
    }

    .show-item {
        position: relative;
        padding: 20px;
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }

    .buy-tickets__button {
        all: unset;
        background-color: #b20000;
        color: white;
        font-size: 10px;
        padding: 10px;
        position: absolute;
        right: 0;
        cursor: pointer;
    }

    .image-container {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
    }

    .img-events-panel {
        max-width: 100%;
        height: auto;
    }

    .no-events {
        font-size: 12px;
        text-align: center;
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        padding: 10px;
    }

    .arrow {
        cursor: pointer;
        margin-right: 5px;
    }

    .no-hover:hover {
        background-color: white;
        color: #ccc;
    }

    .different-hover:hover {
        background-color: #b20000;
        color: white;
    }

    .shows-list {
        display: flex;
        align-items: center;
    }

    .show-line {
        height: 3px;
        background-color: #b0802c;
        position: absolute;
        left: 0;
        right: 0;
        margin-top: 5px;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }

    .next-month-day, .prev-month-day {
        color: #ccc;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        position: relative;
        padding: 15px;
        text-align: center;
        border: 1px solid #cfcfcf;
        cursor: pointer;
    }

    th {
        background-color: black;
        color: white;
        border: 1px solid black;
        font-size: 12px;
    }

    td:hover {
        background-color: #e4e4e4;
    }

    .day-cell-content {
        display: flex;
        flex-direction: column;
    }

    span {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .month-header {
        font-family: "GothamBook", sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        text-align: center;
        padding: 20px;
        background-color: #b20000;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .month-header h3 {
        margin: 0;
    }

    .month-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .current-day {
        background-color: #b20000;
        color: white;
    }

    .container-calendar-events {
        margin: 40px 20px;
    }

    .calendar-container {
        width: 100%;
        overflow: hidden;
        font-size: 10px;
    }

    .date-panel {
        width: 100%;
        margin-top: 40px;
    }

    .info-panel__name {
        font-weight: 600;
        padding-left: 20px;
        text-transform: uppercase;
    }

    @media (min-width: 600px) {
        .container-calendar-events {
            margin: 50px 100px;
        }
    }

    @media (min-width: 990px) {
        .container-calendar-events {
            margin: 50px 120px;
            display: flex;
            gap: 40px;
        }
        #calendar-container {
            width: 75%;
            font-size: 14px;
        }
        #date-panel {
            width: 25%;
            margin-top: 0;
        }
    }

    @media (min-width: 1090px) {
        .info-panel {
            display: flex;
        }
    }
</style>