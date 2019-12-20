let a = prompt('Input the coefficient a of the equation ax^2+bx+c=0', 1);
let b = prompt('Input the coefficient b of the equation ax^2+bx+c=0', 0);
let c = prompt('Input the coefficient c of the equation ax^2+bx+c=0', 0);
const four = 4;
const two = 2;

if (!isNaN(parseFloat(a)) && isFinite(a) && parseFloat(a) !== 0 && 
!isNaN(parseFloat(b)) && isFinite(b) && 
!isNaN(parseFloat(c)) && isFinite(c)) {
    let d = b * b - four * a * c;
    if (d < 0) {
        console.log('No solution');
    } else {
        if (d === 0) {
            let x = - b / (two * a);
            console.log(`x=${x}`);
        } else {
            let x1 = (- b - Math.sqrt(d)) / (two * a);
            let x2 = (- b + Math.sqrt(d)) / (two * a);
            console.log(`x1=${x1}, x2=${x2}`);
        }
    }
} else {
    console.log('Invalid input data');
}