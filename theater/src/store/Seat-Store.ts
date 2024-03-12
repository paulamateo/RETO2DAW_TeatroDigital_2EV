import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Seat {
    seatId: number,
    seatIdReserved: number,
    isDisponible: boolean,
    sessionId: number
}

export const useSeatsStore = defineStore('seats', () => {
    const seats = reactive<Seat[]>([])

    const getAllSeats = async (sessionId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Session/${sessionId}/Seats`);
            const data = await response.json();
            seats.splice(0, seats.length, ...data);
        }catch (error) {
            console.log('Error displaying seats: ', error);
        }
    }

    const addReservedSeatsToDatabase = async (selectedSeats: Seat[], sessionId: string) => { 
        try {
            const idsAsientosParaComprar = selectedSeats.map(seat => seat.seatId);
            const payload = {
                seats: idsAsientosParaComprar
            };
            const response = await fetch(`http://localhost:8001/Session/${sessionId}/Seats`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }); 
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error reserving seats: ', error);
        }
    }
    
    return { seats, getAllSeats, addReservedSeatsToDatabase };
})
