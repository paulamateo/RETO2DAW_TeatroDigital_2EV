import { defineStore } from "pinia";
import { reactive } from "vue";
import { apiUrl } from '@/env';

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
            const response = await fetch(`${apiUrl}/Purchase`)
            const data = await response.json();
            purchases.splice(0, purchases.length, ...data);
            return data;
        }catch (error) {
            console.log('Error displaying purchases: ', error);
            return [];
        }
    }

    return { purchases, getAllPurchases };
})

