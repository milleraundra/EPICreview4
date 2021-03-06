describe("PizzaOrder", function() {
  it("will capture the properties the pizza's size, sauce, meats, cheese, and toppings", function() {
  var Pizza = new PizzaOrder("large", "red", ["pepperoni", "sausage"], "mozzarella", ["bell peppers", "olives"]);
  expect(Pizza.size).to.equal("large");
  expect(Pizza.sauce).to.equal("red");
  expect(Pizza.meat).to.eql(["pepperoni", "sausage"]);
  expect(Pizza.cheese).to.equal("mozzarella");
  expect(Pizza.toppings).to.eql(["bell peppers", "olives"]);
  });

  it("calculates the price of a pizza based on size", function() {
    var Pizza = new PizzaOrder("large", "red", ["pepperoni"], "mozzarella", []);
    expect(Pizza.price()).to.equal('7.00');
  });

  it("calculates the price of a pizza based on a chosen sauce", function() {
    var Pizza = new PizzaOrder("small", "white garlic", ["pepperoni"], "mozzarella", []);
    expect(Pizza.price()).to.equal('5.35');
  });

  it("calculates the price of a pizza based on meat toppings", function() {
    var Pizza = new PizzaOrder("small", "red", ["sausage", "bacon"], "mozzarella", []);
    expect(Pizza.price()).to.equal('6.50');
  });

  it("calculates the price of a pizza based on cheese selection", function() {
    var Pizza = new PizzaOrder("small", "red", ["pepperoni"], "cheddar", []);
    expect(Pizza.price()).to.equal('5.15');
  });

  it("calculates the price of a pizza based on additional toppings", function() {
    var Pizza = new PizzaOrder("small", "red", ["pepperoni"], "mozzarella", ["green onion", "jalapeno"]);
    expect(Pizza.price()).to.equal('5.85');
  });

  it("does not adjust the price for unchecked meats", function() {
    var Pizza = new PizzaOrder("small", "red", [], "mozzarella", ["olives"]);
    expect(Pizza.price()).to.equal('5.35');
  });

  it("does not adjust the price for unchecked toppings", function() {
    var Pizza = new PizzaOrder("large", "red", ["pepperoni"], "mozzarella", []);
    // debugger;
    expect(Pizza.price()).to.equal('7.00');
  });












});
