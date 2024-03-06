<script setup lang="ts">
    import { ref } from 'vue';

    const dialog = ref(false);

    function ExistsUser() {
        const inpLock = document.getElementById("input-padlock") as HTMLInputElement;
        inpLock.checked = !inpLock.checked;
        inpLock.dispatchEvent(new Event("change"));
    }
</script>

<template>
    <div class="popup__access-to-admin">
        <v-btn color="primary">Open Dialog</v-btn>
        <v-dialog v-model="dialog" persistent activator="parent" width="auto">
            <v-btn color="primary" block @click="dialog = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </v-btn>

            <div class="padlock">
                    <input id="input-padlock" type="checkbox">
                    <label class="btn-lock" for="input-padlock">
                        <svg width="36" height="40" viewBox="0 0 36 40">
                            <path class="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path>
                            <path class="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path>
                        </svg>
                    </label>
                </div>

            <v-card title="Accede al Panel de Administrador" class="title">
                
                <v-card-text>
                    Introduce tu correo electrónico
                </v-card-text>

                <v-card-actions>
                    <v-btn class="button" id="button-access-panel" @click="ExistsUser">ACCEDER</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
    .title {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
    }
    
    .btn-lock {
        display: inline-block;
        background: red; 
        width: 64px;
        height: 64px;
        box-sizing: border-box;
        padding: 12px 5px 10px 14px;
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
</style>