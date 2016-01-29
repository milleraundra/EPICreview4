describe("PizzaOrder", function() {
  it("will capture the properties the pizza's size", function() {
  var Pizza = new PizzaOrder("large");
  expect(Pizza.size).to.equal("large");
  });
});
