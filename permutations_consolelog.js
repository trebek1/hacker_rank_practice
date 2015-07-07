var permArr = [],
  usedChars = [];

function permute(input) {
    console.log("top input ", input)
  var i, ch;
  for (i = 0; i < input.length; i++) {
      console.log("loop");
      console.log("this is i ", i); 
      console.log("this is input length ",input.length)
      console.log("This is input before splice to define ch ", input)
    ch = input.splice(i, 1)[0];
    console.log("This is ch ",ch);
    
    usedChars.push(ch);
    console.log("this is usedChars ", usedChars); 
    if (input.length == 0) {
      console.log("This is permArr before push ",permArr); 
      permArr.push(usedChars.slice(0));
      console.log("This is permArr ",permArr); 
    
    }
    console.log("This is input before next call ",input); 
    console.log("recurse"); 
    permute(input);
    console.log("this is i before splice ",i); 
    input.splice(i, 0, ch);
    console.log("We just spliced onto input! ", "ch ", ch, "at ", i, "!");
    console.log("this is usedChars ", usedChars); 
    usedChars.pop();
    console.log("final end of loop")
    console.log("used chars is now ", usedChars)
    console.log("input ended at ", input);
    console.log("perm array at end of lop is ", permArr)
    console.log('*******************************************');
  }
  return permArr
};


console.log(JSON.stringify(permute([5,2,1])));
