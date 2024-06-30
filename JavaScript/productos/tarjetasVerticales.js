const tarjetas = document.getElementById("tarjetas-verticales");
function getData() {
    const promise = fetch('../JSONS/productos.json', { method: 'GET' });
    promise
        .then((response) => {
            response.json()
                .then((productObj) => {

                    listarProductos(productObj.productos);
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
function listarProductos(productos) {
    productos.forEach(product => {
        tarjetas.insertAdjacentHTML("beforeend", ` 
            <div class="card shadow rounded-bottom-5 p-0" style="width: 15rem;">
                <img src="./src/assets/productssrc/${product.img}" class="card-img-top" alt="">
                <div class=" card-body p-4">
                    <p class="card-title text-end" style="color: gray;">${product.category}</p>
                    <h5 class="card-title">${product.name}</h5>
                    <div class="d-flex align-items-center mt-3">
                        <span class="h6 mb-0">${descuentoTotal(product.discount, product.price)}</span>
                        <span class="badge bg-danger me-2 ms-2">${descuento(product.discount)}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between flex-row-reverse mt-2">
                        <button type="button" class="btn btn-dark btnDetalles rounded-4" data-bs-toggle="modal" data-bs-target="#${product.id}">Detalles</button>    
                        <span class="h6 mb-0 text-decoration-line-through" style="color: gray;">${costoTotal(product.discount, product.price)}</span>
                        
                        <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="${product.id}" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="${product.id}">${product.name}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">${product.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`);
    });
}

document.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const categoria = this.getAttribute('data-categoria');
        fetch('../JSONS/productos.json')
            .then(response => response.json())
            .then(productos => {
                console.log(productos);
                const productosFiltrados = productos.productos.filter(productos => productos.category === categoria);
                console.log(productosFiltrados);
                tarjetas.innerHTML = '';
                listarProductos(productosFiltrados);
            });
    });
});

function descuento(discount) {
    if (discount === 0) {
        return '';
    } else {
        return discount + '%';
    }
}

function costoTotal(discount, precio) {
    if (discount === 0) {
        return '';
    } else {
        return '$' + precio.toFixed(2);
    }
}

function descuentoTotal(discount, precio) {
    if (discount === 0) {
        return '$' + precio.toFixed(2);
    } else {
        let operation = precio - (precio * (discount / 100));
        return '$' + operation.toFixed(2);
    }
}