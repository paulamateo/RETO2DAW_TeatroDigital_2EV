import { defineStore } from "pinia";
import { reactive } from "vue";
import { format } from 'date-fns';


export interface Session {
    sessionId: number,
    hour: string,
    totalSeats: number,
    notes: string,
    showId: number,
    title: string,
    poster: string,
    date: Date,
    seats: []
}


export const useSessionsStore = defineStore('sessions', () => {
    const sessions = reactive<Session[]>([])

    const formatDate = (date: Date) => {
        return format(new Date(date), 'dd/MM/yyyy');
    };

    const getAllSessions = async () => {
        try {
            const response = await fetch(`http://localhost:8001/Session`)
            const data = await response.json();
            sessions.splice(0, sessions.length, ...data);
        }catch (error) {
            console.log('Error displaying sessions: ', error);
        }
    }

    const getAllSessionsbyShow = async (showId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Show/${showId}/Session`)
            const data = await response.json();
            sessions.splice(0, sessions.length, ...data);
        }catch (error) {
            console.log('Error displaying sessions by show: ', error);
        }
    }
   
    return { sessions, getAllSessions, getAllSessionsbyShow, formatDate };
})