let k = 2;
let arr = [11, 22, 11, 11, 22, 33, 22, 33, 11]

let group = {}

//Logic
// 11: 4
// 22: 3
// 33: 2

for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if (group[value]) {
        group[value]++;
    } else {
        group[value] = 1;
    }
}
console.log("Group,", group) //Group, { '11': 4, '22': 3, '33': 2 }
let groupArr = Object.entries(group);
console.log("Group Arr: ", groupArr) //Group Arr:  [ [ '11', 4 ], [ '22', 3 ], [ '33', 2 ] ]

//a = ["11", 3]
let sortedGroup = groupArr.sort((a, b) => a[1] - b[1]);
console.log("Sorted Group: ", sortedGroup) //Sorted Group:  [ [ '33', 2 ], [ '22', 3 ], [ '11', 4 ] ]

let result = []
for(let i = 0; i< k;i++){
    result.push(sortedGroup[i])
}

console.log("Result", result) //Result [ [ '33', 2 ], [ '22', 3 ] ]