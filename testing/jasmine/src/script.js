// Invoke the cardinality function on clicking a button
$(document).ready(function() { 
    var set2 = $('set_2').val();

    $('#card').on("click", function() {
      var set1 = $('#set_1').val().trim().split(","),      
          set_1 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });

      var set_one = new Set(set_1);            
    $("#newSet").val(set_one.cardinality());
    
});

// Invoke the union function on clicking a button
  $('#union').on("click", function() {
    var set1 = $('#set_1').val().trim().split(","),
        set2 = $('#set_2').val().trim().split(","),
        set_1 = [],
        set_2 = [];

    set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
    set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

    var setOne = new Set(set_1),
        result = setOne.union(set_2);

    $("#newSet").val(result.data);
   });

});

// Invoke the subset function on clicking a button
$('#subset').on("click", function() {
    var set1 = $('#set_1').val().trim().split(","),
        set2 = $('#set_2').val().trim().split(","),
        set_1 = [],
        set_2 = [];

    set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
    set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

    var setOne = new Set(set_1),
        result = setOne.subset(set_2);

    $("#newSet").val(result);
});

// Invoke the intersect function on clicking a button
$('#intersect').on("click", function() {
    var set1 = $('#set_1').val().trim().split(","),
        set2 = $('#set_2').val().trim().split(","),
        set_1 = [],
        set_2 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
      set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

      var setOne = new Set(set_1),
          result = setOne.intersect(set_2);

    $("#newSet").val(result.data);
});

// Invoke the complement function on clicking a button
$('#complement').on("click", function() {
    var set1 = $('#set_1').val().trim().split(","),
        set2 = $('#set_2').val().trim().split(","),
        set_1 = [],
        set_2 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
      set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

      var setOne = new Set(set_1),
          result = setOne.complement(set_2);

    $("#newSet").val(result.data);
});

// Invoke the cartesianProduct function on clicking a button
$('#cartesian').on("click", function() {
    var set1 = $('#set_1').val().trim().split(","),
        set2 = $('#set_2').val().trim().split(","),
	      set_1 = [],
	      set_2 = [];

	  set1.forEach(function (num) {
	    set_1.push(parseInt(num));
	  });

	 set2.forEach(function (num) {
	    set_2.push(parseInt(num));
	  });

	  var setOne = new Set(set_1),
	      result = setOne.cartesianProduct(set_2),	
	      finalString = "";

	  for(var i = 0; i < result.length; i++) {
	  	var temp = result[i].toString();
	  	finalString += "[ " + temp + " ] ";
	  }

	  finalString = "[ " + finalString + "]";
    $("#newSet").val(finalString);
});