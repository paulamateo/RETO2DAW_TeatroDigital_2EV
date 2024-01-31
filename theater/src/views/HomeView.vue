<template>
    <div class="hero-banner">
        <div class="hero-banner__content">
            <h1>BIENVENIDO AL TEATRO RISAS Y TRAGEDIAS</h1>
            <hr class="hero-banner__line">
            <div class="hero-banner__subtitles">
                <h4>DESCUBRE EL ARTE EN VIVO:</h4>
                <h4>DONDE LAS HISTORIAS COBRAN VIDA EN EL ESCENARIO</h4>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="chevronleft-icon" id="chevronleft-icon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
    </div>

    <div class="second-banner">
        <div class="second-banner__content">
            <h2 class="subtitle">HABLAN LOS ESPECTADORES</h2>
            <div class="second-banner__review">
                <p>"Increíblemente conmovedora. La combinación de la música, la iluminación y las actuaciones hicieron que la historia cobrara vida de una manera única. Definitivamente una joya teatral."</p>
                <p>Luis M., sobre <strong>Bodas de Sangre</strong></p>
            </div>
            <div class="second-banner__review">
                <p>"Hacía tiempo que no veía una obra tan bien ejecutada. La intensidad emocional, la calidad de las actuaciones y la atmósfera del teatro crearon una experiencia inolvidable. ¡Totalmente recomendado!"</p>
                <p>María G., sobre <strong>Macbeth</strong></p>
            </div>
            <div class="second-banner__review">
                <p>"Una noche mágica. La química entre los actores era palpable, y la conexión con la audiencia fue excepcional. Nunca olvidaré la emoción que sentí al salir del teatro."</p>
                <p>Carlos J., sobre <strong>El Fantasma de la Ópera</strong></p>
            </div>
            <a href="billboard.html">
                <button class="button grid-item__button--position" type="submit">VER OBRAS DISPONIBLES</button>
            </a>
        </div>
    </div> 

    <section class="shows">
        <div class="shows__rectangle">
            <h2>VIVE LA MAGIA MUSICAL</h2>
        </div>
        <div class="shows__grid shows__grid--columns" id="shows-grid__musical-genre"></div>
    </section>
    
</template>

<style scoped>
    .second-banner {
        background-image: url(../assets/images/elements/banner_homepage_2.jpg);
        background-size: cover;
        background-position: center;
        color: white;
        height: 80vh;
        display: flex;
        align-items: center;
    }
    .second-banner p, .second-banner h2 {
        margin: 0;
    }
    .second-banner__content {
        width: 55%;
        text-align: justify;
        margin: 0 0 0 50px;
        display: flex;
        flex-direction: column;
    }
    .second-banner__content h2 {
        font-family: "GothamLight", sans-serif;
        letter-spacing: 0.15em;
        padding-bottom: 20px;
    }
    .second-banner__review {
        margin: 10px 0 10px 0;
        font-size: 9px;
    }

    .hero-banner {
        background-image: url(../assets/images/elements/banner_homepage.png);
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        letter-spacing: 0.15em;
    }
    .hero-banner h4 {
        font-size: 80%;
    }
    .hero-banner h1 {
        font-size: 200%;
        font-family: "GothamBook", sans-serif;
        font-weight: 400;
        padding: 0 40px 25px 40px;
    }
    .hero-banner__subtitles {
        font-family: "GothamLight", sans-serif;
        margin: 40px 0 0 0;
        padding: 0 40px 25px 40px;
    }
    .hero-banner__line {
        border: 2px solid white;
        width: 50px;
    }
    .hero-banner__content {
        text-align: center;
        color: white;
    }
    .hero-banner__content h1 {
        margin: 0;
    }

    .grid-item {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        background-size: cover;
        background-position: center;
    }
    .grid-item h2 {
        font-family: "GothamLight", sans-serif;
        letter-spacing: 0.15em;
    }
    .grid-item__button:hover {
        background-color: #b0802c;
    }
    .grid-item__button--position {
        margin: 30px 0 0 auto;
    }

    .shows__rectangle {
        background-color: #b20000;
        text-align: center;
        color: white;
        font-weight: 300;
        padding: 15px;
    }
    .shows__rectangle h2 {
        font-family: "GothamLight", sans-serif;
        letter-spacing: 0.15em;
    }

    .shows__grid {
        margin: 50px;
        color: white;
        font-weight: 400;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 300px);
        grid-gap: 30px;
    }

    .button--index {
        margin: 0;
    }

    .chevronleft-icon {
        cursor: pointer;
        color: white;
        position: absolute;
        bottom: 50px;
        animation: arrow 2s infinite;
    }

    .map {
        filter: grayscale(100%);
    }

    @keyframes arrow {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px);
        }
    }
    @media screen and (min-width: 990px) {
        .shows__grid--columns {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 300px;
            grid-gap: 30px;
        }
        .second-banner__review {
            font-size: 14px;
        }
        .second-banner__content {
            margin: 0 0 0 80px;
            line-height: 20px;
        }
        .hero-banner h1 {
            font-size: 280%;
        }
        .hero-banner__subtitles {
            line-height: 5px;
            font-size: 120%;
        }
    }
</style>