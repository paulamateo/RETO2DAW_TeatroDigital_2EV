<script setup lang="ts">
    import { ref, watch } from 'vue';
    const dialog = ref(false);
    import { useShowsStore } from '@/store/Show-Store';
    const store = useShowsStore();
    const showError = ref(false);

    let titulo = ref('');
    let autor = ref('');
    let director = ref('');
    let edad = ref('');
    let precio = ref('');
    let genero = ref('');
    let posterFile = ref('');
    let sceneFile = ref('');
    let bannerFile = ref('');
    let resena = ref('');
    let duracion = ref('');
    let fecha = ref('');

    const props = defineProps({
        showId: {
            type: String,
            default: '0'
        }
    });

    const updateShow = async () => {
        if (titulo.value && autor.value && director.value && edad.value && precio.value && genero.value && posterFile.value && sceneFile.value && bannerFile.value && resena.value && duracion.value && fecha.value) {
            await store.updateShowToDatabase(parseInt(props.showId), titulo.value, autor.value, director.value, genero.value, parseInt(edad.value), new Date(fecha.value), duracion.value, parseFloat(precio.value), posterFile.value, bannerFile.value, sceneFile.value, resena.value);
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

    watch([titulo, autor, director, edad, precio, genero, posterFile, sceneFile, bannerFile, resena, duracion, fecha], () => {
        if (titulo.value && autor.value && director.value && edad.value && precio.value && genero.value && posterFile.value && sceneFile.value && bannerFile.value && resena.value && duracion.value && fecha.value) {
            showError.value = false;
        }
    }, { immediate: true }); 
</script>

<template>
    <v-btn class="buttons-actions-panel__item buttons-actions-panel__item--update">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
        </svg>
    </v-btn>

    <v-dialog v-model="dialog" persistent activator="parent" width="700px">
        <v-card>
            <h2 class="popup-title">{{ $t("UpdateShow.title") }}</h2>
            <form @submit.prevent="updateShow">
                <div class="form-container">
                    <div class="panel-box">
                        <input type="text" v-model="titulo" class="input-payment-panel" name="titular_input" :placeholder="$t('CreateShow.placeholder.title')">
                        <input type="text" v-model="autor" class="input-payment-panel" name="titular_input" :placeholder="$t('CreateShow.placeholder.author')">
                        <input type="text" v-model="director" class="input-payment-panel" name="titular_input" placeholder="Director">
                        <div class="panel-box">
                            <input type="number" v-model="edad" class="input-payment-panel" name="titular_input" :placeholder="$t('CreateShow.placeholder.age')">
                            <input type="text" v-model="precio" class="input-payment-panel" name="titular_input" :placeholder="$t('CreateShow.placeholder.price')">
                        </div> 
                    </div>
                    <div class="panel-box panel-box--3-col">
                        <div class="panel-box__item">
                            <input type="date" v-model="fecha" class="input-payment-panel" id="fecha" name="fecha">
                        </div>
                        <div class="panel-box__item">
                            <input type="text" v-model="duracion" class="input-payment-panel" name="titular_input" :placeholder="$t('CreateShow.placeholder.length')">
                        </div>
                        <div class="panel-box__item">
                            <input type="text" v-model="genero" class="input-payment-panel" name="titular_input" :placeholder="$t('CreateShow.placeholder.genre')">
                        </div>
                    </div>
                    <div class="panel-box panel-box--3-col">
                        <div class="panel-box__item">
                            <label for="poster">{{ $t("CreateShow.poster") }}</label>
                            <input type="text" v-model="posterFile" class="input-payment-panel" name="image" accept="image/jpg, image/png, image/jpeg">
                        </div>
                        <div class="panel-box__item">
                            <label for="scene">{{ $t("CreateShow.scene") }}</label>
                            <input type="text" v-model="sceneFile" class="input-payment-panel" name="image" accept="image/jpg, image/png, image/jpeg">
                        </div>
                        <div class="panel-box__item">
                            <label for="banner">{{ $t("CreateShow.banner") }}</label>
                            <input type="text" v-model="bannerFile" class="input-payment-panel" name="image" accept="image/jpg, image/png, image/jpeg">
                        </div>
                    </div>
                    <div class="panel-box panel-box--1-col">
                        <textarea v-model="resena" class="input-payment-panel input-payment-panel--textarea" :placeholder="$t('CreateShow.placeholder.overview')"></textarea>
                    </div>    
                </div>
                <v-divider></v-divider>
                <span class="error-message" v-if="showError">{{ $t("CreateUser.errorMessage") }}</span>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :text="$t('UpdateShow.buttonClose')" @click="dialog = false" class="button-form--actions"></v-btn>
                    <v-btn type="submit" color="primary" :text="$t('UpdateShow.buttonUpdate')"  variant="tonal" class="button-form--actions"></v-btn>
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

    .v-btn--size-default {
        min-width: 20px;
    }

    .buttons-actions-panel__item--update {
        background-color: #0DBF3F;
        margin-right: 10px;
        color: white;
        width: 40px;
    }



    .panel-box__item label {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
    }

    .form-container {
        margin-left: 20px;
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


    .input-payment-panel--textarea {
        border-radius: 5px;
        height: 100px;
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