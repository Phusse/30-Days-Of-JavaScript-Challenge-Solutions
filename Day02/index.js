//level 1
let challenge =  `30 Days Of JavaScript`

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(3,6)) 

console.log(challenge.substr(3, 4))

console.log(challenge.substring(3, 21))

console.log(challenge.includes('Script'))

// split(): The split method splits a string at a specified place.
let string = '30 Days Of JavaScript'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
let firstName = 'Asabeneh'
console.log(firstName.split())  // ["Asabeneh"]
console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

let faang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(faang.split(', '))

console.log(challenge.replace('JavaScript','Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('Java')) //NO. 16