function templateHTML(index) {
    return `<div id="eat">
                <div id="eatDiv">
                    <div id="eatOrder">
                        <b><span>${myDishes[index].name}</span></b>
                        <button onclick="addMealToShppingCart(${index})">+</button>  
                    </div>
                    <div>    
                        <span>${myDishes[index].description}</span>
                    </div>
                    <div>
                        <b><span id="price${index}" class="price">${myDishes[index].price} €</span></b>    
                    </div>
                </div>
               </div>`;
}

function addMeal(index, mealName) {
    return  `<div style="display: flex; align-items: center; gap: 6px;">
                <span>${mealName}</span>
                <span id="delete" onclick="deleteMeal(${mealName})" style="color: red; font-weight: bold; font-size: 32px;">X</span>
            </div>
            <div style="display: flex; gap: 36px; align-items: center;">
                <span>${myDishes[index].price} €</span>                                                      
            </div>`;
}