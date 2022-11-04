function createRndLetterOrder() {
  const letters = Array(26) as [string, number][];
  for (let i = 0; i < 26; ++i) {
    letters[i] = [String.fromCharCode(i + 65), Math.random()];
  }
  letters.sort((a, b) => a[1] - b[1]);
  return letters.map((l) => l[0]);
}

export function replaceLetters(rawMsg: string, replaceArr?: string[]) {
  if (!replaceArr) replaceArr = createRndLetterOrder();
  const rv = Array(rawMsg.length);
  for (let i = 0; i < rawMsg.length; ++i) {
    const c = rawMsg.charCodeAt(i);
    if (65 <= c && c <= 90) {
      rv[i] = replaceArr[c - 65];
    } else if (97 <= c && c <= 122) {
      rv[i] = replaceArr[c - 97].toLowerCase();
    } else {
      rv[i] = rawMsg[i];
    }
  }
  return rv.join("");
}
