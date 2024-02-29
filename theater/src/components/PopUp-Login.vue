<script setup lang="ts">
    import { ref } from 'vue';
    const login = ref(false);

    const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')

const required = (value: string) => !!value || 'Required.'
const min = (v: string) => v.length >= 8 || 'Min 8 characters'
const emailMatch = () => `The email and password you entered don't match`

    import PopUp_SignUp from '../components/PopUp-SignUp.vue'
</script>

<template>
    <v-btn class="button-open-panel">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
        <span class="button-open-panel__text button-open-panel__text--visibility">INICIAR SESIÓN</span> 
    </v-btn>

    <v-dialog v-model="login" persistent activator="parent" width="400px" height="500px">
        <v-card>
            <v-sheet>
                <v-form validate-on="submit lazy">
                    <v-text-field label="User name"></v-text-field>
                <v-text-field v-model="password" variant="solo" :prepend-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" hint="At least 8 characters" label="Normal with hint text" name="input-10-1" counter></v-text-field>
    </v-form>
  </v-sheet>
        </v-card>
    </v-dialog>


</template>

<style scoped>
label {
    font-size: 10px;
    height: 10px;
}
.v-label .v-field-label {
    font-size: 10px;
}
    .v-text-field::placeholder {
        font-size: 12px;
    }
    .v-text-field label {
        font-size: 10px;
height: 10px;
    }
</style>

<!-- <style scoped>
    .popup-title {
        text-align: center;
    }
    form label {
        font-size: 13px;
    }
    .form-text {
        font-size: 13px;
        text-align: center;
    }

    .form-text span {
        color: blue;
    }
    .v-card {
        font-family: 'Inter', sans-serif;
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
    }

    .input-payment-panel::placeholder {
        color: #c3c3c3;
    }

    .input-payment-panel--textarea {
        border-radius: 5px;
        height: 100px;
    } -->


            <!-- <v-card>
            <v-card-text>
                <h2 class="popup-title">Iniciar sesión</h2>
                <form>
                    <label for="poster">Correo electrónico:</label>
                    <input type="text" class="input-payment-panel" name="titular_input" required>
                    <label for="poster">Contraseña:</label>
                    <input type="password" class="input-payment-panel" name="titular_input" required>
                </form>
                <p class="form-text">¿No tienes cuenta? 
                    <span><u>Regístrate</u></span>
                </p>
            </v-card-text>
            <v-card-actions>
                    <v-btn text="CANCELAR" @click="login = false"></v-btn>
                    <v-btn class="button-access-panel">ACCEDER</v-btn>
                </v-card-actions>
        </v-card> -->