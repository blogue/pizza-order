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


$(document).ready(function(){

  $("#add-pizza").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[name='size']:checked").val();
    var newPizza = new Pizza(pizzaSize);
    // console.log($('input[name="topping"]:checked').serialize());

    $('input[name="topping"]:checked').each(function() {
       newPizza.toppings.push(this.value);
    });

    newPizza.calculateCost();

    $('#order-total').text(newPizza.price);
    $('#pizza-size').text(newPizza.size);
    newPizza.toppings.forEach(function(topping){
      $("#your-toppings").append("<li>" + topping + "</li>")
    });

  });
});
