prompt("Kokia prekės kaina?");


var price = 23.07;
var PVM = 4.8447;
var priceNoPVM = 18.2253;
var minus = price - priceNoPVM;
console.log(minus.toFixed(2) + "€ ");
