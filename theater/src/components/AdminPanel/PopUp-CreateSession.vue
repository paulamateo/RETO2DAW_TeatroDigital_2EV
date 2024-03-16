<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useSessionsStore } from '@/store/Session-Store';
    const dialog = ref(false);
    const store = useSessionsStore();

    let obraId = ref('');
    let hora = ref('');
    let asientos = ref('');
    let notas = ref('')
    const showError = ref(false);

    const addSession = async () => {
        if (obraId.value && hora.value && asientos.value && notas.value) {
            await store.addSessionToDatabase(parseInt(obraId.value), hora.value, parseInt(asientos.value), notas.value);
            dialog.value = false;
        }else {
            showError.value = true;
        }
    }

    setTimeout(() => {
        watch(dialog, (newValue) => {
            if (!newValue) {
                location.reload();
                }
            });
        }, 8000)

    watch([obraId, hora, asientos, notas], () => {
        if (obraId.value && hora.value && asientos.value && notas.value) {
            showError.value = false;
        }
    }, { immediate: true }); 
</script>

<template>
    <v-btn class="button-create-show">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
        <span>{{ $t("ListShows.buttonCreate") }}</span> 
    </v-btn>

    <v-dialog v-model="dialog" persistent activator="parent" width="400px">
        <v-card>
            <h2 class="popup-title">{{ $t("CreateSession.title") }}</h2>
            <form @submit.prevent="addSession">
                <div class="form-container">
                    <div class="panel-box panel-box--3-col">
                        <div class="panel-box__item">
                            <label for="id">{{ $t("CreateSession.field1") }}</label>
                            <input type="number" v-model="obraId" class="input-payment-panel" name="image">
                        </div>
                        <div class="panel-box__item">
                            <label for="hour">{{ $t("CreateSession.field2") }}</label>
                            <input type="time" v-model="hora" class="input-payment-panel" name="image">
                        </div>
                        <div class="panel-box__item">
                            <label for="seats">{{ $t("CreateSession.field3") }}</label>
                            <input type="number" v-model="asientos" class="input-payment-panel" name="image">
                        </div>
                    </div>
                    <div class="panel-box panel-box--1-col">
                        <textarea v-model="notas" class="input-payment-panel input-payment-panel--textarea" :placeholder="$t('CreateSession.field4')"></textarea>
                    </div>    
                </div>
                <v-divider></v-divider>
                <span class="error-message" v-if="showError">{{ $t("CreateShow.errorMessage") }}</span>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :text="$t('CreateSession.button2')" @click="dialog = false" class="button-form--actions"></v-btn>
                    <v-btn type="submit" color="primary" :text="$t('CreateSession.button1')"  variant="tonal" class="button-form--actions"></v-btn>
                </v-card-actions> 
            </form> 
        </v-card>
    </v-dialog>
</template>

<style scoped>
    .error-message {
        font-size: 10px;
        color: red;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        font-family: 'Inter', sans-serif;
    }

    .form-container {
        margin-left: 20px;
    }

    .panel-box__item label {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
    }

    .button-create-show {
        letter-spacing: 0;
        font-size: 12px;
        background-color: #000AFF;
        color: white;
        border-radius: 30px;
    }

    .button-create-show svg {
        margin-right: 7px;
    }

    .button-form--actions {
        letter-spacing: 0;
        font-family: 'Inter', sans-serif;
    }

    .button-form {
        font-family: 'Inter', sans-serif;
        letter-spacing: 0;
        font-size: 12px;
        border-radius: 30px;
        padding: 10px;
    }

    .button-form--cancel {
        background-color: D03A3A;
    }

    .button-close-form {
        letter-spacing: 0;
        font-family: 'Inter', sans-serif;
        color: #D03A3A;
    }

    .panel-box {
        display: grid;
        grid-template-columns: 1fr;
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

    .v-card-actions {
        margin-right: 15px;
    }

    select {
        font-family: "Inter", sans-serif;
        font-size: 12px;
        width: calc(100% - 20px);
        border-radius: 5px;
        padding: 10px;
        outline: none;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><polygon points="0,0 12,0 6,6" fill="black"/></svg>') no-repeat right 12px center;
        background-size: 12px auto;
        appearance: none;
        background-color: #EAECF0;
        text-indent: 10px;
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

    select::placeholder {
        color: #c3c3c3;
    }
    .input-payment-panel--textarea {
        border-radius: 5px;
        height: 50px;
    }

    @media (min-width: 760px) {
        .panel-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .panel-box--3-col {
            grid-template-columns: 1fr 1fr 1fr;
        }

        select {
            width: 150px;
        }
        .panel-box--1-col {
            grid-template-columns: 1fr;
        }
    }
</style>