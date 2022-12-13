let product_container = document.querySelector('#products');
let cart_header = document.querySelector('#cart-header');
let cart_container = document.querySelector('#cart');
let cart_items = document.querySelector('#cart-items');

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
    item.number_of_units = 1;
    cart.push(item);
    render_cart_items();
}

// render cart items
function render_cart_items(){
    cart_items.innerHTML = '';
    for(let i = 0; i < cart.length; i++){
        cart_items.innerHTML += `<li id="cart-item">
        <div id="p-name">`+cart[i].name+`</div>
        <div id="p-price">`+cart[i].price+`</div>
         <div id="p-unit">
            <span class="plus" onclick="change_numbers_of_items('plus', `+ cart[i].id +`)"><i class="fa-solid fa-plus"></i></span>
            <span class="unit">0</span>
            <span class="minus" onclick="change_numbers_of_items('minus', `+ cart[i].id +`)"><i class="fa-solid fa-minus"></i></span>
         </div>
    </li>`
    }
}

// change number of units

function change_numbers_of_items(action, id){
    console.log(action + '-' + id);
}