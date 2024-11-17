function numberJackPot(qtdNumber) {
  if (qtdNumber < 6 || qtdNumber > 9) {
    console.log("Oly number from 6 to 9");
    return [];
  }

  const numbers = [];

  while (numbers.length < qtdNumber) {
    const aleatoryNumber = Math.floor(Math.random() * 60) + 1;

    if (!numbers.includes(aleatoryNumber)) {
      numbers.push(aleatoryNumber);
    }
  }

  return numbers;
}

const drawnNumber = numberJackPot(8);
console.log(drawnNumber);
