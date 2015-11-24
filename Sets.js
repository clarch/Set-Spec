function Sets () {

};

Sets.prototype.Cardinality = function (x) {
	var len = x.length; // variable len to store the length of the array x
	return len;
}

Sets.prototype.Union = function (x, y) {
	var obj = {}; 
  for (var i = 0; i < x.length; i++) { 
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

Sets.prototype.Intersection = function (x, y) { // find the intersection of sets
	for (var i= 0; i < x.length; i++) {
		x[i];
		var arr = [];
		if (x[i] === y[i]) {
			arr.push(x[i]);
		}
		return arr;
	}
	for (var i = 0; i < y.length; i++) {
		y[i];
		var arr = [];
		if (x[i] === y[i]) {
			arr.push(x[i]);
		}
		return arr;
	}
	var arr = [];
	if (x[i] === y[i]) {
		arr.push(x[i]);
	}
	return arr;
};