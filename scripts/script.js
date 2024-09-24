let mealArray = [];
let mealArrayPrice = [];
let mealArrayQuantity = [];
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
    for (let i = 0; i < mealArray.length; i++) {
        if (addMultipleMeals) {
            document.getElementById("mealList").innerHTML += addMeal(mealArray[i], mealArrayPrice[i], i, mealArrayQuantity[i]);
        }else {
            document.getElementById("mealList").innerHTML += addMeal(mealArray[i], mealArrayPrice[i], i, mealArrayQuantity[i]);  
        }
    }
}

function checkIfMealinArray(index) {
    let indexOfArray = mealArray.indexOf(myDishes[index].name);
        if(indexOfArray < 0 ) {
            mealArray.push(myDishes[index].name);
            mealArrayPrice.push(myDishes[index].price)
            mealArrayQuantity[index] = 1;
            addMultipleMeals = false;
        } else {
            addMultipleMeals = true;
            mealArrayQuantity[index] = mealArrayQuantity[index] + 1;        
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