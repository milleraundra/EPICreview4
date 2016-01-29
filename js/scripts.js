function PizzaOrder(size, sauce, meat, cheese, toppings){
  this.size = size;
  this.sauce = sauce;
  this.meat = meat;
  this.cheese = cheese;
  this.toppings = toppings;
};

PizzaOrder.prototype.price = function(){
  var pizzaPrice = 5;
//Price calculation based on size
  if(this.size === "large") {
    pizzaPrice += 2;
  }else if(this.size === "medium") {
    pizzaPrice += 1;
  }
  else {}

//Price calculation based on sauce
  if(this.sauce !== "red") {
    pizzaPrice += 0.35;
  } else {}

//Price calculation based on meat
  for(var i = 0; i < this.meat.length; i++) {
    if(this.meat[i] !== "pepperoni") {
      pizzaPrice += 0.75;
    }
    else {}
  }
//Price calculation based on cheese selection

  if(this.cheese !== "mozzarella" || this.cheese !== "No cheese") {
    pizzaPrice += 0.15;
  }else{}

return pizzaPrice;

};
