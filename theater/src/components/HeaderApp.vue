<script setup lang="ts">
    document.addEventListener('DOMContentLoaded', () => {
        //Icono menú hamburguesa
        var hamburgerIcon = document.getElementById('list-icon') as HTMLElement;
        var headerPopup = document.getElementById('header__popup') as HTMLElement;
        
        hamburgerIcon.addEventListener('click', function() {
            headerPopup.classList.toggle('active');
        })

        //Cambio de logos blanco y negro
        document.addEventListener('scroll', function() {
            var header = document.getElementById('header') as HTMLElement;
            var headerPopup = document.getElementById('header__popup') as HTMLElement;
            var logoImage = document.getElementById('logoImage') as HTMLImageElement;
            var searchContainer = document.getElementById('search') as HTMLElement;
            var scrollPosition = window.scrollY;
        
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
                logoImage.src = '../src/assets/images/elements/logo_blanco.png';
                searchContainer.classList.add('scrolled');
                headerPopup.classList.add('scrolled');
            }else {
                header.classList.remove('scrolled');
                logoImage.src = '../src/assets/images/elements/logo_negro.png';
                searchContainer.classList.remove('scrolled');
                headerPopup.classList.remove('scrolled');
            }
        });
    });
</script>

<template>
    <header class="header" id="header">
        <div class="header__content header__content--navbar">
            <div class="header__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="list-icon" id="list-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <div class="header__logo">
              <RouterLink to="/"><img class="logo logo--size" id="logoImage" src="../assets/images/elements/logo_negro.png"/></RouterLink>
            </div>
            <nav class="menu">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                        </svg>
                        <RouterLink to="/Programming"><a>PROGRAMACIÓN</a></RouterLink>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-ticket-perforated" viewBox="0 0 16 16">
                            <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9H4m7 0v.9h1v-.9h-1m-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z"/>
                            <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z"/>
                        </svg>
                        <RouterLink to="/Billboard"><a>ENTRADAS</a></RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="search search--visibility">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="loupe loupe--position" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input type="text" class="search__input " id="search" name="search" placeholder="Buscar">
            </div>

            <div class="header__popup" id="header__popup">
                <div class="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="loupe" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <input type="text" class="search__input" id="search" name="search" placeholder="Buscar">
                </div>
                <nav class="nav-menu">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                            <RouterLink to="/Programming"><a>PROGRAMACIÓN</a></RouterLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-ticket-perforated" viewBox="0 0 16 16">
                                <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9H4m7 0v.9h1v-.9h-1m-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z"/>
                                <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z"/>
                            </svg>
                            <RouterLink to="/Billboard"><a>ENTRADAS</a></RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>  
</template>

<style scoped>
    .header {
        background-color: #0b0b0b;
        color: white;
        padding: 5px;
        font-size: 14px;
        position: fixed;
        width: 100%;
        box-sizing: border-box;
        transition: background-color 0.3s;
        z-index: 1;
    }
    .header.scrolled {
        background-color: white;
        color: black;
    }
    .header__content {
        display: flex;
        align-items: center;
        margin: 10px;
        justify-content: space-between;
    }
    .header__popup {
        background-color: #0b0b0b;
        color: white;
        position: absolute;
        left: 0;
        top: 70px;
        padding: 10px;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }
    .header__popup.scrolled {
        background-color: white;
        color: black;
    }
    .header__popup.scrolled .search__input {
        background-color: black;
    }
    .header__popup.scrolled .loupe {
        color: white;
    }
    .header__popup.active {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
    .header__popup ul {
        list-style: none;
        line-height: 30px;
    }
    .header__popup a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        margin-left: 10px;
    }
    .header__popup li {
        display: flex;
        margin-right: 50px;
        align-items: center;
    }

    .logo {
        width: 120px;
        margin-right: 30px;
        cursor: pointer;
    }

    .list-icon {
        cursor: pointer;
    }

    .menu {
        display: none;
    }

    .search {
        position: relative;
    }
    .search__input {
        padding: 10px;
        border: none;
        border-radius: 20px;
        outline: none;
        font-family: "Inter", sans-serif;
        background-color: #353535;
        margin-bottom: 10px;
        text-indent: 40px;
        color: white;
    }
    .search--visibility {
        display: none;
    }

    .loupe {
        position: absolute;
        left: 40px;
        top: 10px;
        cursor: pointer;
    }

    @media screen and (min-width: 990px) {
        .header__content--navbar {
        justify-content: flex-start;
        }
        .search--visibility {
        display: block;
        margin: 0 30px 0 auto;
        }
        .search__input {
        margin: 0;
        width: 280px;
        }
        .search__input.scrolled {
        background-color: black;
        color: white;
        }
        .loupe--position {
        left: 20px;
        color: white;
        }
        .logo--size {
        width: 150px;
        margin: 0 0 0 30px;
        }
        .list-icon {
        display: none;
        }
        .menu {
        display: block;
        margin: 0 0 0 70px;
        }
        .menu ul {
        list-style: none;
        display: flex;
        }
        .menu a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        margin: 0 0 0 10px;
        }
        .menu li {
        display: flex;
        margin: 0 50px 0 0;
        align-items: center;
        }
    }
</style>