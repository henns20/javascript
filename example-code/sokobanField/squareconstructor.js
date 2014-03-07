// sokoban requires the Square constructor that: 1) takes the character received by the level text array and sets the image and content name accordingly to the new instance. 2) dynamically set the content using a property identifier construct


function Square(character, img) {
  this.img = img;
  var content = {"*": "exit", "@": "Player", "#": "wall", "o": "boulder"}[character];
  
  if (content === null)
  throw new Error("Unrecognized character: '" + character + "'" );
  // if the character has a match
  this.setContent(content);
}

Square.prototype.setContent = function (content) {

this.img.src = "/sokoban-images/" + content + ".png"; 
this.content = content;

};


// can you do a switch case statement in var content - here is something that can be worked in to it as well.

var content = function(character) {
  var x = character;
  switch(x){
    case "*":
     x = "exit";
      break;
    case "#":
     x = "wall";
     break;
    default: 
      x = false;
  }
  return x;
};


console.log(content("*"));
