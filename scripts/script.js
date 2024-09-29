let mealObj = {
    "meal": mealArray = [],
    "price": mealArrayPrice = [],
    "quantity": mealArrayQuantity = []
}


let addMultipleMeals = false;
let quantity = 0;

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
    document.getElementById("mealList").innerHTML = "";
    document.getElementById("shoppingCartButtonId").classList.add("d_none");
    for (let i = 0; i < mealObj.meal.length; i++) {
        document.getElementById("mealList").innerHTML += addMeal(i);  
    }
}

function checkIfMealinArray(index) {
    let indexOfArray = mealObj.meal.indexOf(myDishes[index].name);
    if(indexOfArray <= 0 ) {
        pushMealsToArray(index);
        addMultipleMeals = false;
    } else {
        addMultipleMeals = true;
        mealObj.quantity[index] = mealObj.quantity[index] + 1;        
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
    document.getElementById("shoppingCart").classList.remove("d_none");
    document.getElementById("contentDiv").classList.remove("j_c_c");
}

function deleteMeal(index) {
    mealObj.quantity[index] = mealObj.quantity[index] - 1;
    if (mealObj.quantity[index] <= 0) {
        removeMeals(index);
        document.getElementById("mealList").innerHTML = "";
        for (let i = 0; i < mealObj.meal.length; i++) {
            document.getElementById("mealList").innerHTML += addMeal(i);
        }
    }else {
        document.getElementById("quantity" + index).innerHTML = mealObj.quantity[index];   
        deleteMealFromInvoice(mealObj.price[index]);
    }
}

function deleteMealFromInvoice(deleteMoney) {
    let totalPrice = document.getElementById("totalPrice");
    let totalPriceInt = parseFloat(totalPrice.innerText, 10) - parseFloat(deleteMoney, 10);  
    totalPrice.innerText = totalPriceInt.toFixed(2) + " €";
}

function addMoreEat(index) {
    mealObj.quantity[index] = parseFloat(mealObj.quantity[index]) + 1;
    document.getElementById("mealList").innerHTML = "";
    for (let i = 0; i < mealObj.meal.length; i++) {
        document.getElementById("mealList").innerHTML += addMeal(i);
    }
    raiseTotalPrice(mealObj.price[index]);
}

function raiseTotalPrice(float) {
    let totalPrice = document.getElementById("totalPrice");
    let totalPriceInt = parseFloat(totalPrice.innerText, 10) + parseFloat(float, 10);
    totalPrice.innerText = totalPriceInt.toFixed(2) + " €";  
}

function removeMeals(index) {
    mealObj.meal.splice(index, 1);
    deleteMoney = mealObj.price.splice(index, 1);
    mealObj.quantity.splice(index, 1);
    deleteMealFromInvoice(deleteMoney);
}

function pushMealsToArray(index) {
    mealObj.meal.push(myDishes[index].name);
    mealObj.price.push(myDishes[index].price);
    mealObj.quantity.push(1);
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