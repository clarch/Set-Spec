function sum(x, y) {
    // takes two numbers x, y
    // returns the sum
    // or an array
    // and returns sum of the numbers
    // in the array

    // return false for all non-numbers occuring
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != 'number') {
            if (! Array.isArray(arguments[i])) {
                    return false;
            }
        }
    }

    // return the same number if it's the only arg
    if (arguments.length == 1 &&
        ! Array.isArray(arguments[0])) {
        return x;
    }

    var sum_ = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            for (var j = 0; j < arguments[i].length; j++) {
                if (typeof arguments[i][j] != 'number') {
                    return false;
                } else {
                    sum_ += arguments[i][j];
                }
            }
        } else {
            sum_ += arguments[i];
        }
    }

    return sum_;
}
