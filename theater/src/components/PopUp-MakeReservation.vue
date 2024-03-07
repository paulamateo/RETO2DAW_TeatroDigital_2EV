<script setup lang="ts">
    import { ref } from 'vue';
    const dialog = ref(false);    
</script>

<template>
    <v-btn class="btn-pay">PAGAR</v-btn>

    <v-dialog v-model="dialog" persistent activator="parent" width="350px">
        <v-card>
            <v-card-text>
                <div class="icon-close-popup" @click="dialog = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                <h3 class="popup-title">¡Gracias por tu compra!</h3>
                <p>En breve recibirás un correo electrónico con tus entradas.</p>
            </v-card-text>  
        </v-card>
    </v-dialog>
</template>

<style scoped>
.btn-pay {
    letter-spacing: 0;
    background-color: #b20000;
    color: white;
    padding: 15px;
    display: flex;
    align-items: center;
}
.btn-pay:hover {
    background-color: #b0802c;
}


    .icon-close-popup {
        display: flex;
        justify-content: right;
        cursor: pointer;
    }
.v-card-text p {
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin-bottom: 20px;
}


.tick {
  transform-origin: center;
  animation: grow 0.8s ease-in-out forwards;
}

@keyframes grow {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.circle {
  transform-origin: center;
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  animation: dash 1s linear;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1000;
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
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

    input[type="date"].input-payment-panel, input[type="time"].input-payment-panel {
      color: #c3c3c3;
    }

    .panel-box__item label {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
    }

    form {
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
        margin: 10px 0px 10px 0px;
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
            width: calc(100% - 20px);
        }
        .panel-box--1-col {
            grid-template-columns: 1fr;
        }
    }
</style>