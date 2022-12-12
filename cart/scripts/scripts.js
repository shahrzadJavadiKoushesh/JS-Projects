let product_container = document.querySelector('#products');

function showAllProducts(){
    for(let i = 0; i<products.length; i++){
        product_container.innerHTML += `<div class="product-item">
        <div class="product-img"><img src="assets/images/1.jpg" alt=""></div>
        <div class="product-title">کفش چرم مردانه</div>
        <div class="product-instock">تعداد موجود: 5</div>
        <div class="product-data">
            <div class="product-price">120 هزار تومان</div>
            <div class="product-addToCart"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
    </div>`;
    }
}

showAllProducts();

