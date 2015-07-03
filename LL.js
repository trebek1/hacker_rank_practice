function LinkedList(){  
  this.head = null;
}

LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
      a = new LinkedList(); 
      a.push(5);
      a.push(10); 
      a.push(25);
      a.push(1337); 
      console.log("This is a ", a); 
      console.log(a.head.next.next.next.value); 
      
function reversesll(sll){
  
  if(!sll.head || !sll.head.next) return sll;

  var nodes=[], 
    current = sll.head;
  //storing all the nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }
    
  var reversedLL = new LinkedList();
  
  reversedLL.head = nodes.pop();
  current = reversedLL.head;
  
  var node = nodes.pop();  
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while(node){
     node.next = null;
     current.next = node;
     
     current = current.next;
     node = nodes.pop();
  }
  return reversedLL;
}
        
var yeah = reversesll(a); 

console.log("This is yeah! ", yeah); 


      