function sumPrimes(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++ ) {
      let count = 0;
      for(let j = 1; j <= i ; j++ ) {
        if(i%j === 0) {
          count++;
        }
      }
      if(count === 2) {
          sum+= i;
        }
    }
    console.log(sum);
    return sum;
  }
  
//Using every and reduce
function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
   
    return primes.reduce((sum, prime) => sum + prime, 0);
  }
//Using another function
  function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }