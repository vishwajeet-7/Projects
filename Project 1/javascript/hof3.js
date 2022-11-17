
let nums = [1,2,3,4,5,6,7,8,9];

let map = nums.map(function(nums){
    return nums%2==0;
})
console.log(map);

let fil = nums.filter(function(nums){
    return nums%2==0;
});

console.log(fil);

// Reduce
let arr = [3,4,5,6];
//without initial value
//1st way
let sum = arr.reduce(function(acc,currEle){
    return acc+currEle;
})
console.log(sum);

//2nd way
let sum1 = function(acc,currEle){
    return acc + currEle;
}

let ans = arr.reduce(sum1);
console.log(ans);

//With initial value

let sum2 = arr.reduce(function(acc, curr){
    return acc+curr;
},0);

console.log(sum2);

//chaining

let numbers = [2,3,4];

let result = numbers.map(function(element){
    return element**2;
})
.filter(function(element){
    return element%2==0;
})
.reduce(function(acc, element){
    return acc+element;
});



console.log(result);

