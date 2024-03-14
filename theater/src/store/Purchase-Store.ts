import { defineStore } from "pinia";
import { reactive } from "vue";

export interface selectedSeat {
    seatId: number;
    seatIdReserved: number;
    session: string;
}

export interface Purchase {
    purchaseId: number,
    datePurchase: Date,
    buyerName: string,
    buyerPhone: string,
    buyerEmail: string,
    totalPrice: number,
    title: string,
    sessionId: number,
    reservedSeats: selectedSeat[]
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

    const addPurchaseToDatabase = async (fecha: Date, name: string, phone: string, email: string, totalPrice: number, title: string, sessionId: number, reservedSeats: selectedSeat[]) => {
        try {
            const purchase = {
                purchaseId: 0,
                datePurchase: fecha,
                buyerName: name,
                buyerPhone: phone,
                buyerEmail: email,
                totalPrice: totalPrice,
                title: title,
                sessionId: sessionId,
                reservedSeats: reservedSeats
            };
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

