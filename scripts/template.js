function templateHTML(index) {
    return `<div id="eat">
                <div id="eatDiv">    
                    <span">${myDishes[index].name}</span><br>
                    <span">${myDishes[index].price}</span><br>
                    <span">${myDishes[index].description}</span><br>
                </div>        
            </div>`;
}