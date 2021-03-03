const calculateFizzBuzz = (input) => {
    if(input % 3 === 0 && input % 5 === 0){
        return 'fizzbuzz'
    }
    else if(input % 3 === 0){
        return 'fizz'
    }
    else if(input % 5 === 0){
        return 'buzz'
    }
    else if(input > 700){
        return 'Giant Rumblebuffins'
    }
}

const calculatePrimeNumber = (input) => {
    if(input / input == 1)
    {
        return 'I am a prime number'
    }
}

export { calculateFizzBuzz, calculatePrimeNumber}
