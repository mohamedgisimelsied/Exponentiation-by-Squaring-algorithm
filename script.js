function calculateExponentiation() {
    // Get the values of the base and exponent from user input
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);

    // Calculate the result using the exponentiationBySquaring function
    const result = exponentiationBySquaring(base, exponent);

    // Display the result to the user
    document.getElementById('result').textContent = `${base}^${exponent} = ${result}`;
}

function exponentiationBySquaring(base, exponent) {
  // checking base cases:
  if (exponent === 0) {
    // Any non-zero number raised to the power of 0 is 1.
    return 1;
  } else if (exponent === 1) {
    // Any number raised to the power of 1 is the number itself.
    return base;
  } else if (exponent < 0) {
    // If the exponent is negative, convert the problem to a positive exponent
    // by taking the reciprocal of the result with a positive exponent.
    return 1 / exponentiationBySquaring(base, -exponent);
  }

  // If the exponent is even, we can use the exponentiation by squaring technique.
  if (exponent % 2 === 0) {
    // Calculate the result for half the exponent.
    const halfResult = exponentiationBySquaring(base, exponent / 2);
    // The result for the original exponent is the square of the result for half.
    return halfResult * halfResult;
  } else {
    // If the exponent is odd, reduce it by 1, calculate the result for half,
    // and multiply it by the base to account for the odd part of the exponent.
    const reducedExponent = exponent - 1;
    const halfResult = exponentiationBySquaring(base, reducedExponent / 2);
    return halfResult * halfResult * base;
  }
}
