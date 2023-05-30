

function fizz_buzz(N) {
  const result = [];
  
  for (let i = 1; i <= N; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        result.push("FizzBuzz");
        break;
      case i % 3 === 0:
        result.push("Fizz");
        break;
      case i % 5 === 0:
        result.push("Buzz");
        break;
      default:
        result.push(i);
        break;
    }
  }
  
  return result;
}

module.exports = fizz_buzz;
