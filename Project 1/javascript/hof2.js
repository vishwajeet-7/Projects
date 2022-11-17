
let names = ["Dherya", "Shuggu", "Roger", "John"];

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

names.forEach(function(element,idx,stand){
    console.log(element,idx,stand);
});

let ans = names.map(function(element,idx){
    return (idx);
});
console.log(ans);

let res = [];
names.forEach(function(ele,idx){
    res.push(idx);
});
console.log(res);
