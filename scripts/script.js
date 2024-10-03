let basket = [

]


function toggleMenu() {
    document.getElementById("shoppingCart").classList.toggle("d_none")
    document.getElementById("contentDiv").classList.toggle("j_c_c");
}

function loadTemplate() {
    content = document.getElementById("mainContent");
    for (let index = 0; index < myDishes.length; index++) {
        content.innerHTML += templateHTML(index);
    }
}

function addMealToShppingCart(index) {
    calculateTotalPrice(index);
    checkIfMealinArray(index);
    emptyInnerHtml("mealList");
    document.getElementById("buy").classList.remove("d_none");
    document.getElementById("eatDeliver").classList.add("d_none");
    document.getElementById("shoppingCartButtonId").classList.add("d_none");
    document.getElementById("totalPriceSpan").classList.remove("d_none");
    for (let i = 0; i < basket.length; i++) {
        document.getElementById("mealList").innerHTML += addMeal(i);  
    }
}

function emptyInnerHtml(obj){
    document.getElementById(obj).innerHTML = "";
}

function checkIfMealinArray(index) {
    let number = 0;
    for (let i = 0; i < basket.length; i++) {
        if (myDishes[index].name == basket[i].meal) {
            basket[i].quantity = basket[i].quantity + 1;
            break;
        }else {
            number = number + 1;
        }
    }
    if (number > 0) {
        pushMealsToArray(index);
    }
}

function calculateTotalPrice(index) {
    let totalPrice = document.getElementById("totalPrice");
    let singlePrice = myDishes[index].price;
    hideContentAndShoppingCart();
    if (totalPrice.innerText != "") {
        let totalPriceInt = singlePrice + parseFloat(totalPrice.innerText, 10);  
        totalPrice.innerText = totalPriceInt.toFixed(2) + " €";
    }else {
        totalPrice.innerText = singlePrice + " €";
    }
}

function hideContentAndShoppingCart() {
    document.getElementById("contentDiv").classList.remove("j_c_c");
}

function deleteMeal(index) {
    basket[index].quantity = basket[index].quantity - 1;
    if (basket[index].quantity <= 0) {
        removeMeals(index);
        emptyInnerHtml("mealList");
        for (let i = 0; i < basket.length; i++) {
            document.getElementById("mealList").innerHTML += addMeal(i);
        }
    }else {
        document.getElementById("quantity" + index).innerHTML = basket[index].quantity;   
        deleteMealFromInvoice(basket[index].price);
    }
}

function deleteMealFromInvoice(deleteMoney) {
    let totalPrice = document.getElementById("totalPrice");
    let totalPriceInt = parseFloat(totalPrice.innerText, 10) - parseFloat(deleteMoney, 10);  
    totalPrice.innerText = totalPriceInt.toFixed(2) + " €";
}

function addMoreEat(index) {
    basket[index].quantity = basket[index].quantity + 1;
    emptyInnerHtml("mealList");
    for (let i = 0; i < basket.length; i++) {
        document.getElementById("mealList").innerHTML += addMeal(i);
    }
    raiseTotalPrice(basket[index].price);
}

function raiseTotalPrice(float) {
    let totalPrice = document.getElementById("totalPrice");
    let totalPriceInt = parseFloat(totalPrice.innerText, 10) + parseFloat(float, 10);
    totalPrice.innerText = totalPriceInt.toFixed(2) + " €";  
}

function removeMeals(index) {
    let deleteMeal = basket.splice(index, 1)
    deleteMoney = deleteMeal.price;
    deleteMealFromInvoice(deleteMoney);
}

function pushMealsToArray(index) {
    let obj = {
        "meal": myDishes[index].name,
        "price": myDishes[index].price,
        "quantity": 1
    }
    basket.push(obj);
}

function headerMenuToggle() {
    headerLinks = document.getElementsByClassName("headerLinks");
    for (let index = 0; index < headerLinks.length; index++) {
        headerLinks[index].classList.toggle("width_120");
    }
}

function toogleResponsivShoppingMenu() {
    document.getElementById("shoppingCart").classList.toggle("d_none");
    document.getElementById("shoppingCartButtonId").classList.toggle("d_none");   
}

function shoppingCartEmpty() {
    emptyInnerHtml("mealList");
    emptyInnerHtml("totalPrice");
    document.getElementById("eatDeliver").classList.remove("d_none");
    document.getElementById("totalPriceSpan").classList.add("d_none");
    document.getElementById("buy").classList.add("d_none");
    basket = {};
}
