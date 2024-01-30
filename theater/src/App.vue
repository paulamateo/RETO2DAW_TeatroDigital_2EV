<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NewHeader from './components/Header.vue'
import Card from './components/Cards.vue'

const obras = [
    { id: 1, title: 'El Fantasma de la Ópera', author: 'Gaston Leroux', director: 'Sara García', genre: 'Musical', price: '20,90€', age: '18+', length: '2h 30min', date: '15/02/2024 | 20:00h', overview: 'En el majestuoso Teatro de la Ópera de París, un enigmático Fantasma se enamora de la talentosa soprano Christine. A medida que su obsesión crece, desata una serie de eventos sobrenaturales que llevan a Christine a enfrentarse a sus propios miedos y al oscuro pasado que acecha en los pasillos del teatro.', poster: '../assets/banner-phantom.png'},
    { id: 2, title: 'Macbeth', author: 'William Shakespeare', director: 'Carlos Montoya', genre: 'Tragedia', price: '15,90€', age: '16+', length: '2h 40min', date: '20/12/2023 | 21:00h', overview: 'Ambición, brujería y traición se entrelazan en la oscura tragedia de Macbeth, un valiente general cegado por la sed de poder. Incitado por profecías sobrenaturales, Macbeth comete actos atroces para alcanzar la corona, desatando una espiral de violencia y locura que lo consume y consume a todos a su alrededor.', poster: '../assets/banner-macbeth.png'},
    { id: 3, title: 'Hamlet', author: 'William Shakespeare', director: 'Ana Sánchez', genre: 'Musical', price: '15,90€', age: '14+', length: '2h 15min', date: '29/12/2023 | 20:00h', overview: 'En la corte danesa, el príncipe Hamlet se ve envuelto en una red de engaños y traiciones cuando descubre que su tío ha asesinado a su padre para usurpar el trono. Atormentado por dilemas morales y existenciales, Hamlet enfrenta el desafío de vengar la muerte de su padre mientras lucha con sus propios demonios internos.', poster: '../assets/banner-hamlet.png'},
    { id: 4, title: 'El Cascanueces', author: 'Andrew Lloyd Webber', director: 'Daniela Méndez', genre: 'Ballet', price: '20,99€', age: '16+', length: '2h 30min', date: '10/01/2024 | 20:30h', overview: 'En la víspera de Navidad, la joven Clara recibe un cascanueces mágico que la lleva a un mundo encantado de dulces y sueños. Acompañada por su príncipe, se embarca en un viaje festivo lleno de bailarines, ratones y hadas, descubriendo la magia y la imaginación en cada rincón de este cuento de hadas musical.', poster: '../assets/banner-nutcracker.png'},
    { id: 5, title: 'Divina Comedia', author: 'Dante Alighieri', director: 'Luis Rosa', genre: 'Drama Épico', price: '14,90€', age: '18+', length: '2h 30min', date: '15/01/2024 | 21:00h', overview: 'Dante Alighieri, guiado por el poeta Virgilio, emprende un épico viaje a través del Infierno, el Purgatorio y el Paraíso. En su travesía, enfrenta las consecuencias de sus acciones pasadas, encuentra almas atormentadas y descubre las complejidades del bien y el mal en esta adaptación teatral de su obra maestra.', poster: '../assets/banner-comedy.png'},
    { id: 6, title: 'Edipo Rey', author: 'Sófocles', director: 'Rafael López', genre: 'T. Griega', price: '19,90€', age: '16+', length: '2h 45min', date: '02/02/2024 | 21:00h', overview: 'En la ciudad de Tebas, el rey Edipo se embarca en una búsqueda para descubrir la verdad detrás de una oscura profecía que predice su propio destino trágico. A medida que se desenmaraña la verdad, Edipo se enfrenta a las consecuencias de sus elecciones y la inevitable tragedia que marcará su reinado.', poster: '../assets/banner-oedipus.png'},
    { id: 7, title: 'Romeo y Julieta', author: 'William Shakespare', director: 'Marta Váldez', genre: 'Tragedia', price: '9,99€', age: '16+', length: '2h 30min', date: '15/12/2023 | 21:00h', overview: 'En la ciudad de Verona, dos jóvenes enamorados, Romeo y Julieta, se encuentran atrapados en una enemistad ancestral entre sus familias. A pesar de las adversidades y el destino trágico que les espera, su amor florece en secreto, llevándolos a decisiones desgarradoras que cambiarán el curso de sus vidas y las de sus familias para siempre.', poster: '../assets/banner-romeo.png'},
    { id: 8, title: 'Bodas de Sangre', author: 'Federico García Lorca', director: 'Manuel Pérez', genre: 'Tragedia', price: '14,90€', age: '18+', length: '2h 30min', date: '25/02/2024 | 21:00h', overview: 'En una remota aldea española, una boda se convierte en el telón de fondo de una tragedia apasionada. La novia, atrapada entre la tradición y el deseo, escapa con su amante, desencadenando una serie de eventos trágicos que exploran las complejidades del amor, el honor y la inevitabilidad del destino.', poster: '../assets/banner-blood.png'}
];

</script>

<template>
  <header>
    <!-- <NewHeader ></NewHeader> -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/billboard">Billboard</RouterLink>
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
        :author="obra.author"
        :director="obra.director"
        :genre="obra.genre"
        :price="obra.price"
        :age="obra.age"
        :length="obra.length"
        :date="obra.date"
        :overview="obra.overview"
        />
  </div>
  </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  .banner--billboard {
  background-image: url(../IMG/banner_entradas4.jpg);
}

.container-show {
  margin: 40px;
}
.container-show-item {
  background-color: black;
  border-radius: 20px;
}
.container-show-data {
  color: white;
  margin: 40px;
}
.container-show-data p {
  font-size: 13px;
  text-align: justify;
}
.container-show-data h1, .container-show-data h3 {
  margin: 0;
}
.container-show-img img {
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.container-button {
  display: flex;
  justify-content: center;
}

.button--billboard {
  margin-bottom: 30px;
}

.data-1 {
  display: flex;
}
.data-1 p {
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
  margin-right: 15px;
}

.data-2__item {
  display: flex;
  align-items: center;
  color: white;
  font-size: 13px;
}
.data-2__item p {
  margin-right: 30px;
  margin-left: 10px;
}

@media screen and (min-width: 700px) {
  .data-2 {
    display: flex;
    right: 0;
  }
}
@media screen and (min-width: 1270px) {
  .container-show {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 60px 140px;
    grid-gap: 30px;
  }
  .button--billboard {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 1600px) {
  .data-information {
    display: flex;
    justify-content: space-between;
  }
}

</style>