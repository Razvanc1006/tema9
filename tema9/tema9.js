const array = [11,23,45,635,321,90,-11] ;

function isOdd(value) {
    if(value % 2 === 0)
        return true;
    else return false;
}
console.log("Sunt pare");
console.log(array.every(isOdd));

console.log("Elementele array-ului");
array.forEach(element => console.log(element));

const sum = (accumulator,currentValue) => accumulator + currentValue ;
console.log("suma numerelor");
console.log(array.reduce(sum));