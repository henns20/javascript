// this can be used as a template for creating modules


var basketModule = (function () {
  // private variable 
  var basket = [];
  
  function doSomethingPrivate (foo) {
    //...
  }
  

  
  function doSomethingElse() {
  //...
  }

  // Return an object exposed to the public

  return {
  
  // create a public Var
  var p = 0,
  
  //Add items to our basket
  
  addItem: function (values) {
    basket.push(values);
  },
  
  // Get the count of items in the basket
  getItemCount: function () {
    return basket.length;
  },
  
  // Public alias to a private function
  doSomething: doSomethingPrivate,
  
  // Get total value of  items in the basket
  getTotal: function () {
    var p = 0, q = this.getItemCount(),
    
    while(q--) {
    p += basket[q].price;
    }
    
    return p;
    
  };
  
  
  };


})();  


// INTERACTING WITH MODULE 
// BASKETMODULE returns an object with a public API we can use

basketModule.addItem({
  item: "bread", 
  price: 0.5
});

basketModule.addItem({
  item: "butter", 
  price: 0.3
});

basketModule.getItemCount(); // outputs 2

basketball.getTotal(); // outputs 0.8

//How ever the following will not work. 

//Outputs:underfinged
// This is because the basket itself is not exporsed as a part of our public API
console.log(basketModule.basket);

// This also won't work as it only exists within the scope of our basktModule closure, but no the returned public object.

console.log(basket);


