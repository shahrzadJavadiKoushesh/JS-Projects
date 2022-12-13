let product_container = document.querySelector('#products');
let cart_header = document.querySelector('#cart-header');
let cart_container = document.querySelector('#cart');

function showAllProducts(){
    for(let i = 0; i<products.length; i++){
        product_container.innerHTML += `<div class="product-item">
        <div class="product-img"><img src="`+products[i].imgSrc+`" alt=""></div>
        <div class="product-title">`+products[i].name+`</div>
        <div class="product-instock">تعداد موجود: ` + products[i].instock + `</div>
        <div class="product-data">
            <div class="product-price">`+products[i].price+`</div>
            <div class="product-addToCart" onclick="add_to_cart(`+products[i].id+`)"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
    </div>`;
    }
}

showAllProducts();

let compare = 0;
cart_header.addEventListener('click', function(){
    if (compare == 0){
        cart_container.style.bottom = '-10px';
        compare = 1;
    }else{
        cart_container.style.bottom = '-365px';
        compare = 0;
    }

})

// cart array
let cart = [];

// ADD TO CART FUNCTION
function add_to_cart(id){
    let item = products.find(function(p){
        return p.id == id;
    })
    cart.push(item);
    console.log(cart);
}