// task 1

function maxElement(array) {
    return Math.max(...array)
}

const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
console.log( maxElement(array) );

// task 2 

function copyArray(array) {
    return [...array]
}

const array1 = [1, 2, 3];
const copiedArray = copyArray(array1);
console.log(array1, copiedArray);
console.log(array1 === copiedArray);

// task 3

function addUniqueId(obj) {
    const newObj = { ...obj };
    newObj.id = Symbol()
    return newObj
}

console.log( addUniqueId({name: 123}) );

// task 4

function regroupObject(obj) {
    const { name, ...rest } = obj;
    const { id, age, university } = rest.details;
    return { university: university, user: { age: age, firstName: name, id: id } };
}

const oldObj = {
    name: 'Someone',
    details: {
        id: 1,
        age: 11,
        university: 'UNI'
    }
}

console.log( regroupObject(oldObj) );

// task 5

function findUniqueElements(array) {
    const unique = new Set();
    array.forEach(el => unique.add(el));
    return Array.from(unique);
}

const array2 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
console.log( findUniqueElements(array2) );

// task 6

function hideNumber(str) {
    return str.slice(-4).padStart(str.length, '*');
}

const phoneNumber = '0123456789';
console.log( hideNumber(phoneNumber) );

// task 7

function add(a, b = new Error('Missing property')) {
    if (arguments.length < 2) {
        throw b
    } else {
        return a + b
    }
}

console.log( add(1, 3) );
// console.log( add(1) );

// task 8

function getMyReposProm(url) {
    fetch(url)
        .then(response => response.json())
        .then(myInfo => {
            const myRepos = myInfo.map(item => item.name).sort();
            console.log(myRepos);
        })
        .catch(error => {
            console.log(`${error.name}: ${error.message}`);
        });
}

const url = 'https://jsonplaceholder.typicode.com/users';

console.log( getMyReposProm(url) );

// task 9

async function getMyReposAs(url) {
    try {
        const request = await fetch(url);
        const myInfo = await request.json();
        const myRepos = myInfo.map(item => item.name).sort();
        console.log(myRepos);
    }
    catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }
}

console.log( getMyReposAs(url) );