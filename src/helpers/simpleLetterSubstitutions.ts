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
  const rv = Array(rawMsg.length) as string[];
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

export function wrappedBeltEncode(rawMsg: string, offset: number) {
  if (Math.trunc(offset) !== offset) throw Error("offset must be an integer");
  const lf = Math.ceil(rawMsg.length / offset) * offset - 1;
  let nextOutptIndx = 0;
  const rv = Array(rawMsg.length) as string[];
  for (let i = 0; i < rawMsg.length; ++i) {
    rv[nextOutptIndx] = rawMsg[i];
    nextOutptIndx += offset;
    if (nextOutptIndx > rawMsg.length) nextOutptIndx -= lf;
  }
  return rv.join("");
}

export function caesarEncodeDecode(rawMsg: string, offset: number) {
  if (Math.trunc(offset) !== offset) throw Error("offset must be an integer");
  offset %= 26;
  if (offset < 0) offset += 26;
  const rv = Array(rawMsg.length) as string[];
  for (let i = 0; i < rawMsg.length; ++i) {
    let c = rawMsg.charCodeAt(i);
    if (65 <= c && c <= 90) {
      c += offset;
      rv[i] = String.fromCharCode(c > 90 ? c - 26 : c);
    } else if (97 <= c && c <= 122) {
      rv[i] = String.fromCharCode(c > 122 ? c - 26 : c);
    } else {
      rv[i] = rawMsg[i];
    }
  }
  return rv.join("");
}
