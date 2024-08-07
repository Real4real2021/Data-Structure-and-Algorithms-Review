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

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
        }
    };
}