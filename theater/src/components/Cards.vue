<script setup lang="ts">
defineProps<{
  title?: string
  author?: string
  genre?: string
  poster?: string
}>()
</script>

<template>
  <div class="container-item">
    <div class="showItem">
      <div class="genre" id="genre">{{ genre }}</div>
      <img :src="poster" />
      <div class="title">
        <h3 id="title">{{ title }}</h3>
      </div>
    </div>
  </div>
  <!-- 
    <div class="container-show-data">
        <h1 id="title">{{ title }}</h1>
        <h3 id="author">{{ author }}</h3>
        <p><strong>Director: </strong><span id="director">{{ director }}</span></p>
        <div class="data-information">
            <div class="data-1">
                <p id="genre">{{ genre }}</p>
                <p id="price">{{ price }}</p>
            </div>
            <div class="data-2">
                <div class="data-2__item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-popup" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
                    <p id="age">{{ age }}</p>
                </div>
                <div class="data-2__item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-popup" viewBox="0 0 16 16"><path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/><path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/></svg>
                    <p id="length">{{ length }}</p>
                </div>
                <div class="data-2__item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-popup" viewBox="0 0 16 16"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>
                    <p id="date">{{ date }}</p>
                </div>
            </div>
        </div>
        <p id="overview">{{ overview }}</p>
        <div class="container-button"></div>
    </div> -->
</template>

<style scoped>
select {
  font-family: 'Inter', sans-serif;
  width: 110px;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  font-weight: 700;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><polygon points="0,0 12,0 6,6" fill="black"/></svg>')
    no-repeat right 12px center;
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
