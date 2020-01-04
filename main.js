function SimpleAdding(num) { 
    if (num > 1000) {
      return "Please pick a number between 1 and 1000";
    } 
    
    for (i=num-1; i>0; i--) {
      num += i;
    }
    // code goes here  
    return num; 
  
  }
     
  // keep this function call here 
  console.log(SimpleAdding(8));