var trie = function() {
    this.head = {};
};
 
trie.prototype.validate = function(word) { 
    if((word === undefined) || (word === null)) throw "The given word is invalid.";
    if (typeof word !== "string") throw "The given word is not a string";
}
 
trie.prototype.add = function(word) {
    this.validate(word);
 
    var current = this.head;
    
    console.log("This is current ", current);
 
    for (var i = 0; i < word.length; i++) { 
        if(!(word[i] in current)) {
            current[word[i]] = {};
        }
 
        current = current[word[i]]
    };
 
    current.$ = 1;  //word end marker
};

var a = new trie(); 

a.add('apple');
a.add('bananna'); 


console.log(a.head.a.p.p.l.e.$);