let product_container = document.querySelector('#products');

function showAllProducts(){
    for(let i = 0; i<products.length; i++){
        product_container.innerHTML += `<div class="product-item">
        <div class="product-img"><img src="`+products[i].imgSrc+`" alt=""></div>
        <div class="product-title">`+products[i].name+`</div>
        <div class="product-instock">تعداد موجود: ` + products[i].instock + `</div>
        <div class="product-data">
            <div class="product-price">`+products[i].price+`</div>
            <div class="product-addToCart"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
    </div>`;
    }
}

showAllProducts();

