<script setup lang="ts">
    import { ref } from 'vue';
    const signUp = ref(false);
    const name = ref('');
    const lastname = ref('');
    const email = ref('');
    const password = ref('');
    const phone = ref('');
    const isValidEmail = ref(true);
    const isValidPhone = ref(true);
    const fieldsEmpty = ref(false);

    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        isValidEmail.value = emailRegex.test(email.value);
    }

    function validatePhone() {
        const phoneRegex = /^\d{9}$/;
        isValidPhone.value = phoneRegex.test(phone.value);
    }

    function submitForm() {
        if (name.value === '' || lastname.value === '' || email.value === '' || password.value === '' || phone.value === '') {
            fieldsEmpty.value = true;
        }else {
            fieldsEmpty.value = false;
        }
    }

    function checkFields() {
        if (name.value !== '' && lastname.value !== '' && email.value !== '' && password.value !== '' && phone.value !== '') {
            fieldsEmpty.value = false;
        }
    }
</script>

<template>
    <v-btn class="text-blue button__sign-up">
        <span>Regístrate</span> 
        <v-icon icon="mdi-chevron-right"></v-icon>
    </v-btn>

    <v-dialog v-model="signUp" persistent activator="parent" width="400px">
        <v-card>
            <v-card-text>
                <div class="icon-close-popup" @click="signUp = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>

                <h2 class="popup-title">Crear cuenta</h2>

                <form @submit.prevent="submitForm" novalidate>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg>
                        <input v-modal='name' @input="checkFields" type="text" class="input-payment-panel" name="name" placeholder="Nombre" required>
                    </div>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg>
                        <input v-modal='lastname' @input="checkFields" type="text" class="input-payment-panel" name="lastname" placeholder="Apellidos" required>
                    </div>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
                        <input v-modal='email' @input="validateEmail" type="text" class="input-payment-panel" name="email" placeholder="Correo electrónico" required>
                        <span class="error-message" v-if="!isValidEmail">Correo electrónico no válido</span>
                    </div>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/></svg>
                        <input v-modal='password' @input="checkFields" type="password" class="input-payment-panel" name="password" placeholder="Contraseña" required>
                    </div>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>
                        <input v-modal='phone' @input="validatePhone" type="text" class="input-payment-panel" name="phone" placeholder="Teléfono" required>
                        <span class="error-message" v-if="!isValidPhone">Teléfono no válido</span>
                    </div>

                    <span v-if="fieldsEmpty" class="error-message">Por favor, completa todos los campos</span>
                    <v-btn type="submit" class="mb-4 button-login" size="large" block>Crear cuenta</v-btn>
                </form>


                <div class="access-to-sign-up">
                    <p>¿Ya tienes cuenta?</p>
                    <v-btn class="text-blue button__sign-up" @click="signUp = false">
                        <span>Inicia sesión</span> 
                        <v-icon icon="mdi-chevron-right"></v-icon>
                    </v-btn>
                    <CreateUser/>
                </div>

              
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
    }

.access-to-sign-up {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.access-to-sign-up p {
    font-size: 14px;
}




.button__sign-up {
    letter-spacing: 0;
   
  padding: 5px;
  text-transform: lowercase;

  box-shadow: none;
}

.button__sign-up:hover {
    box-shadow: none;
    background-color: none;
}

.button__sign-up span::first-letter {
    text-transform: uppercase;
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
    @media (max-width: 1200px) {
        .button-open-panel__text--visibility {
            display: none;
        }
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