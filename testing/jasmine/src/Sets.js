function Set(arr) {
	this.data = arr;	
};

// Set.prototype.cardinality = function () {
// 	return this.data.length;
// };

Set.prototype.add = function() { //adds array to the set
    return this.data;
};

// Set.prototype.remove = function() { //removes all elements from the set
//     return this.data.splice();
// };

Set.prototype.union = function (x, y) {
	var obj = {};
	for (var i = 0; i < this.data.length; i++) { 
     	obj[x[i]] = x[i]; // stores each value in x in the object obj
  	}
  	for (var i = 0; i < y.length;  i++) {
     	obj[y[i]] = y[i]; // stores each value in y in the object obj
  	}
  	var res = []; 
  	for (var k in obj) {
    	if (obj.hasOwnProperty(k))  // 
      		res.push(obj[k]); // pushes every element that returns true to res array
  	}
  	return res; // returns the values in res array
};

// Set.prototype.intersection = function (x, y) { // find the intersection of sets
// 	for (var i= 0; i < x.length; i++) {
// 		x[i];
// 		var arr = [];
// 		if (x[i] === y[i]) {
// 			arr.push(x[i]);
// 		}
// 		return arr;
// 	}
// 	for (var i = 0; i < y.length; i++) {
// 		y[i];
// 		var arr = [];
// 		if (x[i] === y[i]) {
// 			arr.push(x[i]);
// 		}
// 		return arr;
// 	}
// 	var arr = [];
// 	if (x[i] === y[i]) {
// 		arr.push(x[i]);
// 	}
// 	return arr;
// };
// Sets.prototype.Subsets = function (x, y) { // Determine whether x is a subset of y
// 	for (var i= 0; i < x.length; i++) {		
// 		for (var i = 0; i < y.length; i++) {
// 			if (x[i] === y[i]) {
				
// 			}
// 		}
// 		return "Array" + " " + x + " " + "is a subset of array" + " " + y  ;
// 	}
// };

// Sets.prototype.cartesianProduct = function (x, y) { // Determine whether x is a subset of y
// 	var arr = [[]];
// 	for (var i= 0; i < x.length; i++) {		
// 		for (var i = 0; i < y.length; i++) {
// 			forEach (x[i]) {
// 				return (x[i], y[i]);
// 				arr.push(larger[i]);
// 			}
// 		}
// 		return arr;
// 	}
// };


// //testing

// var x = new Set([3, 5, 6, 3, 5]);

// console.log(x.data);