//Boolean
export const isPrimerWithSqrt = (number) =>{
    //https://www.youtube.com/watch?v=4tbuSPSqQWU
    //Para facilitar o loop a gente pega a raiz  do numero e gerar um numero bem menor para o loop
    let sqrtNumber = Math.sqrt(number)

    for(let i = 2; i <= sqrtNumber; i++){
        if(number % i === 0) return false
    }

    return number > 1 
}

//Boolean
export const isPrime = (number) => {
    for(let i = 2; i < number; i++){
        if(number % i === 0) return false
    }

    return number > 1 
}

//List<Number>
export const summation = (lstNumber) => {
    return lstNumber
            .map((value)=>{return !isNaN(value)&&value})
            .reduce((a,b)=>{return a+b})
}

//Number
export const fibonacci = (number) =>{
    if(number <= 2){
        return number-1
    }

    return fibonacci(number-1)+fibonacci(number-2)
}

export const fibonacciWithouRecursion = (number) =>{
    if(number == 1) return 0
    if(number <= 3) return 1

    let acc = 1;
    let result = 1;
    for(let i = 2; i<number-1; i++){
        let aux = result
        result = acc + result
        acc = aux
    }
    return result
}

//Number
export const mdc = (x,y) =>{
    let remainder = x<y ? x:y

    while (remainder > 0){
        remainder = x % y;
        x = y;
        y = remainder;
    } 

    return x;
}

//List<Number>
export const quickSort = (lst) => {
    if(lst.length < 2)
        return lst 
    
    const pivot = lst[Math.floor(Math.random()*lst.length)]

    let left = []
    let right = []
    let equals = []

    for(let value of lst){
        if(value < pivot){
            left.push(value)
        }

        if(value > pivot){
            right.push(value)
        }

        if(value == pivot){
            equals.push(value)
        }
    }

    return [...quickSort(left),...equals,...quickSort(right)]
}

//Number
export const intCount = (number,lst) =>{
    let increment = 0;
    let valueNumber = Number(number)

    if(!isNaN(valueNumber)){
        for(let i = 0; i<=lst.length; i++) 
            if(lst[i]>valueNumber)increment++;
    }
    return increment
}