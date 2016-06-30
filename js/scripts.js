function Order(name) {
  this.name = name;
  this.pizzasAdded = [];
  this.address = [];
  this.total = 0;
}

function Pizza(size){
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.calculateCost = function(){
  if (this.size === "small") {
    this.price += 5.99;
  } else if (this.size === "medium") {
    this.price += 8.99;
  } else  {
    this.price += 10.99;
  }
  this.price += this.toppings.length * 1.25;
  }


Order.prototype.calculateTotal = function(){
  for (i=0; i < this.pizzasAdded.length; i++)
  this.total += this.pizzasAdded[i].price;
}

$(document).ready(function(){
  var newPizzaOrder;
  $("#delivery").click(function(){
    var customer = $("#user-name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();

    if (customer === "" || customer === null) {
      alert("Please enter a name!");
    } else if (street === "" || street === null) {
      alert("Please enter a street!");
    } else if (city === "" || city === null) {
      alert("Please enter a city!");
    } else if (state === "" || state === null) {
      alert("Please enter a state!");
    } else {
      newPizzaOrder = new Order(customer);
      newPizzaOrder.address.push(street);
      newPizzaOrder.address.push(city);
      newPizzaOrder.address.push(state);
      $("#user-information").hide();
      $("#delivery").hide();
      $("#pizza-details").show();
      $(".menu-buttons").show();
    }
  });

  $("#show-total").click(function(){
    newPizzaOrder.calculateTotal();
     $("#output").prepend("<h3>Thanks for your order, "
                  + newPizzaOrder.name + "!<br>"
                  + "Your total is: $" + newPizzaOrder.total + "</h3>");
     $("#output").append("<h3>Delivery address: " + newPizzaOrder.address + "<br>"
     +"You can expect your order within 45 minutes!" + "</h3>");
        $("#pizza-details").hide();
        $("button").hide();
  });

  $("#place-order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[name='size']:checked").val();
    var newPizza = new Pizza(pizzaSize);
    $('input[name="topping"]:checked').each(function() {
       newPizza.toppings.push(this.value);
    });
    newPizza.calculateCost();
    newPizzaOrder.pizzasAdded.push(newPizza);

    $("#output").show();
    $("#output").prepend("<h3>Added to order: " + newPizza.size + " pizza.<br>"
            + "Toppings: " + newPizza.toppings + "<br>"
            + "Item price: $" + newPizza.price + "</h3>");
    $("#place-order")[0].reset();
  });
});
