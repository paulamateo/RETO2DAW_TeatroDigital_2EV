import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Show {
    showId: number,
    title: string,
    author: string,
    director: string,
    genre: string,
    age: number,
    date: Date,
    length: string,
    price: number,
    poster: string,
    banner: string,
    scene: string,
    overview: string
}

export const useShowsByGenreStore = defineStore('musicalShows', () => {
    const musicalShows = reactive<Show[]>([]);
    const shows = reactive<Show[]>([]);

    const getAllShowsMusical = async () => {
        try {
            const response = await fetch('http://localhost:8001/Genre/musical')
            const data = await response.json();
            musicalShows.splice(0, musicalShows.length, ...data);
        }catch (error) {
            console.log('Error displaying musicals: ', error);
        }
    }

    const getAllGenres = async () => {
        try {
            const response = await fetch('http://localhost:8001/Genre')
            const genres = await response.json()
            return genres;
        }catch (error) {
            console.log('Error displaying genres: ', error);
        }
    }

    const getAllShowsByGenre = async(genre: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Genre/${genre}`);
            const data = await response.json();
            shows.splice(0, shows.length, ...data);
            return data;
        }catch (error) {
            console.log('Error displaying shows by genre: ', error);
            return [];
        }
    }
    
    return { shows, musicalShows, getAllShowsMusical, getAllGenres, getAllShowsByGenre };
})