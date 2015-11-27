// Create class Set to manipulate sets
function Set(array) {
	this.data = array;
}

// Get the cardinality length of the array
Set.prototype.cardinality = function() {
	return this.data.length;
};

// Funtion to create union of sets
Set.prototype.union = function (y) {
	var obj = {};
	for (var i = 0; i < this.data.length; i++) { 
      // Stores each value in x in the object obj
     	obj[this.data[i]] = this.data[i]; 
  	}

  	for (var i = 0; i < y.length;  i++) {
      // Stores each value in y in the object obj
     	obj[y[i]] = y[i]; 
  	  var res = [];
    } 

  	for (var k in obj) {
    	if (obj.hasOwnProperty(k)) { 
          // Pushes every element that returns true to res array
      		res.push(obj[k]); 
  	}
    // Returns the values in res array
  	var result = new Set(res); 
   }
    return result;
};

// Gets common values in two arrays and pushes them to a new array
Set.prototype.intersect = function(x) {
    var temp = [];
     for (var i = 0; i < this.data.length; i++) { 
        for (var j = 0; j < x.length; j++) {
            if (this.data[i] === x[j]) {
                temp.push(this.data[i]);
            }
        }
    }

    // Appends the values of temp[] as a set
    var result = new Set(temp);  
    return result;              
};

// Checks if the given set is a subset of another
Set.prototype.subset = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (this.data.indexOf(arr[i]) === -1) {
            // Returns false if the elements in the second array does not match any element in the first array
            return false; 
        }
    }

    // Returns true if every element in the second set is in the first set
    return true;  
};

// Returns every element in the first set that is not on the second set 
Set.prototype.complement = function (y) { 
  var arr = [];
  for (var i = 0; i < this.data.length; i++) {   
      if (y.indexOf(this.data[i]) === -1 ) {
        // Appends the items from the first array that are not equal to any item in the second array to a new array
        arr.push(this.data[i]); 
      }
  }

  // Returns the values in res array as a set
  var result = new Set(arr); 
  // Returns the result in a set
  return result;          
};

// Matches every item in one array with every element in another array and returns a nested array
Set.prototype.cartesianProduct = function (y) { 
  var arr = [];                                   
  for (var i = 0; i < this.data.length; i++) { 
    for (var j = 0; j < y.length; j++) { 
      // Pushes an array of two values from set a and set b into an array     
      arr.push([this.data[i], y[j]]);   
    }
  }

  // Returns the nested array arr;
  return arr;                            
};
