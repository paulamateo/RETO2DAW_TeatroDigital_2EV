<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NewHeader from './components/Header.vue'
import NewFooter from './components/Footer.vue'
import Card from './components/Cards.vue'

const obras = [
    { id: 1, title: 'El Fantasma de la Ópera', author: 'Gaston Leroux', director: 'Sara García', genre: 'Musical', price: '20,90€', age: '18+', length: '2h 30min', date: '15/02/2024 | 20:00h', overview: 'En el majestuoso Teatro de la Ópera de París, un enigmático Fantasma se enamora de la talentosa soprano Christine. A medida que su obsesión crece, desata una serie de eventos sobrenaturales que llevan a Christine a enfrentarse a sus propios miedos y al oscuro pasado que acecha en los pasillos del teatro.', poster: '../assets/images/posters/p_thephantomoftheopera.jpeg'},
    { id: 2, title: 'Macbeth', author: 'William Shakespeare', director: 'Carlos Montoya', genre: 'Tragedia', price: '15,90€', age: '16+', length: '2h 40min', date: '20/12/2023 | 21:00h', overview: 'Ambición, brujería y traición se entrelazan en la oscura tragedia de Macbeth, un valiente general cegado por la sed de poder. Incitado por profecías sobrenaturales, Macbeth comete actos atroces para alcanzar la corona, desatando una espiral de violencia y locura que lo consume y consume a todos a su alrededor.', poster: '../assets/images/posters/p_macbeth.jpeg'},
    { id: 3, title: 'Hamlet', author: 'William Shakespeare', director: 'Ana Sánchez', genre: 'Musical', price: '15,90€', age: '14+', length: '2h 15min', date: '29/12/2023 | 20:00h', overview: 'En la corte danesa, el príncipe Hamlet se ve envuelto en una red de engaños y traiciones cuando descubre que su tío ha asesinado a su padre para usurpar el trono. Atormentado por dilemas morales y existenciales, Hamlet enfrenta el desafío de vengar la muerte de su padre mientras lucha con sus propios demonios internos.', poster: '../assets/images/posters/p_hamlet.jpeg'},
    { id: 4, title: 'El Cascanueces', author: 'Andrew Lloyd Webber', director: 'Daniela Méndez', genre: 'Ballet', price: '20,99€', age: '16+', length: '2h 30min', date: '10/01/2024 | 20:30h', overview: 'En la víspera de Navidad, la joven Clara recibe un cascanueces mágico que la lleva a un mundo encantado de dulces y sueños. Acompañada por su príncipe, se embarca en un viaje festivo lleno de bailarines, ratones y hadas, descubriendo la magia y la imaginación en cada rincón de este cuento de hadas musical.', poster: '../assets/images/posters/p_thenutcracker.jpeg'},
    { id: 5, title: 'Divina Comedia', author: 'Dante Alighieri', director: 'Luis Rosa', genre: 'Drama Épico', price: '14,90€', age: '18+', length: '2h 30min', date: '15/01/2024 | 21:00h', overview: 'Dante Alighieri, guiado por el poeta Virgilio, emprende un épico viaje a través del Infierno, el Purgatorio y el Paraíso. En su travesía, enfrenta las consecuencias de sus acciones pasadas, encuentra almas atormentadas y descubre las complejidades del bien y el mal en esta adaptación teatral de su obra maestra.', poster: '../assets/images/posters/p_thedivinecomedy.jpeg'},
];

</script>

<template>
  <header>
    <!-- <NewHeader ></NewHeader> -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/shows">Billboard</RouterLink>
      <RouterLink to="/programming">Programming</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />

    
  <div class="container-show">
    <div class="container-show-item">
    <Card 
        v-for="obra in obras"
        :key="obra.id"
        :title="obra.title"
        :image="obra.poster"
        :genre="obra.genre"
        />
  </div>
  </div>
  </main>

  <footer>
    <NewFooter ></NewFooter>
  </footer>
</template>

<style scoped>
  select {
  font-family: "Inter", sans-serif;
  width: 110px;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  font-weight: 700;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><polygon points="0,0 12,0 6,6" fill="black"/></svg>') no-repeat right 12px center;
  background-size: 12px auto;
  appearance: none;
}

.select-genre__form {
  margin: 60px 70px 20px 70px;
  display: flex;
  justify-content: right;
}
.select-genre__form label {
  margin-right: 10px;
}

.container {
  margin: 20px 70px 70px 70px;
  gap: 30px;
  font-size: 0;
}
.container-item {
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center;
  height: auto;
  margin-bottom: 30px;
  cursor: pointer;
}
.container-item img {
  width: 100%;
  object-fit: cover;
}

form {
  font-size: 14px;
}

.title {
  background-color: #0b0b0b;
  color: white;
  padding: 8px;
  height: 50px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

.genre {
  all: unset;
  position: absolute;
  top: 10px;
  left: 15px;
  background-color: #b20000;
  color: white;
  padding: 15px;
  border-radius: 30px;
  font-size: 12px;
  margin: 15px 0 0 10px;
  text-transform: uppercase;
}

.banner--tickets {
  background-image: url(../img/elements/banner_billboard.jpg);
}
.banner--tickets h1 {
  padding-top: 60px;
}

@media (min-width: 760px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 10px));
  }
  .container-item {
    margin-bottom: 0;
  }
}
@media (min-width: 990px) {
  .container {
    grid-template-columns: repeat(4, calc(24% - 10px));
  }
}

</style>