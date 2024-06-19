function getData() {
    const promise = fetch('../JSONS/productos.json', { method: 'GET' });
    promise
        .then((response) => {
            response.json()
                .then((productObj) => {
                    addCarouselItem(productObj.productos);
                })
                .catch((error) => {
                    console.log('Hubo un problema con el JSON ' + error);
                });
        })
        .catch((error) => {
            console.log('Hubo un problema con la solicitud ' + error);
        });
}
getData();

function addCarouselItem(productList) {
    let carouselItem = null;
    let containerItem = null;
    let rowItem = null;
    let indexCounter = 0; 
    const isMobile = screen.width <= 576;
    const isTablet = screen.width <= 991

    function createNewCarouselItem() {
        carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (indexCounter === 0) {
            carouselItem.classList.add('active');
        }
        containerItem = document.createElement('div');
        containerItem.classList.add('container');
        rowItem = document.createElement('div');
        rowItem.classList.add('row');

        containerItem.appendChild(rowItem);
        carouselItem.appendChild(containerItem);
        document.getElementById('carousel-container').appendChild(carouselItem);
    }

    productList.forEach((product) => {
        if (product.discount > 0) {
            if (isMobile || ( isTablet && (!carouselItem || indexCounter % 2 === 0)) || (!carouselItem || indexCounter % 3 === 0)) {
                createNewCarouselItem();
            }

            // Incrementar el contador después de agregar un producto
            indexCounter++;

            // Añadir tarjeta del producto al rowItem
            rowItem.insertAdjacentHTML('beforeend', `
                <div class="col-sm-12 col-md-4"> <!-- Un solo item por slide en móviles -->
                    <div class="card mb-7 my-4 rounded-4 justify-content-center" style="width: 100%; height: ${ isMobile ? "320px" : "320px"};"> <!-- Estilo consistente -->
                        <div class="row g-0 align-items-center h-100">
                            <div class="col-7 h-100 rounded-4" style = "background-image:url(./src/assets/productssrc/${product.img}) !important; background-size: cover; background-position: center;">  <!-- Imagen a tamaño completo -->
                                <span class="position-absolute top-0 start-0 badge text-bg-danger" style="margin-top: 2rem;">
                                    -${product.discount}%
                                </span>
                            </div>
                            <div class="col-5"> <!-- Descripción completa -->
                                <div class="card-body">
                                    <h5 class="card-title fs-4">${product.name}</h5>
                                    <p class="card-text price mt-md-5 mt-sm-1">$${product.price - (product.price * product.discount / 100)}  <span class="badge text-bg-danger">-${product.discount}%</span></p>
                                    <p class="card-text priceWithoutDiscount" style="text-decoration: line-through;">$ ${product.price}.00</p>
                                    <p class="card-text mt-5" style="display: flex;justify-content: flex-end;">
                                        <a href="#"><img src="./src/assets/shopCart.png" alt="Carrito de compras" style="width: 2rem; margin: 0.2rem 0.4rem;"></a>
                                        <a href="#"><img src="./src/assets/whiteHeart.png" alt="Favorito" style="width: 2rem; margin: 0.2rem 0.4rem;"></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }
    });

    // Asegurarse de que el primer elemento del carrusel esté activo
    const firstCarouselItem = document.querySelector('.carousel-item');
    if (firstCarouselItem) {
        firstCarouselItem.classList.add('active');
    }
}