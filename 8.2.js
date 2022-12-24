// To check if a given number x is prime, we will run a loop from 5 till square_root(x) and check if x is divisible
// by any number. To do this we increment i by 6 because all prime numbers are in the form of either 6n+1 or 6in-1.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}
let x;
x = 89;
isPrime(x) ? console.log(`${x} is prime`) : console.log(`${x} is not prime`);

// to find the next prime number after x, we run a loop and check subsequent odd numbers after x if they are prime or not.
if (x % 2 == 0) y = x + 1;
else y = x + 2;
while (isPrime(y) == false) {
  y += 2;
}
console.log(`diffrence between ${x} and next prime is ${y - x}`);
