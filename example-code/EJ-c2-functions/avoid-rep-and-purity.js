// the zeropadding is used as an example for avoid repetition and purity 
// the purity comes into play when - not including the print statement - rather the zeropadding - just adds zeroes to single digit #'s ... if need to print - make a print funciton and do something like printIt(zeroPadding());


//THE FUNCTION

// 1. takes and number as an argument and returns it with zero in front of it if it is single digit. 

// my function that I came up with 
function zP (num){
  
  theNum = (num < 10 && num > -10) ? "0" + num : "" + num;
  
  
  return  theNum; 
}

console.log(zP(5));

}


// THIS IS THE EXAMPLE FROM THE BOOK

function zeroPad (number, width) {
  string= String(Math.round(number)); 
  while (string.length < width) {
  string = "0" + string; 
  }
  return string;
}

console.log(zeroPad(6, 10)); // "0000000006"
