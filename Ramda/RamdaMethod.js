const R = require('ramda');

let obj = {
  profile: {
    address: {
      city: "Kalay"
    }
  }
}

let getCity = R.path(['profile', 'address', 'city'])(obj)
let isKalayThar = R.pathEq(['profile', 'address', 'city'], 'Kalay')(obj)

console.log("City:", getCity)//City: Kalay
console.log("KalayThar:", isKalayThar)//KalayThar: true

let another = {
  address: "Somewhere", 
  name: "Unknow",
  age: Number.POSITIVE_INFINITY
};

let clone = R.pick(['name', 'address'])(another)
console.log("Clone:", clone)//Clone: { name: 'Unknow', address: 'Somewhere' }
