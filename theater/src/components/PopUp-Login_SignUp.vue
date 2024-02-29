<script setup lang="ts">
    import { ref } from 'vue';
    const login = ref(false);
    const dialog2 = ref(false);
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
            <img width="100%" src="../assets/images/login.png"/>
            <v-card-text>
                <h2 class="popup-title">Iniciar sesión</h2>
                <form>
                    <input type="text" class="input-payment-panel" name="titular_input" placeholder="Correo electrónico" require>
                    <input type="password" class="input-payment-panel" name="titular_input" placeholder="Contraseña" required>
                </form>
                <v-btn class="mb-4 button-login" size="large" block>Acceder</v-btn>
                <p class="popup__not-login">¿No tienes cuenta? <span class="text-blue" @click="dialog2 = true">Regístrate <v-icon icon="mdi-chevron-right"></v-icon></span></p>

                

                <div class="container-button">
                    <v-btn text="CERRAR" @click="login = false" class="button-close-popup"></v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
    
    
    <v-dialog v-model="dialog2" persistent activator="parent" width="400px">
                    <v-card>
                        <h2 class="popup-title">Crear cuenta</h2>
                        <form>
                            <input type="text" class="input-payment-panel" name="titular_input" placeholder="Nombre" require>
                            <input type="text" class="input-payment-panel" name="titular_input" placeholder="Apellidos" require>
                            <input type="text" class="input-payment-panel" name="titular_input" placeholder="Email" require>
                            <input type="text" class="input-payment-panel" name="titular_input" placeholder="Contraseña" require>
                        </form>
                        <v-btn class="mb-4 button-login" size="large" block>Crear</v-btn>
                        <v-btn text="CERRAR" @click="dialog2 = false" class="button-close-popup"></v-btn>
                    </v-card>
                </v-dialog>
</template>

<style scoped>
    .popup-title {
        text-align: center;
        margin: 15px 0px 20px 0px;
    }
    .container-button {
        display: flex;
        align-items: center;
        justify-content: center;
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
        font-size: 14px;
        border: none;
    }

    .popup__not-login {
        text-align: center;
        font-size: 14px;
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
    }

    .input-payment-panel::placeholder {
        color: #c3c3c3;
    }
</style>