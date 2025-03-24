//selecting elements to assum
let icon = document.querySelector('.icon-for-cart');
let body = document.querySelector('body');
let closecart = document.querySelector('.for-close');
let product_list = document.querySelector('.heart-medicines');
let eye_list = document.querySelector('.eye-medicines');
let diabatic_list = document.querySelector('.diabatic-medicines');
let muscle_list = document.querySelector('.muscle-medicines');
let medi_list = document.querySelector('.medicine-items');
let list_cart = document.querySelector('.listcart');
let list_cart_span = document.querySelector('.icon-for-cart span');
let totalpriceshow =document.getElementById("totalPrice")
//product array contains all the heart medicines
let product = [
        {
            "id": 1,
            "name":"Tenormin",
            "image":"heart/Tenormin.png",
            "price":100

        },
        {
            "id": 2,
            "name":"Betaxolol",
            "image":"heart/Betaxolol.png",
            "price":126

        },
        {
            "id": 3,
            "name":"Bisoprolo Zebeta",
            "image":"heart/Bisoprolo Zebeta.png",
            "price":150

        },
        {
            "id": 4,
            "name":"Bisoprolol",
            "image":"heart/Bisoprolol.png",
            "price":78

        },
        {
            "id": 5,
            "name":"Metoprolol Lopressor, Toprol XL",
            "image":"heart/Metoprolol Lopressor, Toprol XL.png",
            "price":93

        },
        {
            "id": 6,
            "name":"Nadolol-nobg",
            "image":"heart/Nadolol-nobg.png",
            "price":104

        },
        {
            "id": 7,
            "name":"Propranolol Inderal",
            "image":"heart/Propranolol Inderal.png",
            "price":76

        },
        {
            "id": 8,
            "name":"Sotalol Betapace",
            "image":"heart/Sotalol Betapace.png",
            "price":190

        }
    ];
//product2 array contains all the eye medicines
let product2 = [
    {
        "id":9,
        "name":"Gentadexa",
        "image":"Eye/Gentadexa.png",
        "price":1000

    },
    {
        "id":10,
        "name":"Homatropine eye drops",
        "image":"Eye/Homatropine eye drops.jpeg",
        "price":1260

    },
    {
        "id":11,
        "name":"hypromellose",
        "image":"Eye/hypromellose-box-and-bottle-front-alissa-1024x1024.png",
        "price":1500

    },
    {
        "id":12,
        "name":"Ketorolac",
        "image":"Eye/Ketorolac eye drops Acular.png",
        "price":780

    },
    {
        "id":13,
        "name":"Ketotifen",
        "image":"Eye/Ketotifen eye drops for hay fever.jpeg",
        "price":930

    },
    {
        "id":14,
        "name":"Latadin",
        "image":"Eye/Latadin-new.png",
        "price":1040

    },
    {
        "id":15,
        "name":"Levobunolol",
        "image":"Eye/Levobunolol eye drops for glaucoma.png",
        "price":769

    },
    {
        "id":16,
        "name":"Levofloxacin",
        "image":"Eye/Levofloxacin eye drops.png",
        "price":489

    }
];
//product3 array contains all the diabatic medicines
let product3 = [
    {
        "id":17,
        "name":"dialine",
        "image":"diabetic/dialine.png",
        "price":980

    },
    {
        "id":18,
        "name":"DPP-4 Inhibitors",
        "image":"diabetic/DPP-4 Inhibitors.png",
        "price":234

    },

    {
        "id":19,
        "name":"glucophage",
        "image":"diabetic/glucophage.png",
        "price":265

    },
    {
        "id":20,
        "name":"Macular-B",
        "image":"diabetic/Macular-B.png",
        "price":930

    },
    {
        "id":21,
        "name":"Metformin",
        "image":"diabetic/Metformin.png",
        "price":176

    },
    {
        "id":22,
        "name":"progyluton",
        "image":"diabetic/progyluton.png",
        "price":760

    }
];
//product array contains all the muscle medicines
let product4 = [
    {
        "id":23,
        "name":"Active",
        "image":"musel/active.png",
        "price":1600

    },
    {
        "id":24,
        "name":"Ayurvedic Medicine",
        "image":"musel/Ayurvedic Medicine for Pain - Pain Relief Kit.png",
        "price":9000

    },
    {
        "id":25,
        "name":"A.vogel",
        "image":"musel/joint-pain-relief.png",
        "price":2650

    },
    {
        "id":26,
        "name":"Biocemic",
        "image":"musel/medicine for muscle and joint pain.png",
        "price":5000

    },
    {
        "id":27,
        "name":"Panadol",
        "image":"musel/Panadol.png",
        "price":550

    },
    {
        "id":28,
        "name":"Panaflex",
        "image":"musel/PANAFLEX FOR MUSCLE and JOINT PAIN .png",
        "price":1000

    },
    {
        "id":29,
        "name":"Shekice",
        "image":"musel/Shekice.png",
        "price":7890

    },
    {
        "id":30,
        "name":"Topricin",
        "image":"musel/topricin.png",
        "price":7000

    }
]
//product array contains all the mudical devices
let product5 = [
    {
        "id":31,
        "name":"Accu-Chek Active 25 S",
        "image":"items/Accu-Chek Active 25 S.png",
        "price":5500

    },
    {
        "id":32,
        "name":"BLOOD PRESSURE MONITOR",
        "image":"items/BLOOD PRESSURE MONITOR WRIST (EASY CARE).png",
        "price":12600

    },
    {
        "id":33,
        "name":"DIGITAL SCALE",
        "image":"items/DIGITAL SCALE (MICROLIFE) WS-50A.png",
        "price":8500

    },
    {
        "id":34,
        "name":"DIGITAL THERMOMETER",
        "image":"items/DIGITAL THERMOMETER (MED ACCU).png",
        "price":1500

    },
    {
        "id":35,
        "name":"First Aid Box",
        "image":"items/First Aid Box.png",
        "price":10000

    },
    {
        "id":36,
        "name":"NEBULIZER",
        "image":"items/NEBULIZER NEC 101 (OMRON).png",
        "price":9600

    },
    {
        "id":37,
        "name":"hearing items",
        "image":"items/hearing items.png",
        "price":75000

    },
    {
        "id":38,
        "name":"STETHSCOPE",
        "image":"items/MEDI - MYK STETHSCOPE.png",
        "price":6700

    }
]
let cart = [];// array to store items added to the cart
let totalPriceCount = 0//variable to get the total of items
let count = 0//variable to count the cart value 

icon.addEventListener('click', () => {//eventlisener to toggle cart display
    body.classList.toggle('showing-cart-page');
});

closecart.addEventListener('click', () => {//eventlisener to toggle cart display
    body.classList.toggle('showing-cart-page');
});

document.querySelector('.Check-out').addEventListener('click', function() {//direct to form page
    window.location.href = 'form/form.html';
});


function heartItems(){//create a function to display the heart medicines
    if (product.length > 0) {//if there are heart medicines in product list
        product.forEach(Product => {//loop through each product
            let newproduct = document.createElement('div');//create a new div for the product
            newproduct.classList.add('heart');//give class name for that div
            newproduct.dataset.id = Product.id;//add data set for product identification
            newproduct.innerHTML = `
                <img src="${Product.image}" alt="${Product.name}">
                <h3>${Product.name}</h3>
                <div class="price">Rs.${Product.price}</div>
                <button class="add-to-cart">Add to cart</button>
            `;//write html content for each product
            product_list.appendChild(newproduct);//append each product to the heart-medicine 
        });
    }
}  

function eyeItems(){//create a function to display the eye medicines
    if (product2.length > 0) {//if there are heye medicines in product2 list
        product2.forEach(Product2 => {//loop through each product in product2 list
            let newproduct2 = document.createElement('div');//create a new div for the product2
            newproduct2.classList.add('Eye');//give class name for that div
            newproduct2.dataset.id = Product2.id;//add data set for product identification
            newproduct2.innerHTML = `
                <img src="${Product2.image}" alt="${Product2.name}">
                <h3>${Product2.name}</h3>
                <div class="price">Rs.${Product2.price}</div>
                <button class="add-to-cart">Add to cart</button>
            `;//write html content for each product
            eye_list.appendChild(newproduct2);//append each product to the eye-medicine 
        });
    }
}

function diabeticItems(){//create a function to display the diabetic medicines
    if (product3.length > 0) {//if there are heart medicines in product3 list
        product3.forEach(Product3 => {//loop through each product in prodcut3 list
            let newproduct3 = document.createElement('div');//create a new div for the product
            newproduct3.classList.add('diabatic');//give class name for that div
            newproduct3.dataset.id = Product3.id;//add data set for product identification
            newproduct3.innerHTML = `
                <img src="${Product3.image}" alt="${Product3.name}">
                <h3>${Product3.name}</h3>
                <div class="price">Rs.${Product3.price}</div>
                <button class="add-to-cart">Add to cart</button>
            `;//write html content for each product
            diabatic_list.appendChild(newproduct3);//append each product to the diabetic-medicine 
        });
    }
}

function muscleItems(){//create a function to display the muscle medicines
    if (product4.length > 0) {//if there are heart medicines in product4 list
        product4.forEach(Product4 => {//loop through each product in product4 list
            let newproduct4 = document.createElement('div');//create a new div for the product
            newproduct4.classList.add('muscle');//give class name for that div
            newproduct4.dataset.id = Product4.id;//add data set for product identification
            newproduct4.innerHTML = `
                <img src="${Product4.image}" alt="${Product4.name}">
                <h3>${Product4.name}</h3>
                <div class="price">Rs.${Product4.price}</div>
                <button id="add" class="add-to-cart">Add to cart</button>
            `;//write html content for each product
            muscle_list.appendChild(newproduct4);//append each product to the muscle-medicine 
        });
    }
}

function mediItems(){//create a function to display the medicine-items
    if (product5.length > 0) {//if there are heart medicines in product5 list
        product5.forEach(Product5 => {//loop through each product in product5 list
            let newproduct5 = document.createElement('div');//create a new div for the product
            newproduct5.classList.add('devices');//give class name for that div
            newproduct5.dataset.id = Product5.id;//add data set for product identification
            newproduct5.innerHTML = `
                <img src="${Product5.image}" alt="${Product5.name}">
                <h3>${Product5.name}</h3>
                <div class="price">Rs.${Product5.price}</div>
                <button class="add-to-cart">Add to cart</button>
            `;//write html content for each product
            medi_list.appendChild(newproduct5);//append each product to the medicine-items
        });
    }

}

function addProducts(){//add all product items into one function
    heartItems()
    eyeItems()
    diabeticItems()
    muscleItems()
    mediItems()
}
addProducts()//call all functions in addProducts to display

const addToCart = (productId,productImage,productName,productPrice) => {//adding product to the cart
    
    const productIndex = cart.findIndex(item => item.productId === productId);//see there any product is already in the cart
    
    if (productIndex === -1) {//if product is not in cart then add it ,if there's a one then increase the quantity
        cart.push({ productId: productId, quantity: 1,image: productImage,productName: productName,productPrice:productPrice});
    } else {
        cart[productIndex].quantity++;
    }
    reloadCart()//reload the cart display
    updateCartCount();//update the count in the cart
};

const updateCartCount = () => {//function to update the count in displayed
    list_cart_span.textContent = cart.reduce((total, item) => total + item.quantity, 0);//update the total quantity of the items in the cart
};

function reloadCart(){//function to reload the items in the cart
    count = 0//get the count value to 0
    list_cart.innerHTML = '';//clear if there somthing writen 
    cart.forEach((value,key) => {
        let newDiv = document.createElement('div');//create a div for item

        newDiv.classList.add("item")//give a class named 'item' to the div
        newDiv.dataset.id = newDiv.id;
        newDiv.innerHTML = 
        `
        <div class="medicine-image">
            <img src="${value.image}" alt="">
        </div>
        <div class="medi-name">${value.productName}</div>
            <div class="totalPrice">Rs:${parseInt(value.productPrice) * value.quantity}</div>
            <div class="quantity">
                <span onclick="reduceCount(${key})" class="decrees"><</span>
                <span id="quantity">${value.quantity}</span>
                <span onclick="increaseCount(${key})" class="increes">></span>
            </div>
        
        `
        count += parseInt(value.productPrice) * value.quantity//update the total price count
        totalPrice.textContent = count

        list_cart.appendChild(newDiv)//append items to cart to display 
    })
}

function increaseCount(key){//function to create increase quantity
    cart[key].quantity++;//increase the quantity of the specific item
    const quantitySpan = document.getElementById(`quantity`);//update the quantity 
    quantitySpan.innerHTML = cart[key].quantity;
    
    updateCartCount();//call the funtion to upadte the cart
    reloadCart();//call the funtion to reload the cart
}

function reduceCount(key){//function to redeuce the quantity of the product
    if(cart[key].quantity <= 1){//if quantity less than 1 
   
        cart.splice(key,1);//remove the item from the cart
        totalPrice.textContent = "0"//then reset the total price 

        updateCartCount();//update the cart count


    }else{//not less than 1, decrease the quantity
        cart[key].quantity--;//decrease the quantity
        const quantitySpan = document.getElementById(`quantity`);
        quantitySpan.innerHTML = cart[key].quantity;//update quantity display
        
        updateCartCount();//upate the cart count
    }    

    reloadCart()//reload the cart display
}

document.addEventListener('click', (event) => {//event listner to handle to click on the add-to-cart button
    const clickedElement = event.target;
    if (clickedElement.classList.contains('add-to-cart')) {//when click on the add to cart .then add specific item to cart
        const productDiv = clickedElement.parentElement;//Get the parent element of the clicked button, assumed to be the product container
        const productId = clickedElement.parentElement.dataset.id;//Extract the product ID from the 'data-id' attribute of the product container
        const productImage = productDiv.querySelector('img').src;//ind the <img> element within the product container and get its source URL
        const productName = productDiv.querySelector('h3').textContent;/*Find the <h3> element within the product container and get its text
        content, assumed to be the product name*/
        const productPriceText = productDiv.querySelector('.price').textContent;/*Find the element with class 'price' within
         the product container and get its text content, assumed to be the product price*/
        
        const productPrice = parseFloat(productPriceText.replace('Rs.', '').trim());
        
        addToCart(productId,productImage,productName,productPrice);//add the products to the cart
    }
});
