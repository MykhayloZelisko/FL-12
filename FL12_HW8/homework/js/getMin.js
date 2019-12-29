function getMin(x) {
    let min = x;
    
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }

    return min;
}

getMin(1, -2, 3, -10);