let footer = document.getElementById("footer");
footer.innerHTML = `
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
                    <a href=""><i class="bi bi-caret-right-fill"></i><strong>Iniciar sesión</strong></a>
                    <a href=""><i class="bi bi-caret-right-fill"></i><strong>Mi cuenta</strong></a>
                    <a href=""><i class="bi bi-caret-right-fill"></i><strong>Mis pedidos</strong></a>
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
                    <strong><a href="">(Consultar detalles)</a></strong>
                </p>
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
                    <button type="button" class="btn btn-light mt-2 w-100" style="color: #450920;"
                        id="btn-subscribir"><strong>Suscribirse</strong></button>
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
`;