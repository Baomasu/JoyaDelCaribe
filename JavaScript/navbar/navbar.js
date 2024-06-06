let navbar = document.getElementById("navbar");
navbar.innerHTML = `

<section class="container-fluid navbar-1">
        <section class="container">
            <div class="row">
                <div class="col-2 navbarEscritorio">
                    <a href=""><img src="src/assets/profilePictures/Logo.png" alt="" class="logo"></a>
                </div>
                <div class="col-2  navbarMobil">
                    <a href=""><img src="src/assets/profilePictures/Logo.png" alt="" class="logo"></a>
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
                        <a href="" class="col-5"><img src="src/assets/profilePictures/Usuario.png" class="logo"></a>
                        <a href="" class="col-4"><img src="src/assets/profilePictures/Carrito.png" class="logo"></a>
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
                    <div class="item-collapse"><a href="" class="enlacenavbar"><img
                                src="./src/assets/profilePictures/Usuario.png" alt="">Mi
                            Perfil</a></div>
                    <div class="item-collapse"><a href="" class="enlacenavbar"><img
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
                    <a class="enlacenavbar" href="">Inicio</a>
                </div>
                <div class="col-4">
                    <a class="enlacenavbar" href="">Nosotros</a>
                </div>
                <div class="col-4">
                    <a class="enlacenavbar" href="">Productos</a>
                </div>
            </div>
        </section>
    </section>

`;