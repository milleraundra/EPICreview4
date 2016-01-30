function PizzaOrder(size, sauce, meat, cheese, toppings){
  this.size = size;
  this.sauce = sauce;
  this.meat = meat;
  this.cheese = cheese;
  this.toppings = toppings;
};

PizzaOrder.prototype.price = function(){
  var pizzaPrice = 5.00;
  //Price calculation based on size
  if(this.size === "large") {
    pizzaPrice += 2.00;
  }else if(this.size === "medium") {
    pizzaPrice += 1.00;
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

  if(this.cheese === "jack" || this.cheese === "cheddar") {
    pizzaPrice += 0.15;
  }else{}

//Price calculation based on toppings
  for(var i = 0; i < this.toppings.length; i++) {
    if(this.toppings[i] === "mushrooms" || this.toppings[i] === "pineapple" || this.toppings[i] === "jalapeno") {
      pizzaPrice += 0.50;
    }
    else {
      pizzaPrice += 0.35;
    }
  }
return pizzaPrice.toFixed(2);
};

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var fullname = $("input#fullname").val();

    var size = $("#pizzaSize input[type='radio']:checked").val();
    var sauce = $("#pizzaSauce input[type='radio']:checked").val();
    var meat = [];
    $("#pizzaMeat input[type='checkbox']:checked").each(function(i) {
      meat[i] = $(this).val();});
    var cheese = $("#pizzaCheese input[type='radio']:checked").val();
    var toppings = [];
    $("#pizzaToppings input[type='checkbox']:checked").each(function(i) {
      toppings[i] = $(this).val();});

    var newPizza = new PizzaOrder(size, sauce, meat, cheese, toppings);

    $("#receipt").show();
    $(".confirmation").show();
    $("#customerName").text(fullname);
    $(".fullName").text(fullname);
    $(".orderSize").text(size);
    $(".orderSauce").text(sauce);
    $(".orderMeat").text(meat);
    $(".orderCheese").text(cheese);
    $(".orderToppings").text(toppings);
    $(".pizzaCost").text(newPizza.price());



  });
});
