function lengthOfLastWord(s: string): number {
  let tokens: string[] = s.split(" ");
  while (tokens[tokens.length - 1] == "") {
    tokens.pop();
  }
  if (tokens.length == 0) {
    return 0;
  }
  return tokens[tokens.length - 1].length;
};