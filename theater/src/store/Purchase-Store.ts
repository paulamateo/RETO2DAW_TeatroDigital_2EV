import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Purchase {
    purchaseId: number,
    datePurchase: Date,
    buyerName: string,
    buyerPhone: string,
    buyerEmail: string,
    totalPrice: number,
    title: string,
    sessionId: number,
    reservedSeats: []
}

export interface Seat {
    seatId: number,
    seatIdReserved: number,
    isDisponible: boolean,
    sessionId: number
}

export const usePurchasesStore = defineStore('purchases', () => {
    const purchases = reactive<Purchase[]>([])

    const getAllPurchases = async () => {
        try {
            const response = await fetch('http://localhost:8001/Purchase')
            const data = await response.json();
            purchases.splice(0, purchases.length, ...data);
            return data;
        }catch (error) {
            console.log('Error displaying purchases: ', error);
            return [];
        }
    }

    const addPurchaseToDatabase = async (fecha: Date, comprador: string, telefono: string, precioTotal: number, email: string, titulo: string, sessionId: number, reservedSeats: Seat[]) => {
        try {
            const purchase = {
                purchaseId: 0,
                datePurchase: fecha,
                buyerName: comprador,
                buyerPhone: telefono,
                buyerEmail: email,
                totalPrice: precioTotal,
                title: titulo,
                sessionId: sessionId,
                reservedSeats: reservedSeats
            }
            const response = await fetch("http://localhost:8001/Purchase", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(purchase),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to create purchase: ', error);
        }
    }

    return { purchases, getAllPurchases, addPurchaseToDatabase };
})
