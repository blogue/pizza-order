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
  this.toppings.map(function(){
    this.price += 1;
  })
}

$(document).ready(function(){

  $("#add-pizza").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[name='size']:checked").val();
    var newPizza = new Pizza(pizzaSize);
    console.log($('input[name="topping"]:checked').serialize());

    $('input[name="topping"]:checked').each(function() {
       newPizza.toppings.push(this.value);
    });

    console.log(newPizza.calculateCost());

    console.log(pizzaSize);
    console.log(newPizza);

    $('#output').text(output);

  });
});
