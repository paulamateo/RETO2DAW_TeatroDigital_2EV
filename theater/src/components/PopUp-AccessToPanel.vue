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
    <v-btn class="button-open-panel">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
        </svg>
        <span class="button-open-panel__text button-open-panel__text--visibility">ACCEDER</span> 
    </v-btn>

    <v-dialog v-model="dialog" persistent activator="parent" width="400px">
        <v-card>
            <v-card-text>
                <div class="padlock">
                    <input id="input-padlock" type="checkbox">
                    <label class="btn-lock" for="input-padlock">
                        <svg width="36" height="40" viewBox="0 0 36 40">
                            <path class="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path>
                            <path class="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path>
                        </svg>
                    </label>
                </div>
                <h2 class="popup-title">Acceder al panel de administrador</h2>
                <input type="text" class="input-payment-panel" name="titular_input" placeholder="Introduce tu correo electrónico" required>
                <v-card-actions>
                    <v-btn text="CANCELAR" @click="dialog = false"></v-btn>
                    <v-btn class="button-access-panel" @click="ExistsUser">ACCEDER</v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </v-dialog>

</template>

<style scoped>
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

    .button-cancel-access-panel {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        letter-spacing: 0;
    }

    .button-access-panel {
        font-family: 'Inter', sans-serif;
        letter-spacing: 0;
        font-size: 14px;
        background-color: #b20000;
        color: white;
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
        width: calc(100% - 20px);
        border: none;
        background-color: #EAECF0;
        padding: 10px;
        margin: 0 0 15px 0;
        border-radius: 5px;
        font-family: "Inter", sans-serif;
        text-indent: 5px;
        outline: none;
        font-size: 12px;
        margin-left: 10px;
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
        margin: 30px 0px 20px 0px;
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

    .padlock {
        text-align: center;
        margin-top: 20px;
    }
</style>