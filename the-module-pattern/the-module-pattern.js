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
