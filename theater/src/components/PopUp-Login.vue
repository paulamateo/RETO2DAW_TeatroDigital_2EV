<script setup lang="ts">
    import { ref } from 'vue';
    const login = ref(false);
</script>

<template>
    <v-btn class="button-open-panel">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
        <span class="button-open-panel__text button-open-panel__text--visibility">INICIAR SESIÓN</span> 
    </v-btn>

    <v-dialog v-model="login" persistent activator="parent" width="400px">
        <v-card>
            <v-card-text>
                <div class="icon-close-popup" @click="login = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>

                <h2 class="popup-title">Iniciar sesión</h2>

                <form>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
                        <input type="text" class="input-payment-panel" name="titular_input" placeholder="Correo electrónico" require>
                    </div>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                        </svg>
                        <input type="password" class="input-payment-panel" name="titular_input" placeholder="Contraseña" required>
                    </div>
                </form>

                <v-btn class="mb-4 button-login" size="large" block>Acceder</v-btn>

                <p class="popup__not-login">¿No tienes cuenta? <span class="text-blue">Regístrate <v-icon icon="mdi-chevron-right"></v-icon></span></p>
            </v-card-text>
        </v-card>
    </v-dialog>
    
</template>

<style scoped>

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
    @media (max-width: 1200px) {
        .button-open-panel__text--visibility {
            display: none;
        }
    }

   .button-open-panel {
        letter-spacing: 0;
        font-size: 12px;
        font-weight: 700;
        width: 140px;
    }

    .button-open-panel svg {
        margin-right: 5px;
    }

    .icon-close-popup {
        display: flex;
        justify-content: right;
        cursor: pointer;
    }

    .popup-title {
        text-align: center;
        margin: 10px 0px 20px 0px;
    }

    .button-close-popup {
        font-size: 10px;
    }

    .v-card-text {
        font-family: 'Inter', sans-serif;
    }
    
    .button-login {
        background-color: #b20000;
        letter-spacing: 0;
        color: white;
        font-size: 12px;
        border: none;
    }

    .popup__not-login {
        text-align: center;
        font-size: 14px;
        margin-bottom: 20px;
    }

     input[type="date"].input-payment-panel, input[type="time"].input-payment-panel {
      color: #c3c3c3;
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
</style>