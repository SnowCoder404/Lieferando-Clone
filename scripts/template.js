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