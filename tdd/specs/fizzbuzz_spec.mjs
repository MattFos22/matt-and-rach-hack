import chai from 'chai';
const { expect } = chai;
import {calculateFizzBuzz, calculatePrimeNumber} from '../fizzbuzz.mjs'

describe('Fizzbuzz', () => {

    // it('should fail', () => {
    //     const output = calculateFizzBuzz(1)
    //     expect(output).to.be.equal('I work now')
    // })

    it('should say fizz when the number given is divisible by 3', () => {
        console.log('HELSEGSRGRDSGSGSEGSGSGS*****', )
        const output = calculateFizzBuzz(6)
        expect(output).to.be.equal('fizz')
    })

    it('should say buzz when the number given is divisible by 5', () => {
        const output = calculateFizzBuzz(10)
        expect(output).to.be.equal('buzz')
    })

    it('should say fizzbuzz when the number given is divisible by 3 and 5', () => {
        const output = calculateFizzBuzz(15)
        expect(output).to.be.equal('fizzbuzz')
    })

    it('should say Giant Rumblebuffins when the number given is bigger than 700', () => {
        const output = calculateFizzBuzz(701)
        expect(output).to.be.equal('Giant Rumblebuffins')
    })

    it('should say I am a prime number when the number is a prime', () => {
        const output = calculatePrimeNumber(8)
        expect(output).to.be.equal('I am a prime number')
    })
})


//2, 3, 5, 7