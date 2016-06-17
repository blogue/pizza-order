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

  $("#add-pizza").click(function(){
    var customer = $("#user-name").val();
    return newPizzaOrder = new Order(customer);

  });

  $("#show-total").click(function(){
     console.log(newPizzaOrder.calculateTotal());
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
    $('#order-total').text(newPizza.price);
    $('#pizza-size').text(newPizza.size);
    newPizza.toppings.forEach(function(topping){
    $("#your-toppings").append("<li>" + topping + "</li>")
    });


  });
});
