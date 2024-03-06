<script setup lang="ts">
    import { ref } from 'vue';
    const dialog = ref(false);
    const email = ref('');
    const isValidEmail = ref(true);
    const fieldsEmpty = ref(false);

    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        isValidEmail.value = emailRegex.test(email.value);
    }

    import { useUsersStore } from '../store/User-Store'
    const usersStore = useUsersStore();

    async function submitForm() {
        if (email.value === '') {
            fieldsEmpty.value = true;
            return;
        }

        await usersStore.getAllUsers();
        const adminUsers = usersStore.getAdminUsers();
        const isAdminUser = adminUsers.some(user => user.email === email.value);

        if (isAdminUser) {
            setTimeout(() => {
                window.location.href = '/Admin-Panel';
            }, 1000); 
        }
    }

    async function ExistsUser() {
        await usersStore.getAllUsers();
        const adminUsers = usersStore.getAdminUsers();
        const isAdminUser = adminUsers.some(user => user.email === email.value);
        
        if (isAdminUser) {
            const inpLock = document.getElementById("input-padlock") as HTMLInputElement;
            inpLock.checked = !inpLock.checked;
            inpLock.dispatchEvent(new Event("change"));
        }
    }
</script>

<template>
    <v-btn class="button-open-panel">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
        </svg>
        <span class="button-open-panel__text button-open-panel__text--visibility">ACCEDER</span> 
    </v-btn>

    <v-dialog v-model="dialog" persistent activator="parent" width="400px">
        <v-card>
            <v-card-text>
                <div class="icon-close-popup" @click="dialog = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                <div class="padlock">
                    <input id="input-padlock" type="checkbox">
                    <label class="btn-lock" for="input-padlock">
                        <svg width="36" height="40" viewBox="0 0 36 40"><path class="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path><path class="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path></svg>
                    </label>
                </div>
                <h2 class="popup-title">Acceder al panel de administrador</h2>
                <form @submit.prevent="submitForm" novalidate>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
                        <input  @input="validateEmail" v-model="email" type="text" class="input-payment-panel" name="titular_input" placeholder="Correo electrónico" require>
                        <span class="error-message" v-if="!isValidEmail">Correo electrónico no válido</span>
                    </div>
                    <span v-if="fieldsEmpty && email.length === 0" class="error-message">Por favor, completa todos los campos</span>
                    <v-btn type="submit" class="mb-4 button-login" size="large" block @click="ExistsUser()">Acceder</v-btn>
                </form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<style scoped>
    .error-message {
        font-size: 10px;
        color: red;
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
        margin-top: -5px;
        font-family: 'Inter', sans-serif;
    }

.icon-panel {
        position: absolute;
        color: #c3c3c3;
        left: 15px;
        top: 8px;
    }

    .panel-box {
        position: relative;
        color: #0b0b0b;
        width: 100%;
    }
    .button-login {
        background-color: #b20000;
        letter-spacing: 0;
        color: white;
        font-size: 12px;
        border: none;
        font-family: 'Inter', sans-serif;
    }
    .icon-close-popup {
        display: flex;
        justify-content: right;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        .button-open-panel__text--visibility {
            display: none;
        }
    }

    .v-btn--size-default {
        min-width: 50px;
        letter-spacing: 0;
        font-family: 'Inter', sans-serif;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-access-panel {
        font-family: 'Inter', sans-serif;
        letter-spacing: 0;
        font-size: 14px;
        background-color: #b20000;
        color: white;
        border: 0;
    }

    .button-open-panel {
        letter-spacing: 0;
        font-size: 12px;
        font-weight: 700;
        width: 100px;
    }

    .button-open-panel svg {
        margin-right: 5px;
    }

    .input-payment-panel {
        width: 100%;
        border: none;
        background-color: #EAECF0;
        padding: 10px;
        margin: 0 0 15px 0;
        border-radius: 5px;
        font-family: "Inter", sans-serif;
        text-indent: 5px;
        outline: none;
        font-size: 12px;
        text-indent: 40px;
    }

    .input-payment-panel::placeholder {
        color: #c3c3c3;
    }
    .popup-title {
        padding: 0;
        font-weight: bold;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0;
        text-align: center;
        margin: 20px 0px 20px 0px;
    }

    
    .btn-lock {
        display: inline-block;
        background: red; 
        width: 64px;
        height: 64px;
        box-sizing: border-box;
        padding: 11px 7px 20px 15px;
        border-radius: 50%;
        pointer-events: none;
        -webkit-tap-highlight-color: transparent;
        transition: background-color 0.3s ease; 
    }

    .btn-lock svg {
        fill: none;
    }

    .btn-lock svg .lock {
        stroke: #fff;
        stroke-width: 4;
        stroke-linejoin: round;
        stroke-linecap: round;
        transition: all 0.4s ease;
    }

    .btn-lock svg .lockb {
        fill: #fff;
        fill-rule: evenodd;
        clip-rule: evenodd;
        transition: all 0.2s ease;
    }

    #input-padlock {
        display: none;
    }

    #input-padlock:checked + label {
        background: green;
        stroke-dasharray: 36;
    }

    #input-padlock:checked + label svg .lock {
        stroke-dasharray: 48;
        animation: locked 0.3s linear forwards;
        stroke-dasharray: 36;
    } 

    #input-padlock:checked + label svg .lockb {
        transform: rotate(5deg);
        transform-origin: 14px 22px;
    }

    .padlock {
        text-align: center;
        margin-top: 20px;
    }
</style>