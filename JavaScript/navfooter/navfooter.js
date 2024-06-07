let main = document.getElementsByTagName('main')[0];

window.addEventListener('load',async () => {
    await loadNavbar();
    initializeFooterButton();
});

async function loadNavbar() {
    main.insertAdjacentHTML('beforebegin', `
        <section class="container-fluid navbar-1">
        <section class="container">
            <div class="row">
                <div class="col-2 navbarEscritorio">
                    <a href="./index.html"><img src="src/assets/profilePictures/Logo.png" alt="" class="logo"></a>
                </div>
                <div class="col-2  navbarMobil">
                    <a href="./index.html"><img src="src/assets/profilePictures/Logo.png" alt="" class="logo"></a>
                </div>

                <div class="col-8 navbarBuscador">
                    <div class="input-group">
                        <input type="text" class="form-control buscarCaja"
                            placeholder="Buscar por número de parte o descripción" aria-label="Recipient's username"
                            aria-describedby="basic-addon2">
                        <span class="input-group-text buscarBoton" id="basic-addon2">Buscar</span>
                    </div>
                </div>

                <div class="col-2 navbarEscritorio">
                    <div class="row">
                        <a href="./miPerfil.html" class="col-5"><img src="src/assets/profilePictures/Usuario.png" class="logo"></a>
                        <a href="./micarrito.html" class="col-4"><img src="src/assets/profilePictures/Carrito.png" class="logo"></a>
                    </div>
                </div>
                <div class="col-10 navbarMobil">
                    <p class="d-inline-flex gap-1 collapse-p"
                        style="display:flex !important; justify-content: flex-end;">
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
                            aria-expanded="false" aria-controls="collapseExample">
                            <img src="src/assets/profilePictures/menus.png">
                        </a>
                    </p>
                </div>
            </div>
            <div class="collapse " id="collapseExample">
                <div class="card-body-collapse">
                    <div class="item-collapse"><a href="./miPerfil.html" class="enlacenavbar"><img
                                src="./src/assets/profilePictures/Usuario.png" alt="">Mi
                            Perfil</a></div>
                    <div class="item-collapse"><a href="./micarrito.html" class="enlacenavbar"><img
                                src="./src/assets/profilePictures/Carrito.png" alt="">Carrito</a>
                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control buscarCaja"
                            placeholder="Buscar por número de parte o descripción" aria-label="Recipient's username"
                            aria-describedby="basic-addon2">
                        <span class="input-group-text buscarBoton" id="basic-addon2">Buscar</span>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section class="container-fluid navbar-2">
        <section class="container text-center">
            <div class="row">
                <div class="col-4">
                    <a class="enlacenavbar" href="./index.html">Inicio</a>
                </div>
                <div class="col-4">
                    <a class="enlacenavbar" href="./nosotros.html">Nosotros</a>
                </div>
                <div class="col-4">
                    <a class="enlacenavbar" href="./producto.html">Productos</a>
                </div>
            </div>
        </section>
    </section>`);


    main.insertAdjacentHTML('afterend',`
    
         <footer class="footer-section">
        <!-- row de bootstrap para definir una fila horizontal -->
        <!-- mx-auto es un margin en x de auto para centrar el contenido -->
        <!-- pt-5 es un padding en la parte superior de 5 -->
        <div class="row mx-auto pt-5">
            <!-- col-md-6 col-lg-4 es una columna de 6 en dispositivos medianos y 4 en grandes -->
            <!-- px-5 py-3 es un padding en x de 5 y en y de 3 -->
            <div class="col-md-6 col-lg-4 px-5 py-3">
                <!-- La etiqueta i es un icono de bootstrap -->
                <h5><i class="bi bi-bag-check px-2"></i>JOYA DEL CARIBE</h5>
                <!-- La etiqueta ul es una lista no ordenada -->
                <!-- dflex y flex-column son clases de bootstrap para alinear los elementos en columna -->
                <ul class="d-flex flex-column">
                    <!-- La etiqueta i es un icono de bootstrap -->
                    <a href="./iniciosesion.html"><i class="bi bi-caret-right-fill"></i><strong>Iniciar sesión</strong></a>
                    <a href="./miPerfil.html"><i class="bi bi-caret-right-fill"></i><strong>Mi cuenta</strong></a>
                    <a href="./micarrito.html"><i class="bi bi-caret-right-fill"></i><strong>Mis pedidos</strong></a>
                </ul>
                <p>
                    Somos una empresa mexicana 100% comprometida con la comercialización de cosméticos y productos de
                    cuidado personal. Nos destacamos por nuestras fórmulas innovadoras, tecnología de vanguardia e
                    ingredientes de la más alta calidad.</p>
            </div>
            <div class="col-md-6 col-lg-4 px-5 py-3">
                <h5><i class="bi bi-truck px-2"></i>COSTOS Y TIEMPOS DE ENTREGA</h5>
                <p>El costo de envío a México comienza desde $120 MXN (dependiendo del peso de los productos). Enviamos
                    productos en stock en un plazo de 24 horas. <strong><a href="">(Consultar detalles)</a></strong></p>
                <h5><i class="bi bi-patch-check px-2"></i>DEVOLUCIÓN O CAMBIO</h5>
                <p>Los productos comprados se pueden devolver o cambiar dentro de los 14 días posteriores a la entrega.
                    <strong><a href="">(Consultar detalles)</a></strong></p>
            </div>
            <div class="col col-lg-4 px-5 py-3">
                <!-- la etiqueta i es un icono de bootstrap -->
                <h5><i class="bi bi-envelope px-2"></i>¿QUIERES MÁS DE JOYA DEL CARIBE?</h5>
                <p>Recibe los lanzamientos de productos, ofertas e historias más importantes directamente en tu
                    teléfono, además de un 20% de descuento en tu próximo pedido.</p>
                <form>
                    <!-- form-control es una clase de bootstrap para dar estilo a los inputs -->
                    <input type="email" placeholder="Correo electrónico" class="form-control" id="correo-footer">
                    <!-- btn y btn-light es una clase de bootstrap para dar estilo a los botones -->
                    <!-- mt-2 es un margin top de 2 y w-100 es un width de 100% -->
                    <button type="button" class="btn btn-light mt-2 w-100"
                        style="color: #450920;" id="btn-subscribir"><strong>Suscribirse</strong></button>
                </form>
                <!-- d-flex es una clase de bootstrap para alinear los elementos en fila -->
                <!-- justify-content-between es una clase de bootstrap para alinear los elementos con espacio entre ellos -->
                <div class="py-3 d-flex justify-content-between">
                    <!-- fs-3 es una clase de bootstrap para dar un tamaño de fuente de 3 -->
                    <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook fs-3"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram fs-3"></i></a>
                    <a href="https://x.com/" target="_blank"><i class="bi bi-twitter-x fs-3"></i></a>
                    <a href="https://www.tiktok.com/" target="_blank"><i class="bi bi-tiktok fs-3"></i></a>
                    <a href="https://www.pinterest.com/" target="_blank"><i class="bi bi-pinterest fs-3"></i></a>
                    <a href="https://www.youtube.com/" target="_blank"><i class="bi bi-youtube fs-3"></i></a>
                </div>
            </div>
        </div>
        <!-- text-center es una clase de bootstrap para centrar el texto -->
        <div class="container text-center">
            <p><strong>© 2024 Joya del Caribe. Todos los derechos reservados.</strong></p>
        </div>
        <!-- la clase footerPago es una clase de CSS para cambiar el color de fondo -->
        <div class="footerPago p-3">
            <!-- d-flex es una clase de bootstrap para alinear los elementos en fila -->
            <!-- flex-wrap es una clase de bootstrap para que los elementos se ajusten al tamaño del contenedor -->
            <!-- justify-content-center es una clase de bootstrap para alinear los elementos al centro -->
            <div class="d-flex flex-wrap justify-content-center">
                <img src="src/assets/footer/PayPal.svg" alt="Icono PayPal" class="py-2 px-3">
                <img src="src/assets/footer/Apple.svg" alt="Icono Apple" class="py-2 px-3">
                <img src="src/assets/footer/Visa.svg" alt="Icono Visa" class="py-2 px-3">
                <img src="src/assets/footer/Amex.svg" alt="Icono Amex" class="py-2 px-3">
                <img src="src/assets/footer/Mastercard.svg" alt="Icono Mastercard" class="py-2 px-3">
                <img src="src/assets/footer/Maestro.svg" alt="Icono Maestro" class="py-2 px-3">
            </div>
        </div>
    </footer>

        
        `);
        await new Promise(resolve => setTimeout(resolve, 0));
}



function initializeFooterButton() {
    let correof = document.getElementById("correo-footer"); //correo
    let btnSub = document.getElementById("btn-subscribir"); //botón de enviar.

    let isValidf = true;
    let contadorf = true;
    let erCorreof = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (btnSub && correof) {
        btnSub.addEventListener("click", function (event) {
            event.preventDefault();
            correof.style.border = "";
            isValidf = true;
            if (!erCorreof.test(correof.value) && contadorf == true) { //validación para correo
                correof.style.border = "solid red medium";
                isValidf = false;
            }

            if (isValidf && contadorf) {
                console.log(correof.value.toLowerCase())
                correof.value = "";
                correof.style.border = "";
                btnSub.innerHTML = `<strong>Suscrito</strong>`;
                contadorf = false;
            }
        });
    } else {
        console.error("Elementos del DOM no encontrados");
    }
}