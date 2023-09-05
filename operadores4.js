alert("Bienvenido al restaurante. Esta es tu cuenta");
var entrada = parseInt(prompt("Ingresar el costo de la entrada"));
var plato = parseInt(prompt("Ingresar el costo del plato fuerte"));
var postre = parseInt(prompt("Ingresar el costo del postre"));
var total = entrada + plato + postre;
var igv = total * 0.18 + total;
alert("Revise los resultados en la consola presionando F12");

console.log("El costo de la entrada es " + entrada);
console.log("El costo del plato fuerte es " + plato);
console.log("El costo del postre es " + postre);
console.log("El costo total es " + total);
console.log("El costo total mas el IGV es " + igv);

