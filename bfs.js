 function Node(value){
 
           this.value = value
           this.left = null;
           this.right = null;
           this.level = null; 
       }
 
       Node.prototype.number = function() {
           return this.value;
       }  
 
       function BFT(node) {
 
            node.level = 1;
 
            var queue = [node];
 
            var tree = [];
 
            var current_level = node.level;
 
                while(queue.length > 0) {
 
                      current_node = queue.shift(); 
 
                      if(current_node.level > current_level) {
 
                             current_level++;
                             tree.push("\n");
                      }  
 
                      tree.push(current_node + " ");
 
                      if(current_node.left) {
                           current_node.left.level = current_level + 1; 
                           tree.push(current_node.left); 
                      }  
 
                      if(current_node.right) {
                           current_node.right.level = current_level + 1; 
                           tree.push(current_node.right); 
                      }  
                      
                }
 
             return tree.join("") 
       }