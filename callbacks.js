const calculate=(a,b,ispePerformkaro)=>{
    return ispePerformkaro(a,b);
}

const addfun=(num1,num2)=>{
    return num1+num2;
}

const addition = calculate(4,7,addfun);

const subtraction=calculate(10,5,(a,b)=>{
    return a-b;
})

const multiplication=calculate(10,5,(a,b)=>{
    return a*b;
})

const divison=calculate(10,5,(a,b)=>{
    return a/b;
})

console.log(addition,subtraction,multiplication,divison);