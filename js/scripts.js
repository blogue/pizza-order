function Pizza(size, price){
  this.size = size;
  this.toppings = [];
  this.price = price;
}

Pizza.prototype.price = function(){
  if (this.size === "small") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 8;
  } else  {
    this.price += 10;
  }
}

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#blank").val());

    var output = "";

    $('#output').text(output);

  });
});
