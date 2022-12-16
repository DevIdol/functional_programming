let arr = [11, 100, 12, 60, 8, 7];
const comparator = (x, y) => x - y;
arr.sort(comparator);
console.log("Arr Sort:", arr);

console.log("==============================");
//comparator
//===========
// == 0
// > 1
// < -1

let users = [
    {
        name: "Mg Mg",
        age: 33,
    },
    {
        name: "Ko Ko",
        age: 18,
    },
    {
        name: "Mya Mya",
        age: 25,
    },
];

const sortBy = (property) => {
    return (a, b) => {
        let result =
            a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result;
    };
};

users.sort(sortBy('age'));
console.log("Users", users)
