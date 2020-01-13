function convert() {
    const convertArr = [];

    for (let i = 0; i < arguments.length; i++) {
        switch (typeof arguments[i]) {
            case 'string': {
                convertArr.push(Number(arguments[i]));
                break;
            }
            case 'number': {
                convertArr.push(String(arguments[i]));
                break;
            }
            default: {
                convertArr.push(null);
                break;
            }
        }
    }

    return convertArr;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

function mapArray(arr, func) {
    const newArr = [];

    executeforEach(arr, function(item, i, arr) {
        newArr.push( func(item, i, arr) )
    });

    return newArr;
}

function filterArray(arr, func) {
    const newArr = [];

    executeforEach(arr, function(item, i, arr) {
        if(func(item, i, arr)) {
            newArr.push(item)
        }
    });

    return newArr;
} 

function flipOver(str) {
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

function makeListFromRange([start, end]) {
    const arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i)
    }

    return arr;
}

function getArrayOfKeys(arrOfObj, key) {
    const arrOfValue = [];

    executeforEach(arrOfObj, function(item) {
        for (let currentKey in item) {
            if (key === currentKey) {
                arrOfValue.push(item[key]);
            }
        }
    });

    return arrOfValue;
}

function substitute(arr) {
    let newArr = [];

    newArr = mapArray(arr, function(item) {
        const numberForCompare = 30;

        if (item < numberForCompare) {
            item = '*';
        }

        return item;
    });

    return newArr;
}

function getPastDay(date, numberOfDays) {
    let pastDate = new Date(date);

    pastDate.setDate(date.getDate() - numberOfDays)
    
    return pastDate.getDate();
}

function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}