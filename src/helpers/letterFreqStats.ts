import binomPMF from "@stdlib/stats-base-dists-binomial-pmf";
// below is cornel uni data ordered A-Z (i.e.) the index of the array = String.fromCharCode(65 + index))
// const letterPs= [8.1238,1.4893,2.7114,4.3192,12.0195,2.3039,2.0257,5.9215,7.3054,0.1031,0.6895,3.9785,2.6116,6.9478,7.6812,1.8189,0.1125,6.0213,6.2808,9.0986,2.8776,1.1075,2.0949,0.1728,2.1135,0.0702]
//    .map(pc => pc / 100)
// instead trying Peter Norvig google libraries analysis
export type englishLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";
type letterStats = Record<englishLetter, number>;
const norvigFreqs: letterStats = {
  E: 0.1249,
  T: 0.0928,
  A: 0.0804,
  O: 0.0764,
  I: 0.0757,
  N: 0.0723,
  S: 0.0651,
  R: 0.0628,
  H: 0.0505,
  L: 0.0407,
  D: 0.0382,
  C: 0.0334,
  U: 0.0273,
  M: 0.0251,
  F: 0.024,
  P: 0.0214,
  G: 0.0187,
  W: 0.0168,
  Y: 0.0166,
  B: 0.0148,
  V: 0.0105,
  K: 0.0054,
  X: 0.0023,
  J: 0.0016,
  Q: 0.0012,
  Z: 0.0009,
};
function allPsForGivenLetter(
  letterCount: number,
  totalLetters: number,
  letterFreq: letterStats = norvigFreqs
) {
  const rv = {} as letterStats;
  let pFx = 0;
  for (const l of Object.keys(letterFreq) as englishLetter[]) {
    // const cdf = binomCDF(letterCount, totalLetters, letterPs[l])
    // rv[l] = cdf > 0.5 ? (1 - cdf) : cdf
    // trying bayesian
    pFx += rv[l] = binomPMF(letterCount, totalLetters, letterFreq[l]); // * 1/26
  }
  for (const l of Object.keys(rv) as englishLetter[]) rv[l] /= pFx;
  return rv;
}

function countLetters(str: string) {
  const counts: number[] = Array(26).fill(0);
  for (let i = 0; i < str.length; ++i) {
    const cc = str.charCodeAt(i);
    if (65 <= cc && cc <= 90) {
      ++counts[cc - 65];
    } else if (97 <= cc && cc <= 122) {
      ++counts[cc - 97];
    }
  }
  const accum = {} as Record<englishLetter, number>;
  for (let i = 0; i < 26; ++i) {
    accum[String.fromCharCode(i + 65) as englishLetter] = counts[i];
  }
  return accum;
}

/*
function getDifs(...numberList: number[]) {
  if (!numberList.length) return []
  numberList.sort((a, b) => b - a)
  const rv = numberList.slice(1).map((n, i) => numberList[i] - n)

  return rv.slice(0, 3)
}
*/

export function alphabetDetails(
  encoded: string,
  excludeLetters?: englishLetter[]
) {
  let letterCounts = countLetters(encoded);
  let freqs = norvigFreqs;
  if (excludeLetters && excludeLetters.length) {
    const excludeSet = new Set(excludeLetters);
    let sumRemainingFreq = 1;
    freqs = Object.fromEntries(
      Object.entries(freqs).filter(([k, v]) => {
        if (excludeSet.has(k as englishLetter)) {
          sumRemainingFreq -= v;
          return true;
        }
        return false;
      })
    ) as letterStats;
    if (sumRemainingFreq < 1) {
      for (const l of Object.keys(freqs)) {
        freqs[l as englishLetter] /= sumRemainingFreq;
      }
    }
    letterCounts = Object.fromEntries(
      Object.entries(letterCounts).filter(
        (kv) => !excludeSet.has(kv[0] as englishLetter)
      )
    ) as Record<englishLetter, number>;
  }
  const totalLetters = Object.values(letterCounts).reduce(
    (accum, c) => accum + c,
    0
  );
  const letterDetails = (Object.keys(letterCounts) as englishLetter[]).reduce(
    (accum, l) => {
      if (letterCounts[l]) {
        accum[l] = {
          count: letterCounts[l],
          decodesToProbs: allPsForGivenLetter(
            letterCounts[l],
            totalLetters,
            freqs
          ),
        };
      }
      return accum;
    },
    {} as Record<string, { count: number; decodesToProbs: letterStats }>
  );

  return {
    totalLetters,
    letterDetails,
  };
}

export function getOrderedLikelihood(ls: Record<string, number>) {
  return Object.entries(ls)
    .sort((a, b) => b[1] - a[1])
    .map((e) => e[0]);
}

export function normalise(...numbers: number[]) {
  const min = Math.min(...numbers);
  const rng = Math.max(...numbers) - min;
  return numbers.map((n) => (n - min) / rng);
}

/*
export function orderNormalise(...numbers: number[]) {
  const sorted = [...numbers].sort((a, b) => a - b);
  return numbers.map((n) => sorted.indexOf(n) / (sorted.length - 1));
}
*/

export interface rgb {
  r: number;
  g: number;
  b: number;
}
export function interpolateBetweenColors(
  fromColor: rgb,
  toColor: rgb,
  delta: number
) {
  const wted = (start: number, finish: number) =>
    Math.round(start + (finish - start) * delta);
  const r = wted(fromColor.r, toColor.r);
  const g = wted(fromColor.g, toColor.g);
  const b = wted(fromColor.b, toColor.b);
  return { r, g, b };
}
