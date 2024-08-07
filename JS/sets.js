// Sets are typcially used to check for the presence of an item
//ES6 has a built in set object, but it does not contain all the methods that are common to sets

function mySet(){
    //the variable collection will hold the set
    var collection = [];
    //this method will check for the presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1); //if the element is not in the collection return '-1'
    };

    //this method will return all the values in the set
    this.values = function(){
        return collection;
    };

    //this method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){ //Check if the element is in the set already
            collection.push(element); //if not add it
            return true;
        }
        return false;
    };

    this.remove = function(element){// In the ES6 set, instead of 'remove' we would call 'delete'
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        };
        return false;
    };
    //this will return the size of the collection
    this.size = function(){// In the ES6 set, size is not a method, it is a property. No parenthesis after calling it.
        return collection.length;
    };

//The following methods are not in the ES6 implementation of sets

    //this method will return the union of two sets
    this.union = function(otherSet){ //combine the sets and leave out any duplicates
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    }

    //this method will return the intersection of two setsas a new set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    ;}

    // This method will return the difference of two sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){//'every' test if all the elements in the array pass the test in the provided function
            return otherSet.has(value);
        });
    };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));//is every item in set A in set B?
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("q");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));// with the ES6 implementation, will not return true or false, waht it will return is the set itself
