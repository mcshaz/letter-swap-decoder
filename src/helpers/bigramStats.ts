export const bigramFreq = {
  TH: 3.56,
  HE: 3.07,
  IN: 2.43,
  ER: 2.05,
  AN: 1.99,
  RE: 1.85,
  ON: 1.76,
  AT: 1.49,
  EN: 1.45,
  ND: 1.35,
  TI: 1.34,
  ES: 1.34,
  OR: 1.28,
  TE: 1.2,
  OF: 1.17,
  ED: 1.17,
  IS: 1.13,
  IT: 1.12,
  AL: 1.09,
  AR: 1.07,
  ST: 1.05,
  TO: 1.04,
  NT: 1.04,
  NG: 0.95,
  SE: 0.93,
  HA: 0.93,
  AS: 0.87,
  OU: 0.87,
  IO: 0.83,
  LE: 0.83,
  VE: 0.83,
  CO: 0.79,
  ME: 0.79,
  DE: 0.76,
  HI: 0.76,
  RI: 0.73,
  RO: 0.73,
  IC: 0.7,
  NE: 0.69,
  EA: 0.69,
  RA: 0.69,
  CE: 0.65,
  LI: 0.62,
  CH: 0.6,
  LL: 0.58,
  BE: 0.58,
  MA: 0.57,
  SI: 0.55,
  OM: 0.55,
  UR: 0.54,
};

export function getAllNGrams(inpt: string, n = 2) {
  const rv = new Map<string, number>();
  for (const w of inpt.toUpperCase().split(/[^A-Z]+/)) {
    for (let i = n; i <= w.length; ++i) {
      const bigram = w.substring(i - n, i);
      const count = rv.get(bigram) ?? 0;
      rv.set(bigram, count + 1);
    }
  }
  return rv;
}

export function getFreqSortedNGrams(inpt: string, n = 2) {
  return new Map([...getAllNGrams(inpt, n)].sort((a, b) => b[1] - a[1]));
}
