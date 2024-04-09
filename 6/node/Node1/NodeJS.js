function sum(a,b){
    console.log(a+b);

}

function prod(a,b){
    console.log(a*b);

}

// module.exports = {fn1: sum,
//     fn2: prod};

const name = 'abhay'
module.exports = {
    sum,
    prod,
    'name':name
};