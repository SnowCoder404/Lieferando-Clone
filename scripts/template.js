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

function addMeal(index) {
    return  `<span>${myDishes[index].name}</span>
            <div style="display: flex; gap: 36px; align-items: center;">
                <span>${myDishes[index].price} €</span>
                <span style="color: red; font-weight: bold; font-size: 32px;">X</span>                                                      
            </div>`;
}