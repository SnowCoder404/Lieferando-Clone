function toggleMenu() {
    document.getElementById("shoppingCart").classList.toggle("d_none")
    // document.getElementById("menu").classList.toggle("d_none")
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
    if (totalPrice.innerText != "") {
        let totalPriceInt = singlePrice + parseInt(totalPrice.innerText, 10);  
        totalPrice.innerText = totalPriceInt.toFixed(2) + " €";
    }else {
        totalPrice.innerText = singlePrice + " €";
    }
    document.getElementById("mealList").innerHTML += addMeal(index);
}