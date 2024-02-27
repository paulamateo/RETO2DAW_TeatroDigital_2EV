<script setup lang="ts">
    import { ref } from 'vue';

    const dialog = ref(false);
</script>

<template>
    <v-btn class="button-create-user">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
        <span>CREAR</span> 
    </v-btn>

    <v-dialog v-model="dialog" persistent activator="parent" width="700px">   
        <v-card>
            <h2 class="popup-title">Crear usuario</h2>
            <form>
                <div class="panel-box">
                    <input type="text" class="input-payment-panel" name="titular_input" placeholder="Nombre" required>
                    <input type="text" class="input-payment-panel" name="titular_input" placeholder="Apellidos" required>
                </div>
                <div class="panel-box">
                    <input type="text" class="input-payment-panel" name="titular_input" placeholder="Email" required>
                    <input type="text" class="input-payment-panel" name="titular_input" placeholder="Contraseña" required>
                </div>
                <div class="panel-box">
                    <input type="text" class="input-payment-panel" name="titular_input" placeholder="Teléfono" required>
                    <input type="text" class="input-payment-panel" name="titular_input" placeholder="Rol" required>
                </div>       
            </form>

            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="CERRAR" @click="dialog = false" class="button-form--actions"></v-btn>
                <v-btn color="primary" text="CREAR" variant="tonal" @click="dialog = false" class="button-form--actions"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped>
    .button-create-user {
        letter-spacing: 0;
        font-size: 12px;
        background-color: #000AFF;
        color: white;
        border-radius: 30px;
    }

    .button-create-user svg {
        margin-right: 7px;
    }

    .panel-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .popup-title {
        padding: 0;
        font-weight: bold;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0;
        text-align: center;
        margin: 30px 0px 30px 0px;
    }

    .input-payment-panel {
        width: calc(100% - 20px);
        border: none;
        background-color: #EAECF0;
        padding: 10px;
        margin: 0 0 15px 0;
        border-radius: 5px;
        font-family: "Inter", sans-serif;
        text-indent: 10px;
        outline: none;
        font-size: 12px;
    }

    .input-payment-panel::placeholder {
        color: #c3c3c3;
    }
</style>