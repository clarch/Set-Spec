function fizz_buzz(num) {

 	if (isNaN(num)) {
    	return "false";
    }
    if (num % 15 === 0) {
    	return "fizzbuzz";
    }
    if (num % 3 === 0) {
    	return "fizz";
    }
    if (num % 5 === 0) {
    	return "buzz";
    }
    if (num % 5 !== 0 || num % 3 !== 0) {
    	return num;
    }

}