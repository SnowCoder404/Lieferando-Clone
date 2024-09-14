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

function addMeal(mealName, mealPrice, i) {
    return  `<div style="display: flex; align-items: center; gap: 6px; flex-direction: column;">
                <div style="display: flex; gap: 20px;">
                    <span>${mealName}</span>
                    <span>${mealPrice} €</span>
                </div>  
                <div style="display: flex; align-items: center; gap: 18px;">
                    <button class="btn" onclick="addMealToList(${i})">-</button>
                    <span id="quantity${i}">1</span>
                    <button class="btn" onclick="addMealToList(${i})">+</button>
                </div>
            </div>
            <div style="display: flex; gap: 36px; align-items: center;">
                                                                    
            </div>`;
}