
var animals = [
    { name: 'fluffy', species: 'rabbit' },
    { name: 'cinthia', species: 'turkey' },
    { name: 'bobby', species: 'fish' },
    { name: 'boobus', species: 'rabbit' },
    { name: 'rodny', species: 'turkey' },
    { name: 'taytay', species: 'fish' },
    { name: 'mamabear', species: 'rabbit' },
    { name: 'ugoslavia', species: 'turkey' },
    { name: 'chudney', species: 'fish' },
    { name: 'rebecca', species: 'rabbit' },
    { name: 'timtimtom', species: 'turkey' },
    { name: 'hidy', species: 'fish' },
]

var fish = animals.filter(function (animal) {
    return animal.species === 'fish'
})
console.log("Fish:", fish);



// var names = animals.map(function (animal) {
//     return animal.name + ' is a ' + animal.species
// })
//SAME AS 
var names = animals.map((animal) => animal.name + ' is a ' + animal.species)
console.log("All animal names:", names);


var orders = [
    { amount: 250 },
    { amount: 230 },
    { amount: 150 },
    { amount: 920 },
    { amount: 240 },
]

/* BASIC FOR 
ARRAY CONCATENATe 
var nums = []
for (let q = 0; q < orders.length; q++) {
    nums.push(orders[q].amount)
}
console.log(nums)

SUM 
// var totalAmt = 0
// for (let m = 0; m < orders.length; m++) {
//     totalAmt += orders[m].amount
// }
// console.log(totalAmt)
*/

var totalAmount = orders.reduce(function (sum, order) {
    console.log("hello", sum, order)
    return sum + order.amount
}, 0)

//ARROW FUNCTION VERSION
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount)



//MAPS

/* FOR LOOP
function doubleNums(arr) {
    const doubledN = [];
    for (let i = 0; i < arr.length; i++) {
        doubledN.push(arr[i] * 2)
    }
    return doubledN;
}
console.log(doubleNums([2, 5, 100]))
*/

// function doubleNumbers(arr) {
//     return arr.map(function(nums) {
//         // go into the array and times each number in the array * 2 
//         return nums * 2;
//     });
// }

function tripleNumbers(e) {
    return e.map((e) => e * 3)
}
console.log(tripleNumbers([10, 50, 5, 100]))

function stringItUp(s) {
    return s.map((s) => "")
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]