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
    const newObj = { ...obj };
    newObj.uniqueId = Symbol()
    return newObj
}

// task 4

function regroupObject(obj) {
    const { name, ...rest } = obj;
    const { id, age, university } = rest.details;
    return { university: university, user: { age: age, firstName: name, id: id } };
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

function add(a, b = new Error('Missing property')) {
    if (arguments.length < 2) {
        throw b
    } else {
        return a + b
    }
}

// task 8

function getMyReposProm(url) {
    fetch(url)
        .then(response => response.json())
        .then(myInfo => {
            const myRepos = myInfo.map(item => item.name);
            console.log(myRepos);
        });
}

// task 9

async function getMyReposAs(url) {
    try {
        const request = await fetch(url);
        const myInfo = await request.json();
        const myRepos = await myInfo.map(item => item.name)
        console.log(myRepos);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}