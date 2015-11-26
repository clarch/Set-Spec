//Create class Set to manipulate sets
function Set(array) {
	this.data = array;
}

//Get the cardinality length of the array
Set.prototype.cardinality = function() {
	return this.data.length;
};

//Funtion to create union of sets
Set.prototype.union = function (y) {
	var obj = {};
	for (var i = 0; i < this.data.length; i++) { 
     	obj[this.data[i]] = this.data[i]; // stores each value in x in the object obj
  	}
  	for (var i = 0; i < y.length;  i++) {
     	obj[y[i]] = y[i]; // stores each value in y in the object obj
  	}
  	var res = []; 
  	for (var k in obj) {
    	if (obj.hasOwnProperty(k))  // 
      		res.push(obj[k]); // pushes every element that returns true to res array
  	}
  	var result = new Set(res); // returns the values in res array

    return result;
};

//Gets common values in two arrays and pushes them to a new array
Set.prototype.intersect = function(x) {
    var temp = [];
     for (var i = 0; i < this.data.length; i++) { 
        for (var j = 0; j < x.length; j++) {
            if (this.data[i] === x[j]) {
                temp.push(this.data[i]);
            }
        }
    }
    var result = new Set(temp);  //appends the values of temp[] as a set

    return result;              //Returns the 
};

//checks if the given set is a subset of another
Set.prototype.subset = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (this.data.indexOf(arr[i]) === -1) {
            return false; // returns false if the elements in the second array does not match any element in the first array
        }
    }
    return true;  //Returns true if every element in the second set is in the first set
};

// Returns every element in the first set that is not on the second set 
Set.prototype.complement = function (y) { 
  var arr = [];
  for (var i= 0; i < this.data.length; i++) {   
      if (y.indexOf(this.data[i]) === -1 ) {
        arr.push(this.data[i]); //appends the items from the first array that are not equal to any item in the second array to a new array
      }
  }
  var result = new Set(arr); // returns the values in res array as a set

    return result;          //returns the result in a set
};

// Matches every item in one array with every element in another array and 
//returns a nested array
Set.prototype.cartesianProduct = function (y) { 
  var arr = [];                                   
  for (var i= 0; i < this.data.length; i++) { 
    for (var j = 0; j < y.length; j++) {      
      arr.push([this.data[i], y[j]]);   //pushes an array of two values from set a and set b into an array
    }
  }
  
  return arr;                          //returns the nested array arr;  
}
