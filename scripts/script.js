let mealArray = [];
let mealArrayPrice = [];
let addMultipleMeals = false;

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
    document.getElementById("mealList").innerHTML = "";
    checkIfMealinArray(index);
    for (let i = 0; i < mealArray.length; i++) {
        document.getElementById("mealList").innerHTML += addMeal(mealArray[i], mealArrayPrice[i], i);  
        if (addMultipleMeals) {
            document.getElementById("quantity" + index).innerText = parseInt(document.getElementById("quantity" + index).innerText) + 1;
        }
    }
}

function checkIfMealinArray(index) {
    let indexOfMeal = mealArray.indexOf(myDishes[index].name);
    if(indexOfMeal != 0) {
        mealArray.push(myDishes[index].name);
        mealArrayPrice.push(myDishes[index].price)
    } else {
        addMultipleMeals = true;     // i++
   }      
}

function calculateTotalPrice(index) {
    let totalPrice = document.getElementById("totalPrice");
    let singlePrice = myDishes[index].price;
    document.getElementById("shoppingCart").classList.remove("d_none");
    document.getElementById("contentDiv").classList.remove("j_c_c");
    if (totalPrice.innerText != "") {
        let totalPriceInt = singlePrice + parseFloat(totalPrice.innerText, 10);  
        totalPrice.innerText = totalPriceInt.toFixed(2) + " €";
    }else {
        totalPrice.innerText = singlePrice + " €";
    }
}

function deleteMeal(index) {
    mealArray.pop(index);
}