function processData(input) {

var imp = input.replace(/\n/g, " ").toLowerCase().split(" "); 
    
    var count = Number(imp[0]);
    
    for(var i=1; i<=count; i++){
        
        stringVersion = String(imp[i]);
       finalArray = stringVersion.split(""); 
       codedArray = [];
        var s = "";  
        for(var w=0; w<finalArray.length; w++){    
        codedArray[w] = finalArray[w].charCodeAt(finalArray[w]-97)   
        }
        
    
        for(var d =0; d<codedArray.length-1; d++){
            
        if(Math.abs(codedArray[d]-codedArray[d+1])!= Math.abs(codedArray[codedArray.length-1-d]-      codedArray[codedArray.length-2-d])){
            
            console.log("Not Funny");
            var s = "no"; 
            break; 
        }
     
    }
        if(s!= "no"){ console.log("Funny");};    

     
 }
    
} 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});