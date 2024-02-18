<template>
  <div class="banner banner--show" id="container-banner"></div>

  <div class="details-show" id="container-details">
    <div class="details-show__item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-film"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"
        />
      </svg>
      <p><strong>GÉNERO</strong></p>
      <p id="details-show__genre"></p>
    </div>
    <div class="details-show__item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-cash"
        viewBox="0 0 16 16"
      >
        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"
        />
      </svg>
      <p><strong>PRECIO</strong></p>
      <p><span id="details-show__price"></span>€</p>
    </div>
    <div class="details-show__item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-pen"
        viewBox="0 0 16 16"
      >
        <path
          d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
        />
      </svg>
      <p><strong>DIRECTOR/A</strong></p>
      <p id="details-show__director"></p>
    </div>
    <div class="details-show__item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-people"
        viewBox="0 0 16 16"
      >
        <path
          d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </svg>
      <p><strong>EDAD RECOMENDADA</strong></p>
      <p>A partir de <span id="details-show__age"></span> años</p>
    </div>
    <div class="details-show__item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-stopwatch"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
        <path
          d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"
        />
      </svg>
      <p><strong>DURACIÓN</strong></p>
      <p id="details-show__length"></p>
    </div>
    <div class="details-show__item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-calendar-week"
        viewBox="0 0 16 16"
      >
        <path
          d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
        />
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
        />
      </svg>
      <p><strong>FECHA</strong></p>
      <div class="details-show__date" id="details-show__day"></div>
    </div>
    <div class="details-show__item details-show__item--link" id="button-overview">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-file-text"
        viewBox="0 0 16 16"
      >
        <path
          d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
        />
        <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"
        />
      </svg>
      <p><strong>SINOPSIS</strong></p>
      <p>Leer más</p>
    </div>
  </div>

  <div class="popup-overview" id="popup-overview">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      class="x-icon"
      id="close-popup"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
      />
    </svg>
    <div class="popup-overview__content">
      <div class="container-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="info-icon"
          viewBox="0 0 16 16"
        >
          <path
            d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"
          />
        </svg>
      </div>
      <p id="details-show__overview"></p>
    </div>
  </div>

  <div class="overlay" id="overlay">
    <div class="popup-purchase" id="popup-purchase">
      <div class="popup-overview__content">
        <div class="tick-element">
          <div id="trigger" class="trigger"></div>
          <svg
            version="1.1"
            id="tick"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 37 37"
            style="enable-background: new 0 0 37 37"
            xml:space="preserve"
          >
            <path
              class="circ path"
              style="
                fill: none;
                stroke: green;
                stroke-width: 3;
                stroke-linejoin: round;
                stroke-miterlimit: 10;
              "
              d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
            />
            <polyline
              class="tick path"
              style="
                fill: none;
                stroke: green;
                stroke-width: 3;
                stroke-linejoin: round;
                stroke-miterlimit: 10;
              "
              points="11.6,20 15.9,24.2 26.4,13.8 "
            />
          </svg>
        </div>
        <h3>¡Gracias por la compra!</h3>
        <p>En breve recibirás un correo electrónico con las entradas.</p>
        <div class="popup-overview__button">
          <button class="button" id="button-close" type="submit">CERRAR</button>
        </div>
      </div>
    </div>
  </div>

  <div class="reserve-seats">
    <h2>RESERVAR ENTRADAS</h2>
    <div class="reserve-seats__content">
      <div class="seats-area">
        <div class="seats-data">
          <p>Elige tus asientos:</p>
          <div class="key">
            <div class="option-key">
              <div class="square square--colour-selected"></div>
              <p>Seleccionado</p>
            </div>
            <div class="option-key">
              <div class="square square--colour-disponible"></div>
              <p>Disponible</p>
            </div>
            <div class="option-key">
              <div class="square square--colour-no-disponible"></div>
              <p>No disponible</p>
            </div>
          </div>
        </div>
        <div class="panel-seats" id="panel-seats">
          <div class="panel-seats__item" id="area-seats"></div>
        </div>
      </div>

      <div class="payment-area">
        <div class="panel-payment">
          <h3>TICKETS</h3>
          <div class="advertisement-tickets" id="ad"></div>
          <div class="selected-tickets" id="selected-tickets"></div>
          <hr />
          <div class="price" id="total-price-tickets">
            <p>Total</p>
            <p>
              <strong><span id="details-show__total-price"></span>€</strong>
            </p>
          </div>
        </div>
        <div class="panel-payment">
          <h3>DATOS PERSONALES</h3>
          <div class="panel-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="icon-panel"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
            <input
              type="text"
              class="input-payment-panel"
              name="name-lastname_input"
              placeholder="Nombre y apellidos"
              required
            />
          </div>
          <div>
            <div class="error-message" id="error-message"></div>
            <div class="panel-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="icon-panel"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                />
              </svg>
              <input
                type="text"
                class="input-payment-panel"
                id="input-email"
                name="email_input"
                placeholder="Correo electrónico"
                required
                onblur="validateEmail()"
              />
            </div>
          </div>
          <div>
            <div class="error-message" id="error-message-2"></div>
            <div class="panel-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="icon-panel"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <input
                type="text"
                class="input-payment-panel"
                id="input-phone"
                name="mobile-phone_input"
                placeholder="Teléfono"
                required
                onblur="validateMobilePhone()"
              />
            </div>
          </div>
          <br />
          <h3>PAGO</h3>
          <div class="panel-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="icon-panel"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
            <input
              type="text"
              class="input-payment-panel"
              name="titular_input"
              placeholder="Titular"
              required
            />
          </div>
          <div>
            <div class="error-message" id="error-message-3"></div>
            <div class="panel-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="icon-panel"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"
                />
              </svg>
              <input
                type="text"
                class="input-payment-panel"
                id="input-card"
                name="credit-card_input"
                placeholder="XXXX XXXX XXXX XXXX"
                required
                onblur="validateCreditCard()"
              />
            </div>
          </div>
          <div class="error-message" id="error-message-4"></div>
          <div class="error-message" id="error-message-5"></div>
          <div class="panel-box-double">
            <div class="panel-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="icon-panel"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                />
              </svg>
              <input
                type="text"
                class="input-payment-panel"
                id="input-calendar"
                name="date_input"
                placeholder="--/--"
                required
                onblur="validateDateCreditCard()"
              />
            </div>
            <div class="panel-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="icon-panel"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
                />
              </svg>
              <input
                type="text"
                class="input-payment-panel"
                id="input-CVV"
                name="CVV_input"
                placeholder="***"
                required
                onblur="validatePassword()"
              />
            </div>
          </div>
          <div class="button-pay">
            <button class="button" id="payment-button" type="submit">PAGAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  font-size: 10px;
  text-align: center;
}

.popup-overview {
  position: fixed;
  border: 3px solid black;
  color: black;
  background-color: white;
  z-index: 100;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  font-size: 10px;
  text-align: justify;
  display: none;
}
.popup-overview.active {
  display: block;
}
.popup-overview__content {
  margin: 30px;
}
.popup-overview__content h3 {
  text-align: center;
}
.popup-overview__content p {
  font-size: 13px;
}
.popup-overview__button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.tickets {
  border: 2px dashed white;
  padding: 10px;
  margin-bottom: 20px;
}
.tickets p {
  font-size: 10px;
  color: white;
  text-align: center;
}

.individual-ticket {
  font-size: 10px;
  color: black;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 0 10px 0;
  position: relative;
}
.individual-ticket p {
  margin: 0;
}
.individual-ticket__data {
  display: flex;
  justify-content: space-between;
}

.selected-tickets {
  margin-bottom: 20px;
}

.trash-icon {
  color: red;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 10px 0 0;
}

.panel-payment {
  background-color: black;
  color: white;
  border-radius: 20px;
  padding: 40px;
  margin: 0 0 30px 0;
}
.panel-payment h3 {
  margin-top: 0;
  text-align: center;
}

.panel-box {
  position: relative;
  color: #0b0b0b;
  width: 100%;
}
.panel-box-double {
  display: flex;
  gap: 20px;
}

.icon-panel {
  position: absolute;
  color: #c3c3c3;
  left: 15px;
  top: 8px;
}

.input-payment-panel {
  width: calc(100% - 20px);
  border: none;
  background-color: white;
  padding: 10px;
  margin: 0 0 15px 0;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  text-indent: 40px;
  outline: none;
  font-size: 12px;
}
.input-payment-panel::placeholder {
  color: #c3c3c3;
}

.button-pay {
  display: flex;
  align-items: center;
  justify-content: right;
}

.price {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin: 0;
}

.banner--show {
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
}
.banner--show h1 {
  padding-top: 90px;
  margin: 0;
}
.banner--show h3 {
  margin: 10px;
  font-weight: 400;
}

.details-show {
  background-color: black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.details-show__date {
  display: flex;
  justify-content: center;
}
.details-show__item {
  font-size: 11px;
  text-align: center;
  color: white;
  padding: 20px;
}
.details-show__item p {
  margin: 0;
}
.details-show__item svg {
  margin-bottom: 10px;
}
.details-show__item--link {
  cursor: pointer;
}

.separation {
  padding-left: 5px;
  padding-right: 5px;
}

.reserve-seats {
  margin: 40px;
}
.reserve-seats h2 {
  text-align: center;
}

.seats-data {
  margin: 0 0 20px 0;
  font-size: 9px;
}

.panel-seats {
  background-color: #181818;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 30px 0;
}
.panel-seats__item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 10px;
  text-align: center;
}

.seat {
  color: white;
  width: 2.5vw;
  height: 2.5vw;
  background-color: #37b02c;
  border-radius: 3px;
  border: 2px solid #37b02c;
  cursor: pointer;
  margin: 0.7vw;
  font-size: 5px;
}
.seat-row {
  display: flex;
}
.seat-deleted {
  width: 2.5vw;
  height: 2.5vw;
  background-color: #181818;
  border-radius: 5px;
  border: 2px solid #181818;
  margin: 0.7vw;
}
.seat.selected {
  background-color: blue;
  border: 2px solid blue;
}
.seat.reserved {
  background-color: #e92e19;
  border: 2px solid #e92e19;
}

.key {
  display: flex;
}

.square {
  padding: 5px;
  border-radius: 2px;
}
.square--colour-selected {
  background-color: blue;
}
.square--colour-disponible {
  background-color: #37b02c;
}
.square--colour-no-disponible {
  background-color: #e92e19;
}

.option-key {
  display: flex;
  align-items: center;
  margin: 0 30px 0 0;
}
.option-key p {
  margin: 0 0 0 10px;
}
.option-key:last-child {
  margin: 0;
}

.tick-element {
  max-width: 70px;
  margin: 0 auto;
}

.circ {
  opacity: 0;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}

.tick {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  -webkit-transition: stroke-dashoffset 1s 0.5s ease-out;
  -moz-transition: stroke-dashoffset 1s 0.5s ease-out;
  -ms-transition: stroke-dashoffset 1s 0.5s ease-out;
  -o-transition: stroke-dashoffset 1s 0.5s ease-out;
  transition: stroke-dashoffset 1s 0.5s ease-out;
}

.drawn + svg .path {
  opacity: 1;
  stroke-dashoffset: 0;
}

.overlay {
  background-color: rgba(1, 1, 1, 0);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  visibility: hidden;
  z-index: 3;
  backdrop-filter: blur(7px);
  opacity: 0;
  transition: background-color 0.9s ease;
}
.overlay.active {
  visibility: visible;
  opacity: 1;
  background-color: rgba(1, 1, 1, 0.5);
}

.popup-purchase {
  position: fixed;
  color: black;
  background-color: white;
  z-index: 100;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: justify;
}

.x-icon {
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px 10px 0 0;
  cursor: pointer;
}

.container-icon {
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
}

@media (min-width: 780px) {
  .popup-overview {
    font-size: 14px;
  }
  .details-show {
    grid-template-columns: repeat(7, 1fr);
    padding: 10px;
  }
  .reserve-seats {
    margin: 50px;
  }
  .reserve-seats h2 {
    text-align: left;
  }
  .payment-area {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .square {
    border-radius: 5px;
    padding: 10px;
  }
  .seats-data {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .seat {
    width: 30px;
    height: 30px;
    margin: 5px;
    font-size: 10px;
    border-radius: 5px;
  }
  .seat-deleted {
    width: 30px;
    height: 30px;
    margin: 5px;
  }
}
@media (min-width: 1330px) {
  .reserve-seats {
    margin: 50px 140px;
    overflow: hidden;
  }
  .payment-area {
    display: block;
  }
  .reserve-seats__content {
    display: grid;
    grid-template-columns: 70% 25%;
    gap: 50px;
    box-sizing: border-box;
  }
  .seat {
    font-size: 0.7vw;
    width: 2.5vw;
    height: 2.5vw;
    background-color: #37b02c;
    border-radius: 10px;
    border: 2px solid #37b02c;
    cursor: pointer;
    margin: 0.4vw;
  }
  .seat-deleted {
    width: 2.5vw;
    height: 2.5vw;
  }
}
</style>
