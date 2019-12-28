function isLeapYear(arg) {
    const newDate = new Date(arg);

    if ( !Date.parse(arg) ) {
        return 'Invalid Date';
    }
    
    if (newDate.getFullYear() % 4 === 0 || newDate.getFullYear() % 400 === 0 && newDate.getFullYear() % 100 !== 0) {
        return `${newDate.getFullYear()} is a leap year`;
    } else {
        return `${newDate.getFullYear()} is not a leap year`;
    }
}

isLeapYear('2020-01-01 00:00:00');