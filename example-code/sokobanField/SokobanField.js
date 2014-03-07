// a constructor function that creates a graphical field instance out of string of text that emulates a board.
// learned a couple of things here. 1) new objects can be created without a var name it. new Square. 2) elements of the dom are objects and can be used an manipulated as such. ie. the img changes the src property when new Space is created. 3) Good practice with iteration and creating something graphical from a text string. 

function SokobanField(level) {
  this.amountBoldersToGo = level.boulders;
  this.fieldDiv = dom("div");  // dom() is a function from eloquent js which creates a element obj
  this.squares = [];
  
  for (var y = 0; y < level.length; y++) {
  var line =  level.field[y], squareRow = [];
   for(var x = 0; x < line.length; x++) {
    var img = dom('img');
    this.fieldDiv.appendChild(img);
    squareRow.push(new Square(line.charAt(x), img));
      if(line.charAt(x) === "@")
      this.playerPosition = new Point(x, y);
   }
   this.fieldDiv.appendChild('BR');
   this.squares.push(squareRow);
  }

}

// adding methods to the constructor via the prototype

// status gives back how many boulders to go there is and if 0 or less will give a message "you won"
Sokoban.prototype.status = function() {
  
  return this.bouldersToGo + "boulder" + (this.bouldersToGO > 1 ? "'s" : "") + "to go!";

};

Sokoban.prototype.won = function() {
  return this.bouldersToGo <= 0;
};
