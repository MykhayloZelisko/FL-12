function pipe(x) {
    let y = x;

    for (let i = 1; i < arguments.length; i++) {
        y = arguments[i](y);
    }
    
    return y;
}

pipe(2, Math.sqrt, Math.sin);