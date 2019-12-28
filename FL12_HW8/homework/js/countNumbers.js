function makeNumber(str) {
    let number = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            number = number + str[i];
        }
    }

    return number;
}

function countNumber(str) {
    let number = makeNumber(str);
    let objCount = {};

    for (let key = 0; key <= 9; key++) {
        objCount[key] = 0;
    }

    for (let i = 0; i < number.length; i++) {
        for (let key in objCount) {
            if (key === number[i]) {
                objCount[key] += 1;
            }
        }
    }

    return objCount;
}

countNumber('erer384jj4444666888jfd123');