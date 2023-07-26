function calculatePriceToPay(PU, QTECOM) {
  const TOT = PU * QTECOM;
  let REM = 0;
  let PORT = 0;

  if (TOT >= 100 && TOT <= 200) {
    REM = TOT * 0.05;
  } else if (TOT > 200) {
    REM = TOT * 0.1;
  }

  const totalRemised = TOT - REM;

  if (totalRemised <= 500) {
    PORT = Math.max(totalRemised * 0.02, 6);
  }

  const PAP = totalRemised + PORT;

  return { PAP, REM, PORT };
}

// Tests
console.log(calculatePriceToPay(600, 1)); // Output: { PAP: 540, REM: 60, PORT: 0 }
console.log(calculatePriceToPay(501, 1)); // Output: { PAP: 459.91, REM: 50.1, PORT: 9.01 }
console.log(calculatePriceToPay(100, 2)); // Output: { PAP: 196, REM: 10, PORT: 6 }
console.log(calculatePriceToPay(3, 1));   // Output: { PAP: 9, REM: 0, PORT: 6 }
