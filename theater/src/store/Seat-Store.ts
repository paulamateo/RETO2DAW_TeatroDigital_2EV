import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Seat {
    seatId: number,
    isDisponible: boolean,
    showId: number,
    sessionId: number
}

//GET ALL SESSIONS FOR A SHOW
export const useSeatsStore = defineStore('seats', () => {
    const seats = reactive<Seat[]>([])

    const getAllSeats = async (showId: string, sessionId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Show/${showId}/Session/${sessionId}`);
            const data = await response.json();
            seats.splice(0, seats.length, ...data);
        }catch (error) {
            console.log('Error displaying seats: ', error);
        }
    }
    
    return { seats, getAllSeats };
})
