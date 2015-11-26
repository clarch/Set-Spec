$(document).ready(function() {
 
  var set2 = $('set_2').val();

  $('#card').on("click", function() {

     var set1 = $('#set_1').val().trim().split(",");
      
      var set_1 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });

      var set_one = new Set(set_1);
            
    $("#newSet").val(set_one.cardinality());
  });

  $('#union').on("click", function() {
    var set1 = $('#set_1').val().trim().split(",");
    var set2 = $('#set_2').val().trim().split(",");

      var set_1 = [];
      var set_2 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
      set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

      var setOne = new Set(set_1);
      var setTwo = new Set(set_2);

      var result = setOne.union(set_2);
      console.dir(result.data);
    $("#newSet").val(result.data);
  });

});

$('#subset').on("click", function() {
    var set1 = $('#set_1').val().trim().split(",");
    var set2 = $('#set_2').val().trim().split(",");

      var set_1 = [];
      var set_2 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
      set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

      var setOne = new Set(set_1);
      var setTwo = new Set(set_2);

      var result = setOne.subset(set_2);
    $("#newSet").val(result);
  });

$('#intersect').on("click", function() {
    var set1 = $('#set_1').val().trim().split(",");
    var set2 = $('#set_2').val().trim().split(",");

      var set_1 = [];
      var set_2 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
      set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

      var setOne = new Set(set_1);
      var setTwo = new Set(set_2);

      var result = setOne.intersect(set_2);
    $("#newSet").val(result.data);
  });

$('#complement').on("click", function() {
    var set1 = $('#set_1').val().trim().split(",");
    var set2 = $('#set_2').val().trim().split(",");

      var set_1 = [];
      var set_2 = [];

      set1.forEach(function (num) {
        set_1.push(parseInt(num));
      });
      set2.forEach(function (num) {
        set_2.push(parseInt(num));
      });

      var setOne = new Set(set_1);
      var setTwo = new Set(set_2);

      var result = setOne.complement(set_2);
    $("#newSet").val(result.data);
  });

$('#cartesian').on("click", function() {
    var set1 = $('#set_1').val().trim().split(",");
    var set2 = $('#set_2').val().trim().split(",");

	  var set_1 = [];
	  var set_2 = [];

	  set1.forEach(function (num) {
	    set_1.push(parseInt(num));
	  });
	  set2.forEach(function (num) {
	    set_2.push(parseInt(num));
	  });

	  var setOne = new Set(set_1);
	  var setTwo = new Set(set_2);

	  var result = setOne.cartesianProduct(set_2);	
	  var finalString = "";
	  for(var i = 0; i < result.length; i++) {
	  	var temp = result[i].toString();
	  	finalString += "[ " + temp + " ] ";
	  }
	  finalString = "[ " + finalString + "]";
    $("#newSet").val(finalString);
  });