function TableMultiplication(nombre) {
  for (let i = 1; i <= 10; i++) {
    const resultat = i * nombre;
    console.log(`${i} x ${nombre} = ${resultat}`);
  }
}

// Exemple d'utilisation avec le nombre 7
TableMultiplication(7);
TableMultiplication(5);
