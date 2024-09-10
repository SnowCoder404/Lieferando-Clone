function templateHTML(index) {
    return `<div id="eat">
                <div id="eatDiv">
                    <div id="eatOrder">
                        <b><span>${myDishes[index].name}</span></b>
                        <button>+</button>  
                    </div>
                    <div>    
                        <span>${myDishes[index].description}</span>
                    </div><br>
                    <div>
                        <b><span id="price">${myDishes[index].price} €</span></b>    
                    </div>
                </div>
               </div>`;
}