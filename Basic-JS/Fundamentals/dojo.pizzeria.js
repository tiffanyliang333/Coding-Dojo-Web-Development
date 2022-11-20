function pizzaOven(crust, sauce, cheese, toppings){
    var pizza={};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var crust = [
    "deep dish",
    "hand tossed",
    "thin and cripsy",
    "cauliflower",
    "gluten-free",
    "hawaiian bread"
];

var sauce = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheese = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max,min){
    return Math.floor(Math.random()*max-min)+min;
}

function randomPick(arr){
    var i=Math.floor(arr.length*Math.random());
    return arr[i];
}

function randomPizza(){
    var pizza={};
    pizza.crust=randomPick(crust);
    pizza.sauce=randomPick(sauce);
    pizza.cheese =[];
    pizza.toppings=[];
    for (var i=0; i<randomRange(5,1); i++){
        pizza.cheese.push(randomPick(cheese));
    }
    for (var i=0; i<randomRange(4,0);i++){
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}
console.log(randomPizza());