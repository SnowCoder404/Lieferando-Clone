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
    checkIfMealinArray(index);
    for (let i = 0; i < mealArray.length; i++) {
        if (addMultipleMeals) {
            let quantity = addMealToList(i);
            document.getElementById("mealList").innerHTML = "";
            document.getElementById("mealList").innerHTML += addMeal(mealArray[i], mealArrayPrice[i], i, quantity);  
        }else {
            let quantity = 1;
            document.getElementById("mealList").innerHTML += addMeal(mealArray[i], mealArrayPrice[i], i, quantity);  
        }
    }
}

function checkIfMealinArray(index) {
    // The function has errors and is not finish for deployment
    let indexOfMeal = mealArray.indexOf(myDishes[index].name);
    if(indexOfMeal != 0) {
        mealArray.push(myDishes[index].name);
        mealArrayPrice.push(myDishes[index].price)
    } else {
        addMultipleMeals = true;        
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

function addMealToList(i) {
    document.getElementById("quantity" + i).innerText = parseInt(document.getElementById("quantity" + i).innerText) +  1;
    return parseInt(document.getElementById("quantity" + i).innerText);
}

function deleteMeal(index) {
    mealArray.pop(index);
}