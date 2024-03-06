import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Show {
    showId: number,
    title: string,
    author: string,
    director: string,
    genre: string,
    price: number,
    age: number,
    date: Date,
    length: string,
    poster: string,
    banner: string,
    scene: string,
    overview: string
}

export const useShowsStore = defineStore('shows', () => {
    const shows = reactive<Show[]>([])

    const getAllShows = async () => {
        try {
            const response = await fetch('http://localhost:8001/Show')
            const data = await response.json();
            data.forEach((show : Show) => { 
                shows.push(show);
            });
        }catch (error) {
            console.log('Error displaying shows: ', error);
        }
    }
    
    return { shows, getAllShows };
})