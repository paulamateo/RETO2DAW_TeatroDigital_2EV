import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export interface Seat {
    seatId: number,
    seatIdReserved: number,
    isDisponible: boolean,
    sessionId: number
}

export interface SeatColors {
    background: string;
    base: string;
    legs: string;
    arms: string;
}

export const useSeatsStore = defineStore('seats', () => {
    const seats = reactive<Seat[]>([]);
    const selectedSeats = reactive([]);
    const seatColors = reactive({});
    const selectedSession = ref(null);

    const getAllSeats = async (sessionId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Session/${sessionId}/Seats`);
            const data = await response.json();
            seats.splice(0, seats.length, ...data);
        }catch (error) {
            console.log('Error displaying seats: ', error);
        }
    }

    return { seats, getAllSeats };
})
