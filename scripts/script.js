let mealArray = [];
let mealArrayPrice = [];

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
    document.getElementById("mealList").innerHTML = "";
<<<<<<< HEAD
    mealArray.push(myDishes[index].name);
=======
    mealArray.push(myDishes[index].name);
    mealArray.push(myDishes[index].name);
    document.getElementById("mealList").innerHTML += addMeal(index)    
>>>>>>> cc19bfb (mealName and mealPrice are arrays)
    mealArrayPrice.push(myDishes[index].price)
    for (let i = 0; i < mealArray.length; i++) {
        document.getElementById("mealList").innerHTML += addMeal(mealArray[i], mealArrayPrice[i]);  
    }
<<<<<<< HEAD
    
  
=======
>>>>>>> cc19bfb (mealName and mealPrice are arrays)
}

function deleteMeal(index) {
    mealArray.pop(index);
}