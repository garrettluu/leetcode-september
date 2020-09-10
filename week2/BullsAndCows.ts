function getHint(secret: string, guess: string): string {
  let bulls : number = 0;
  let cows : number = 0;

  // First pass: count bulls
  for (let i : number = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      secret = removeCharAt(secret, i);
      guess = removeCharAt(guess, i);
      i--;
      bulls++;
    }
  }

  // Second pass: count cows
  for (let i : number = 0; i < guess.length; i++) {
    let char: string = guess[i];
    if (secret.includes(char)) {
      secret = secret.replace(char, "");
      cows++;
    }
  }

  return bulls + "A" + cows + "B";
};

function removeCharAt(str: string, index: number): string {
  return str.slice(0, index) + str.slice(index + 1, str.length);
}