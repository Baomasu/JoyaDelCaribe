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

    let tarjetas = document.getElementById("tarjetas-verticales");
    let orderArray = [[[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]], [[5, 8, 15, 7], [0, 16, 14, 17], [1, 3, 9, 5]]];
    let page = 0;

    let nextbtn = document.getElementById("next-p");
    let prevbtn = document.getElementById("previous-p");
    let psesent = document.getElementById("present-p");

    psesent.innerText = page+1;
    tarjetas.innerHTML = ``;
    for (let n = 0; n < orderArray[page].length; ++n) {
        tarjetas.innerHTML += ` 
                 <div class="row">
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][0]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][0]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][0]].price}</p>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/corazon.png" style="height: 1.8rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][1]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][1]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][1]].price}</p>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/amor.png" style="height: 1.57rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <div class="price-tag-img1">- 00 %</div>
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][2]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][2]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][2]].price}</p>
                                    <div class="price-tag-img2 col-4">- 00 %</div>
                                </div>
                                <div class="row">
                                    <p class="card-text col-6" style="color: grey; text-decoration: line-through; font-size: small;">$ 000.00</p>
                                </div>
    
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/corazon.png" style="height: 1.8rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <div class="price-tag-img1">- 00 %</div>
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][3]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][3]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][3]].price}</p>
                                    <div class="price-tag-img2 col-4">- 00 %</div>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/amor.png" style="height: 1.57rem;"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
    }

    prevbtn.addEventListener('click', () => {
        page = 0;
        psesent.innerText = page+1;
        tarjetas.innerHTML = ``;
        for (let n = 0; n < orderArray[page].length; ++n) {
            tarjetas.innerHTML += ` 
                 <div class="row">
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][0]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][0]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][0]].price}</p>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/corazon.png" style="height: 1.8rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][1]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][1]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][1]].price}</p>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/amor.png" style="height: 1.57rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <div class="price-tag-img1">- 00 %</div>
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][2]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][2]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][2]].price}</p>
                                    <div class="price-tag-img2 col-4">- 00 %</div>
                                </div>
                                <div class="row">
                                    <p class="card-text col-6" style="color: grey; text-decoration: line-through; font-size: small;">$ 000.00</p>
                                </div>
    
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/corazon.png" style="height: 1.8rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <div class="price-tag-img1">- 00 %</div>
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][3]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][3]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][3]].price}</p>
                                    <div class="price-tag-img2 col-4">- 00 %</div>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/amor.png" style="height: 1.57rem;"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        }

    });

    nextbtn.addEventListener('click', () => {
        page = 1;
        psesent.innerText = page+1;
        tarjetas.innerHTML = ``;
        for (let n = 0; n < orderArray[page].length; ++n) {
            tarjetas.innerHTML += ` 
                 <div class="row">
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][0]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][0]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][0]].price}</p>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/corazon.png" style="height: 1.8rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][1]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][1]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][1]].price}</p>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/amor.png" style="height: 1.57rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <div class="price-tag-img1">- 00 %</div>
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][2]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][2]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][2]].price}</p>
                                    <div class="price-tag-img2 col-4">- 00 %</div>
                                </div>
                                <div class="row">
                                    <p class="card-text col-6" style="color: grey; text-decoration: line-through; font-size: small;">$ 000.00</p>
                                </div>
    
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/corazon.png" style="height: 1.8rem;"></a></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-3 col-sm-12" style="padding-top: 2rem;">
                        <div class="card-style">
                            <div class="price-tag-img1">- 00 %</div>
                            <img src="src/assets/productssrc/${productos[orderArray[page][n][3]].img}" class="product-img" />
                            <div class="card-content">
                                <h5 class="card-title"><b>${productos[orderArray[page][n][3]].name}</b></h5>
                                <div class="row" style="padding-top: 0.4rem;">
                                    <p class="card-text col-6" style="color: blue;">$ ${productos[orderArray[page][n][3]].price}</p>
                                    <div class="price-tag-img2 col-4">- 00 %</div>
                                </div>
                            </div>
                            <div class="row justify-content-end heart-cart-icons">
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/anadir-al-carrito.png" style="height: 1.8rem;"></a>
                                </div>
                                <div class="col-1" style="margin: 0.5rem;"><a href=""><img
                                            src="src/assets/icons/amor.png" style="height: 1.57rem;"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        }
    });


}

