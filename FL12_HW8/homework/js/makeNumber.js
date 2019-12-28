function makeNumber(str) {
    let number = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            number = number + str[i];
        }
    }

    return number;
}

makeNumber('erer384jj4444666888jfd123');