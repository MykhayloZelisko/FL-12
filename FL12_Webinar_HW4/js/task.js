// task 1

function maxElement(array) {
    return Math.max(...array)
}

// task 2 

function coppyArray(array) {
    return [...array]
}

// task 3

function addUniqueId(obj) {
    let newObj = {}
    const uniqueId = Symbol('uniqId');
    newObj[uniqueId] = Math.floor( Math.random()*100 );
    return Object.assign(newObj, obj);
}

// task 4

function regroupObject(obj) {
    const newObj = {};
    const {id, age, university} = obj.details;
    newObj.university = university;
    newObj.details = {
        id = id,
        firstName = obj.name,
        age = age
    }

    return newObj;
}

// task 5

function findUniqueElements(array) {
    const unique = new Set();
    array.forEach(el => unique.add(el));
    return Array.from(unique);
}

// task 6

function hideNumber(str) {
    return str.slice(-4).padStart(str.length, '*');
}

// task 7



// task 8



// task 9