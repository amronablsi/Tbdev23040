function calculerPrixAPayer(PU, QTECOM) {
    const TOT = PU * QTECOM;
    let REM = 0;
    let PORT = 0;
  
    // Calcul de la remise
    if (TOT >= 100 && TOT <= 200) {
      REM = TOT * 0.05;
    } else if (TOT > 200) {
      REM = TOT * 0.1;
    }
  
    // Calcul des frais de port
    const totalRemise = TOT - REM;
    if (totalRemise <= 500) {
      PORT = Math.max(totalRemise * 0.02, 6);
    }
  
    const PAP = totalRemise + PORT;
  
    return {
      PAP: PAP.toFixed(2),
      REM: REM.toFixed(2),
      PORT: PORT.toFixed(2),
    };
  }
  
  // Jeu de tests
  console.log(calculerPrixAPayer(600, 1)); // Output: { PAP: "540.00", REM: "60.00", PORT: "0.00" }
  console.log(calculerPrixAPayer(501, 1)); // Output: { PAP: "459.91", REM: "50.10", PORT: "9.01" }
  console.log(calculerPrixAPayer(100, 2)); // Output: { PAP: "196.00", REM: "10.00", PORT: "6.00" }
  console.log(calculerPrixAPayer(3, 1));   // Output: { PAP: "9.00", REM: "0.00", PORT: "6.00" }
  