function Order(name) {
  this.name = name;
  this.pizzasAdded = [];
  this.total = 0;
}

function Pizza(size){
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.calculateCost = function(){
  if (this.size === "small") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 8;
  } else  {
    this.price += 10;
  }
  for (i=0; i < this.toppings.length; i++) {
    this.price += 1;
  }
}

Order.prototype.calculateTotal = function(){
  for (i=0; i < this.pizzasAdded.length; i++)
  this.total += this.pizzasAdded[i].price;
}

$(document).ready(function(){
  var newPizzaOrder;

  $("#enter-name").click(function(){
    var customer = $("#user-name").val();
    newPizzaOrder = new Order(customer);
    $("#user-information").hide();
    $("#enter-name").hide();
    $("#pizza-details").show();
    $(".menu-buttons").show();
  });

  $("#show-total").click(function(){
     console.log(newPizzaOrder.calculateTotal());
     $("#output").prepend("<h3>Thanks for your purchase, "
                  + newPizzaOrder.name + "!<br>"
                  + "Your total is: $" + newPizzaOrder.total + "</h3>");
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

    console.log(newPizzaOrder);

    $("#output").show();
    $("#output").prepend("<h3>Added to order: " + newPizza.size + " pizza.<br>"
            + "Toppings: " + newPizza.toppings + "<br>"
            + "Item price: $" + newPizza.price + "</h3>");

  });
});
