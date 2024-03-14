<script setup lang="ts">
    import { onMounted, ref, watch, computed } from 'vue'
    import { useSessionsStore } from '../../store/Session-Store'
    import { useShowByIdStore, type Show } from '../../store/Show-Store'
    import { useSeatsStore } from '../../store/Seat-Store'
    import { usePurchasesStore } from '../../store/Purchase-Store'
    import { useRoute } from 'vue-router';
    import type { Ref } from 'vue/dist/vue.js'
    const store = useSessionsStore();
    const storeShow = useShowByIdStore()
    const storeSeat = useSeatsStore();
    const storePurchase = usePurchasesStore();
    const route = useRoute();
    const dialog = ref(false);
    let totalPrice = 0;
    const showId = route.params.showId as string;
    const email = ref('');
    const phone = ref('');
    const date = ref('');
    const CVV = ref('');
    const isValidEmail = ref(true);
    const creditCard = ref('');
    const name = ref('');
    const titular = ref('');
    const show = ref<Show>();
    const selectedSession = ref();
    let selectedSessionString = ''; 
    let CurrentDay = new Date();
    const seatColors = ref<{ [key: number]: SeatColors }>({});
    let selectedSeats: { seatId: number, session: string }[] = [];

    interface SeatColors {
        background: string;
        base: string;
        legs: string;
        arms: string;
    }

    onMounted(async () => {
        await storeShow.getShowById(showId);
        show.value = storeShow.show;
        await store.getAllSessionsbyShow(showId);
        if (store.sessions.length > 0) {
            const firstSessionId = store.sessions[0].sessionId;
            selectSession(firstSessionId);
        }
    });

    storeShow.getShowById(showId);
    const showData = storeShow.show;

    const title = computed(() => show.value?.title || 'Undefined');


    const selectSession = (sessionId: number) => {
        selectedSession.value = sessionId;
        selectedSessionString = selectedSession.value.toString(); 
        storeSeat.getAllSeats(selectedSessionString);
    }

    function animationSVG(event: MouseEvent, seatId: number) {
        const seatSVG = event.currentTarget as HTMLElement;
        const index = selectedSeats.findIndex(info => info.seatId === seatId);
        if (index !== -1) {
            return;
        }
        if (isSeatOccupied(seatId)) {
            return;
        }
        seatSVG.classList.add('jump');
        setTimeout(() => {
            seatSVG.classList.remove('jump');
        }, 500);
        seatColors.value[seatId] = { background: '#0000ff', base: '#0000cc', legs: '#464646', arms: '#0000cc' };
        selectedSeats.push({
            seatId,
            session: store.sessions.find(session => session.sessionId === selectedSession.value)?.hour ?? ''
        });
        totalPrice += showData.price;
        totalPrice = parseFloat(totalPrice.toFixed(2));
    }

    const addReservedSeatsToDatabase = async () => { 
        try {
            for (const seat of selectedSeats) {
                const { seatId, session } = seat;
                const seatData = {
                    seatId: 0,
                    seatIdReserved: seat.seatId,
                    sessionId: selectedSession.value,
                    isDisponible: false  
                };
                const response = await fetch(`http://localhost:8001/Session/${selectedSession.value}/Seats`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(seatData)
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                } else {
                    console.log(`Seat ${seatId} successfully reserved for session ${session}`);
                    seatColors.value[seatId] = { background: '#e92e19', base: '#ba2414', legs: '#464646', arms: '#ba2414' }
                    // selectedSeats = [];
                }
            }
        }catch (error) {
            console.log('Error reserving seats: ', error);
        }
    }

    // const addPurchaseToDatabase = async () => {
    //     try {
    //         const reservedSeatsFormatted = selectedSeats.map(seat => {
    //             return { seatId: seat.seatId, session: seat.session };
    //         });
    //         const purchase = {
    //             purchaseId: 0,
    //             datePurchase: date.value,
    //             buyerName: name.value,
    //             buyerPhone: phone.value,
    //             buyerEmail: email.value,
    //             totalPrice: totalPrice.valueOf,
    //             title: show.value?.title,
    //             sessionId: selectedSessionString,
    //             reservedSeats: reservedSeatsFormatted
    //         }   
    //         const response = await fetch("http://localhost:8001/Purchase", {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(purchase)
    //         });
    //         if (!response.ok) {
    //             throw new Error(`Error: ${response.statusText}`);
    //         } else {
    //             console.log("TODO BIEN");
    //         }
    //     }catch (error) {
    //         console.log('Error to create purchases: ', error);
    //     }
    // }

    const reservedSeatsCount = computed(() => {
        return storeSeat.seats.filter(seat => !seat.isDisponible).length;
    });

    function deleteTicketSeat(seatId: number) {
        selectedSeats = selectedSeats.filter(info => info.seatId !== seatId);
        seatColors.value[seatId] = { background: '#37b02c', base: '#2c8c23', legs: '#464646', arms: '#2c8c23' };
        totalPrice -= showData.price;
        totalPrice = parseFloat(totalPrice.toFixed(2));
    }

    function obtenerSeatIds(): number[] {
        return selectedSeats.map(seat => seat.seatId);
    }

    const openDialog = async () => {
        validateEmail();
        if (isValidEmail.value && email.value && phone.value && date.value && CVV.value && creditCard.value && name.value && titular.value) {
            try {
                await addReservedSeatsToDatabase();
                storePurchase.addPurchaseToDatabase(CurrentDay, name.value, phone.value, email.value, totalPrice, title.value, parseInt(selectedSessionString));
                const seatIds = obtenerSeatIds();
                console.log(seatIds);
                dialog.value = true;
                
                // setTimeout(() => {
                //     watch(dialog, (newValue) => {
                //         if (!newValue) {
                //             location.reload();
                //         }
                //     });
                // }, 2000)


            }catch (error) {
                console.error('Error al reservar los asientos: ', error);
            }
        }else {
            alert('Revisa todos los campos.');
        }
    };

    function formatHour(hour: string): string {
        const date = new Date(`2000-01-01T${hour}`);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function calculateRow(seatId: number): number {
        return Math.ceil(seatId / 10);
    }

    function calculateColumn(seatId: number): number {
        return seatId % 10 === 0 ? 10 : seatId % 10;
    }

    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        isValidEmail.value = emailRegex.test(email.value);
    }

    function validatePhone() {
        let phoneValue = phone.value;
        phoneValue = phoneValue.replace(/\D/g, '');
        phoneValue = phoneValue.substring(0, 9); 
        phone.value = phoneValue;
    }

    function validateDateCreditCard() {
        let dateValue = date.value;
        dateValue = dateValue.replace(/\D/g, '');
        if (dateValue.length > 2) {
            dateValue = dateValue.substring(0, 2) + '/' + dateValue.substring(2);
        }

        if (dateValue.length > 5) {
            dateValue = dateValue.substring(0, 5);
        }

        date.value = dateValue;
    }

    function validateCVV() {
        let cvvValue =  CVV.value;
        cvvValue = cvvValue.replace(/[^\d*]/g, '');
        cvvValue = cvvValue.substring(0, 3).replace(/\d/g, '*');
        CVV.value = cvvValue;
    }

    function validateCreditCard() {
        let creditCardValue =  creditCard.value;
        creditCardValue = creditCardValue.replace(/\D/g, '');
        creditCardValue = creditCardValue.replace(/(\d{4})/g, match => match + '  ');
        creditCardValue = creditCardValue.substring(0, 22);
        creditCard.value = creditCardValue;
    }

    const closeDialog = () => {
        dialog.value = false;
        email.value = '';
        phone.value = '';
        date.value = '';
        CVV.value = '';
        creditCard.value = '';
        name.value = '';
        titular.value = '';
    };

    const isSeatOccupied = (seatId: number) => {
        const occupiedSeat = storeSeat.seats.find(seat => seat.seatIdReserved === seatId)
        return occupiedSeat && !occupiedSeat.isDisponible;
    }
</script>

<template>
    <div class="reserve-seats">
        <h2>RESERVAR ENTRADAS</h2>
        <div class="reserve-seats__content">
            <div class="seats-area">
                <div class="seats-data">
                    <p>Elige tus asientos y sesión:</p>
                    <div class="key">
                        <div class="option-key">
                            <div class="square square--colour-selected"></div>
                            <p>Seleccionado</p>
                        </div>
                        <div class="option-key">
                            <div class="square square--colour-disponible"></div>
                            <p>Disponible</p>
                        </div>
                        <div class="option-key">
                            <div class="square square--colour-no-disponible"></div>
                            <p>No disponible</p>
                        </div>
                    </div>
                </div>
                <div class="buttons-sessions">
                <div v-for="session in store.sessions" :key="session.sessionId">    
                    <v-btn :class="{'btn-session-active': selectedSession === session.sessionId, 'btn-session': true}" @click="selectSession(session.sessionId)">
                        <span>SESIÓN <strong>{{ formatHour(session.hour) }}h</strong></span>
                    </v-btn>                    
                </div>
            </div>
            <div v-for="session in store.sessions" :key="session.sessionId" v-show="selectedSession === session.sessionId">
                <div class="chips-seats">
                    <v-chip :ripple="false"  class="hola" color="black">Total asientos: <strong>  {{ session.totalSeats }}</strong></v-chip>
                    <v-chip :ripple="false"  class="ma-2 ma-2__size" color="green">Disponibles: <strong>  {{ session.totalSeats - reservedSeatsCount }}</strong></v-chip>
                    <v-chip :ripple="false"  class="ma-2" color="red">Reservados: <strong>  {{ reservedSeatsCount }}</strong></v-chip>
                </div>
                <div class="panel-seats" id="panel-seats">
                    <div class="panel-seats__item" id="area-seats">
                        <div class="seat-grid">
                            <div v-for="seatIdReserved in session.totalSeats" :key="seatIdReserved">
                                <div v-if="isSeatOccupied(seatIdReserved)">
                                    <svg class="svg-seat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="70" height="70">
                                        <rect x="10" y="10" width="50" height="35" rx="5" ry="5" fill="#e92e19"  />
                                        <rect x="5" y="40" width="60" height="20" rx="5" ry="5" fill="#ba2414" />
                                        <rect x="18" y="60" width="5" height="10" fill="#464646" />
                                        <rect x="48" y="60" width="5" height="10" fill="#464646" />
                                        <rect x="5" y="25" width="15" height="35" rx="5" ry="5" fill="#ba2414" />
                                        <rect x="50" y="25" width="15" height="35" rx="5" ry="5" fill="#ba2414" />
                                        <text x="35" y="30" fill="#FCE992" font-size="8" text-anchor="middle">{{ seatIdReserved }}-F{{ Math.ceil(seatIdReserved / 10) }}</text>
                                    </svg> 
                                </div>
                                <div v-else>
                                    <svg class="svg-seat" @click="animationSVG($event, seatIdReserved)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="70" height="70">
                                        <rect class="seat-background-selected" x="10" y="10" width="50" height="35" rx="5" ry="5" :fill="seatColors[seatIdReserved]?.background || '#37b02c'" />
                                        <rect class="seat-base-selected" x="5" y="40" width="60" height="20" rx="5" ry="5" :fill="seatColors[seatIdReserved]?.base || '#2c8c23'" />
                                        <rect class="seat-leg-selected" x="18" y="60" width="5" height="10" :fill="seatColors[seatIdReserved]?.legs || '#464646'" />
                                        <rect class="seat-leg-selected" x="48" y="60" width="5" height="10" :fill="seatColors[seatIdReserved]?.legs || '#464646'" />
                                        <rect class="seat-arm-selected" x="5" y="25" width="15" height="35" rx="5" ry="5" :fill="seatColors[seatIdReserved]?.arms || '#2c8c23'" />
                                        <rect class="seat-arm-selected" x="50" y="25" width="15" height="35" rx="5" ry="5" :fill="seatColors[seatIdReserved]?.arms || '#2c8c23'" />
                                        <text x="35" y="30" fill="#FCE992" font-size="8" text-anchor="middle">{{ seatIdReserved }}-F{{ Math.ceil(seatIdReserved / 10) }}</text>
                                    </svg> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="screen">
                PANTALLA
            </div>
        </div>            
        <div class="payment-area">
            <div class="panel-payment">
                <h3>TICKETS</h3>
                <div class="selected-tickets" id="selected-tickets">
                    <div v-if="selectedSeats.length > 0" class="selected-seat-info">
                        <div v-for="info in selectedSeats" :key="info.seatId" class="individual-ticket">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" @click="deleteTicketSeat(info.seatId)" class="trash-icon" id="trash-icon" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>
                            <p><strong>Entrada para "{{ showData.title }}"</strong></p>
                            <p>BUTACA {{ info.seatId }} || Sesión {{ formatHour(info.session) }}h</p>
                            <div class="individual-ticket__data">
                                <p>Fila {{ calculateRow(info.seatId) }} | Columna {{ calculateColumn(info.seatId) }}</p>
                                <p id="show__price"><strong>{{ showData.price }}€</strong></p>
                            </div>
                        </div>
                    </div>
                    <div v-else class="advertisement-tickets" id="ad">
                       <p>¡No has seleccionado ninguna butaca!</p>
                    </div>
                </div>
                <hr>
                <div class="price" id="total-price-tickets">
                    <p>Total</p>
                    <p><strong><span id="details-show__total-price">{{ totalPrice }}</span>€</strong></p>
                </div>
            </div>

            <div class="panel-payment">
                <h3>DATOS PERSONALES</h3>
                <div class="panel-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/></svg>
                    <input v-model="name" type="text" class="input-payment-panel" name="name-lastname_input" placeholder="Nombre y apellidos" required>
                </div>
                <div>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
                        <input @input="validateEmail()" v-model="email" type="text" class="input-payment-panel" id="input-email" name="email" placeholder="Correo electrónico">
                        <span class="error-message" v-if="!isValidEmail">Correo electrónico no válido</span>
                    </div>
                </div>
                <div>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                        <input @input="validatePhone()" v-model="phone" type="text" class="input-payment-panel" id="input-phone"  name="phone" placeholder="Teléfono">
                    </div>
                    </div>
                    <br>
                    <h3>PAGO</h3>
                    <div class="panel-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/></svg>
                        <input v-model="titular" type="text" class="input-payment-panel" name="titular_input" placeholder="Titular" required>
                    </div>
                    <div>
                        <div class="panel-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/></svg>
                            <input @input="validateCreditCard()" v-model="creditCard" type="text" class="input-payment-panel" id="input-card" name="creditCard" placeholder="XXXX XXXX XXXX XXXX">
                        </div>
                    </div>                   
                    <div class="panel-box-double">
                        <div class="panel-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>
                            <input @input="validateDateCreditCard()" v-model="date" type="text" class="input-payment-panel" id="input-calendar" name="date" placeholder="--/--">
                        </div>
                        <div class="panel-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-panel" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/></svg>
                            <input @input="validateCVV()" v-model="CVV" type="text" class="input-payment-panel" id="input-CVV" name="CVV" placeholder="***">
                        </div> 
                    </div> 
                    <div class="container-button-pay">
                        <v-btn class="btn-pay" @click="openDialog()">PAGAR</v-btn>
                    </div>

                    <v-dialog v-model="dialog" persistent width="350px">
                        <v-card>
                            <v-card-text>
                                <div class="icon-close-popup" @click="closeDialog">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                    </svg>
                                </div>
                                <div class="tick-icon">
                                    <img src="../../assets/images/elements/tick.png"/>
                                </div>
                                <h3 class="popup-title">¡Gracias por tu compra!</h3>
                                <p>En breve recibirás un correo electrónico con tus entradas.</p>
                            </v-card-text>  
                        </v-card>
                    </v-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .btn-session-active {
        background-color: rgb(216, 216, 216);
    }

    .tick-icon {
        display: flex;
        justify-content: center;
    }

    .tick-icon img {
        width: 100px;
    }

    .row-number {
        color: white;
        font-size: 9px;
        position: absolute;
        margin-top: 20px;
    }

    .row-number p {
        margin-top: 20px;
        background-color: #b0802c;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin-left: -30px;
    }

    .screen {
        background-color: #181818;
        padding: 30px;
        border-radius: 10px;
        color: #FCE992;
        text-align: center;
        font-size: 12px;
        margin-bottom: 20px;
    }

    .container-button-pay {
        display: flex;
        justify-content: right;
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

    .advertisement-tickets {
        border: 2px dashed white;
        padding: 20px;
        margin-bottom: 20px;
        font-size: 10px;
        text-align: center;
    }


    .error-message {
        font-size: 10px;
        color: red;
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
        margin-top: -5px;
        font-family: 'Inter', sans-serif;
    }

    .panel-seats {
        background-color: #181818;
        padding: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        /* flex-direction: column; */
        align-items: center;
        margin: 0 0 30px 0;
        justify-content: center;
    }

    .seat-grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        gap: 15px;
    }

    .svg-seat {
        margin: 10px;
    }

    @media (max-width: 1750px) {
        .svg-seat {
            width: 100%;
            margin: 0;
        }
    }

    .btn-session {
        letter-spacing: 0;
        font-size: 10px;
    
        margin-bottom: 10px;
    }

    .buttons-sessions {
        display: flex;
        justify-content: right;
        gap: 10px;
    }

    @keyframes jump {
        0% { transform: translateY(0); }
        50% { transform: translateY(-30px); }
        100% { transform: translateY(0); }
    }
            
    .svg-seat {
        cursor: pointer;
    }
        
    .jump {
        animation: jump 0.5s ease;
    }

    .error-message {
        color: red;
        font-size: 10px;
        text-align: center;
    }

    .popup-overview {
        position: fixed;
        border: 3px solid black;
        color: black;
        background-color: white;
        z-index: 100;
        top: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        font-size: 10px;
        text-align: justify;
        display: none;
    }

    .popup-overview.active {
        display: block;
    }

    .popup-overview__content {
        margin: 30px;
    }

    .popup-overview__content h3 {
        text-align: center;
    }

    .popup-overview__content p {
        font-size: 13px;
    }

    .popup-overview__button {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .tickets {
        border: 2px dashed white;
        padding: 10px;
        margin-bottom: 20px;
    }
    .tickets p {
        font-size: 10px;
        color: white;
        text-align: center;
    }

    .individual-ticket {
        font-size: 10px;
        color: black;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 15px;
        margin: 0 0 10px 0;
        position: relative;
    }

    .individual-ticket p {
        margin: 0;
    }
    .individual-ticket__data {
        display: flex;
        justify-content: space-between;
    }

    .selected-tickets {
        margin-bottom: 20px;
    }

    .trash-icon {
        color: red;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px 10px 0 0;
    }

    .panel-payment {
        background-color: black;
        color: white;
        border-radius: 20px;
        padding: 40px;
        margin: 0 0 30px 0;
    }
    .panel-payment h3 {
        margin-top: 0;
        margin-bottom: 20px;
        text-align: center;
    }

    .panel-box {
        position: relative;
        color: #0b0b0b;
        width: 100%;
    }
    .panel-box-double {
        display: flex;
        gap: 20px;
    }

    .icon-panel {
        position: absolute;
        color: #c3c3c3;
        left: 15px;
        top: 8px;
    }

    .input-payment-panel {
        width: 100%;
        border: none;
        background-color: white;
        padding: 10px;
        margin: 0 0 15px 0;
        border-radius: 20px;
        font-family: "Inter", sans-serif;
        text-indent: 40px;
        outline: none;
        font-size: 12px;
    }
    .input-payment-panel::placeholder {
        color: #c3c3c3;
    }

    .button-pay {
        display: flex;
        align-items: center;
        justify-content: right;
    }

    .price {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        margin-top: 15px;
    }

    .banner--show {
        background-size: cover;
        background-repeat: no-repeat;
        flex-direction: column;
    }
    .banner--show h1 {
        padding-top: 90px;
        margin: 0;
    }
    .banner--show h3 {
        margin: 10px;
        font-weight: 400;
    }

    .details-show {
        background-color: black;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .details-show__date {
        display: flex;
        justify-content: center;
    }
    .details-show__item {
        font-size: 11px;
        text-align: center;
        color: white;
        padding: 20px;
    }
    .details-show__item p {
        margin: 0;
    }
    .details-show__item svg {
        margin-bottom: 10px;
    }
    .details-show__item--link {
        cursor: pointer;
    }

    .separation {
        padding-left: 5px;
        padding-right: 5px;
    }

    .reserve-seats {
        margin: 40px;
    }
    .reserve-seats h2 {
        text-align: center;
    }

    .seats-data {
        margin: 10px 0 20px 0;
        font-size: 9px;
    }

    .seat {
        color: white;
        width: 2.5vw;
        height: 2.5vw;
        background-color: #37b02c;
        border-radius: 3px;
        border: 2px solid #37b02c;
        cursor: pointer;
        margin: 0.7vw;
        font-size: 5px;
    }
    .seat-row {
        display: flex;
    }
    .seat-deleted {
        width: 2.5vw;
        height: 2.5vw;
        background-color: #181818;
        border-radius: 5px;
        border: 2px solid #181818;
        margin: 0.7vw;
    }
    .seat.selected {
        background-color: blue;
        border: 2px solid blue;
    }
    .seat.reserved {
        background-color: #e92e19;
        border: 2px solid #e92e19;
    }

    .key {
        display: flex;
    }

    .square {
        padding: 5px;
        border-radius: 2px;
    }
    .square--colour-selected {
        background-color: blue;
    }
    .square--colour-disponible {
        background-color: #37b02c;
    }
    .square--colour-no-disponible {
        background-color: #e92e19;
    }

    .option-key {
        display: flex;
        align-items: center;
        margin: 0 30px 0 0;
    }
    .option-key p {
        margin: 0 0 0 10px;
    }
    .option-key:last-child {
        margin: 0;
    }

    .tick-element {
        max-width: 70px;
        margin: 0 auto;
    }

    .circ {
        opacity: 0;
        stroke-dasharray: 130;
        stroke-dashoffset: 130;
        -webkit-transition: all 1s;
        -moz-transition: all 1s;
        -ms-transition: all 1s;
        -o-transition: all 1s;
        transition: all 1s;
    }

    .tick {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        -webkit-transition: stroke-dashoffset 1s 0.5s ease-out;
        -moz-transition: stroke-dashoffset 1s 0.5s ease-out;
        -ms-transition: stroke-dashoffset 1s 0.5s ease-out;
        -o-transition: stroke-dashoffset 1s 0.5s ease-out;
        transition: stroke-dashoffset 1s 0.5s ease-out;
    }

    .drawn + svg .path {
        opacity: 1;
        stroke-dashoffset: 0;
    }

    .overlay {
        background-color: rgba(1, 1, 1, 0);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        justify-content: center;
        display: flex;
        visibility: hidden;
        z-index: 3;
        backdrop-filter: blur(7px);
        opacity: 0;
        transition: background-color 0.9s ease;
    }
    .overlay.active {
        visibility: visible;
        opacity: 1;
        background-color: rgba(1, 1, 1, 0.5);
    }

    .popup-purchase {
        position: fixed;
        color: black;
        background-color: white;
        z-index: 100;
        top: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: justify;
    }

    .x-icon {
        position: absolute;
        right: 0;
        top: 0;
        margin: 10px 10px 0 0;
        cursor: pointer;
    }

    .container-icon {
        display: flex;
        justify-content: center;
        margin: 0 0 20px 0;
    }

    @media (min-width: 780px) {
        .popup-overview {
            font-size: 14px;
        }
        .details-show {
            grid-template-columns: repeat(7, 1fr);
            padding: 10px;
        }
        .reserve-seats {
            margin: 50px;
        }
        .reserve-seats h2 {
            text-align: left;
        }
        .payment-area {
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
        }
        .square {
            border-radius: 5px;
            padding: 10px;
        }
        .seats-data {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .seat {
            width: 30px;
            height: 30px;
            margin: 5px;
            font-size: 10px;
            border-radius: 5px;
        }
        .seat-deleted {
            width: 30px;
            height: 30px;
            margin: 5px;
        }
    }
    @media (min-width: 1330px) {
        .reserve-seats {
            margin: 50px 140px;
            overflow: hidden;
        }
        .payment-area {
            display: block;
        }
        .reserve-seats__content {
            display: grid;
            grid-template-columns: 70% 25%;
            gap: 50px;
            box-sizing: border-box;
        }
        .seat {
            font-size: 0.7vw;
            width: 2.5vw;
            height: 2.5vw;
            background-color: #37b02c;
            border-radius: 10px;
            border: 2px solid #37b02c;
            cursor: pointer;
            margin: 0.4vw;
        }
        .seat-deleted {
            width: 2.5vw;
            height: 2.5vw;
        }
    }
</style>../../store/Session-Store../../store/Show-Store../../store/Seat-Store