let coins = [25, 10, 5, 1];

function minCoins(cents) {
  if (cents < 1) return 0;

  let numOfCoins = 0;

  for (let i = 0; i < coins.length; i++) {
    numOfCoins += Math.floor(cents/coins[i]);
    cents = cents % coins[i];

    if (cents === 0) break;
  }

  return numOfCoins;
}

console.log(minCoins(31));
