function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide me a valid number"
    }
    else {
        const result = number ** 3;
        return result;
    }
}
const num = cubeNumber(10);
console.log(num);



/* secound problem */
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please provide me tow valid string data."
    }
    else {
        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
}
const math = matchFinder("JavaScript", "Code");
console.log(math);


// Problem three
function sortMaker(array) {
    if (array[0] < 0 || array[1] < 0) {
        return "Invalid Input"
    }
    else if (array[0] === array[1]) {
        return "equal"
    }
    else {
        if (array[0] > array[1]) {
            return array;
        }
        else {
            let x = array[0];
            array[0] = array[1];
            array[1] = x;
            return [array[0], array[1]]

        }
    }


}
const y = [4, 2]
const x = sortMaker(y);
console.log(x);




// number four problem

function findAddress(obj) {
    if (typeof obj !== "object") {
        return "please input object valu"
    }
    else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return street + ',' + house + ',' + society;

    }

}
const person = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}


console.log(findAddress(person));




// problem five

function canPay(changeArray, totalDue) {
if(typeof changeArray.length(0) ){
    return 'please enter array data';
}
else{
    return 'sorry'
}
// else{
//     let total = changeArray[0];
//     for (let i = 0; i < changeArray.length; i++) {
//         total += changeArray[i];
//     }
//     return total;
    


//     if (total > totalDue) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
   
}
const coin = [];
const productPrice = 10;
const pay = canPay(coin, productPrice)
console.log(pay)