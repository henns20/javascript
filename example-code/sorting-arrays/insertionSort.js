// from codecademy  http://www.codecademy.com/groups/advanced-javascript-coders/discussions/5308a69a282ae30d5f0008c8
// the following solution was from the following web page http://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/
// the issue or the problem was to try and create a sort function without using the sort method of array

function insertSort(arr) {
  var i = 0, j, value, len = arr.length; 
    for (i; i < arr.length; i++) {
    value = arr[i]; 
  
      for (j = i - 1; j > -1 && arr[j] > value; j--) {
        arr[j + 1] = arr[j];
        
      }
      
      arr[j+1] = value; 
    }
    return arr; 
  }
