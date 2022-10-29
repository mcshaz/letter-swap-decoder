import binomCDF from '@stdlib/stats-base-dists-binomial-cdf'

const letterPs= [8.1238,1.4893,2.7114,4.3192,12.0195,2.3039,2.0257,5.9215,7.3054,0.1031,0.6895,3.9785,2.6116,6.9478,7.6812,1.8189,0.1125,6.0213,6.2808,9.0986,2.8776,1.1075,2.0949,0.1728,2.1135,0.0702]
    .map(pc => pc / 100)
function allPsForGivenLetter(letterCount: number, totalLetters: number) {
  const rv: Record<string, number> = {}
  for (let i = 0; i < 26; ++i) {
    const cdf = [binomCDF(letterCount, totalLetters, letterPs[i]),
                binomCDF(totalLetters - letterCount, totalLetters, letterPs[i])]
        .map(p => p > 0.5 ? 1 - p : p)
    rv[String.fromCharCode(i + 65)] = cdf[0] + cdf[1]
  }
  return rv
}

function allLetterCount(str: string) {
  let count = 0
  for(let i=0; i < str.length; ++i){
    if (/[a-z]/i.test(str[i])) ++count
  }
  return count
}

function givenLetterCount(str: string, letter: string) {
  let count = 0
  for(let i=0; i < str.length; ++i){
    if (letter===str[i]) ++count
  }
  return count
}

function getDifs(...numberList: number[]) {
  if (!numberList.length) return []
  numberList.sort((a, b) => b - a)
  const rv = numberList.slice(1).map((n, i) => numberList[i] - n)

  return rv.slice(0, 3)
}

export function alphabetDetails(encoded: string) {
  const letterDetails:Record<string, {count: number, pValues: Record<string, number>, topPDifs: number[]}> = {}
  const totalLetters = allLetterCount(encoded);
  for (let i = 0; i < 26; ++i) {
    const c = String.fromCharCode(i + 65)
    const count = givenLetterCount(encoded, c)
    if (count) {
      const pValues = allPsForGivenLetter(count, totalLetters)
      letterDetails[c] = {
        count,
        pValues,
        topPDifs: getDifs(...Object.values(pValues))
      }
    }
  }
  return {
    totalLetters,
    letterDetails
  }
}

export function normalise(...numbers: number[]) {
  const min = Math.min(...numbers)
  const rng = Math.max(...numbers) - min
  return numbers.map(n => (n - min) / rng)
}

export interface rgb {r: number, g: number, b: number}
export function interpolateBetweenColors(
  fromColor: rgb,
  toColor: rgb,
  delta: number
) {
  const wted = (start: number, finish: number) =>
    Math.round(start + (finish - start) * delta)
  const r = wted(fromColor.r, toColor.r);
  const g = wted(fromColor.g, toColor.g);
  const b = wted(fromColor.b, toColor.b);
  return {r, g, b}
};