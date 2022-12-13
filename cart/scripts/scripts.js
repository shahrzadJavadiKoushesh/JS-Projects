let product_container = document.querySelector('#products');
let cart_header = document.querySelector('#cart-header');
let cart_container = document.querySelector('#cart');
let cart_items = document.querySelector('#cart-items');
let total_price_elements = document.querySelector('.total-price');
let total_item_elements = document.querySelector('.total-items');

function showAllProducts(){
    for(let i = 0; i<products.length; i++){
        product_container.innerHTML += `<div class="product-item">
        <div class="product-img"><img src="`+products[i].imgSrc+`" alt=""></div>
        <div class="product-title">`+products[i].name+`</div>
        <div class="product-instock">تعداد موجود: ` + products[i].instock + `</div>
        <div class="product-data">
            <div class="product-price">`+commafy(products[i].price)+`</div>
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
    let itemid = cart.some(function(item){
        return item.id == id;
    });
    if (itemid){
        change_numbers_of_items('plus', id)
    }
    else{
        let item = products.find(function(p){
            return p.id == id;
        });
    
        item.number_of_units = 1;
        cart.push(item);
    }
    render_cart_items();
    renderTotal();
}

// render cart items
function render_cart_items(){
    cart_items.innerHTML = '';
    for(let i = 0; i < cart.length; i++){
        cart_items.innerHTML += `<li id="cart-item">
        <div id="p-name" onclick="deleteItem(`+cart[i].id+`)">`+cart[i].name+`</div>
        <div id="p-price">`+commafy(cart[i].price)+`</div>
         <div id="p-unit">
            <span class="plus" onclick="change_numbers_of_items('plus', `+ cart[i].id +`)"><i class="fa-solid fa-plus"></i></span>
            <span class="unit">`+cart[i].number_of_units+`</span>
            <span class="minus" onclick="change_numbers_of_items('minus', `+ cart[i].id +`)"><i class="fa-solid fa-minus"></i></span>
         </div>
    </li>`
    }
}

// change number of units

function change_numbers_of_items(action, id){
    cart = cart.map(function(item){
        let oldNumberOfUnits = item.number_of_units;
        if(item.id == id){
            if (action == 'plus' && oldNumberOfUnits < item.instock){
                oldNumberOfUnits++;
            }
            else if(action == 'minus' && oldNumberOfUnits > 1){
                oldNumberOfUnits--;
            }
        }
        item.number_of_units = oldNumberOfUnits;
        return item;
    });
    render_cart_items();
    renderTotal();
}

// render total

function renderTotal(){
    let totalPrice = 0;
    let totalItems = 0;
    for (let i = 0; i < cart.length; i++){
        totalItems += cart[i].number_of_units;
        totalPrice += cart[i].price * cart[i].number_of_units;
    }
    total_item_elements.innerHTML = totalItems;
    total_price_elements.innerHTML = commafy(totalPrice);
}

// delete item from cart

function deleteItem(id){
    cart = cart.filter(function(item){
        return item.id != id;
    });
    render_cart_items();
}

// function to show nums like this xx.xxx
function commafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}
