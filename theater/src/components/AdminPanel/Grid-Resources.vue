<template>
    <h3>Recursos iniciales</h3>
    <div class="initial-resources__grid">
        <a href="https://www.midjourney.com/home">
            <div class="initial-resources__item">
                <img class="initial-resources__img" src="../../assets/images/elements/midjourney_interface.jpg"/>
                <div class="initial-resources__details">
                    <span><strong>Midjourney</strong></span>
                    <p>Generador de imágenes por IA</p>
                </div>
            </div>
        </a>           
        <a href="https://www.bing.com/images/create">
            <div class="initial-resources__item">
                <img class="initial-resources__img" src="../../assets/images/elements/bing_interface.jpg"/>
                <div class="initial-resources__details">
                    <span><strong>Bing Image Creator</strong></span>
                    <p>Generador de imágenes por IA</p>
                </div>
            </div>
        </a>
        <a href="https://kraken.io/">
            <div class="initial-resources__item">
                <img class="initial-resources__img" src="../../assets/images/elements/kraken_interface.png"/>
                <div class="initial-resources__details">
                    <span><strong>Kraken.io</strong></span>
                    <p>Optimizador de imágenes</p>
                </div>
            </div>
        </a>
        <a href="https://marketingplatform.google.com/intl/es/about/tag-manager/">
            <div class="initial-resources__item">
                <img class="initial-resources__img" src="../../assets/images/elements/manager_interface.jpeg"/>
                <div class="initial-resources__details">
                    <span><strong>Google Tag Manager</strong></span>
                    <p>Gestión de etiquetas</p>
                </div>
            </div>
        </a>
        <a href="https://marketingplatform.google.com/intl/es/about/analytics/">
            <div class="initial-resources__item">
                <img class="initial-resources__img" src="../../assets/images/elements/analytics_interface.png"/>
                <div class="initial-resources__details">
                    <span><strong>Google Analytics</strong></span>
                    <p>Analítica web</p>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
    .initial-resources__item {
        background-color: #f9fafb;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        cursor: pointer;
        transition: transform 0.3s ease; 
        height: 100%;
    }

    .initial-resources__item:hover {
        transform: scale(1.05);
    }

    .initial-resources__details {
        padding: 20px;
    }

    .initial-resources__details span {
        font-size: 15px;
    }

    .initial-resources__img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    a {
        color: #8a92a6;
    }

    @media (min-width: 950px) { 
        .initial-resources__grid {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            font-size: 12px;
        }
    }

    @media (max-width: 950px) {
        .initial-resources__grid {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            font-size: 12px;
        }
    }

    @media (max-width: 750px) {
        .initial-resources__grid {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            font-size: 12px;
        }
    }

    @media (max-width: 630px) {
        .initial-resources__grid {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 15px;
            font-size: 12px;
        }
    }
</style>