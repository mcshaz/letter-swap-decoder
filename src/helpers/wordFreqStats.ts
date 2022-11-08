// note stats = percent of all words found by Peter Norvig in Google libraries
const wordFreqStats = Object.freeze([
  null,
  {
    a: 2.06,
    i: 0.52,
  },
  {
    of: 4.16,
    to: 2.6,
    in: 2.27,
    is: 1.13,
    it: 0.77,
    as: 0.77,
    be: 0.65,
    by: 0.63,
    on: 0.62,
    he: 0.55,
    or: 0.49,
    at: 0.46,
    an: 0.37,
    we: 0.28,
    if: 0.21,
    so: 0.19,
    no: 0.19,
  },
  {
    the: 7.14,
    and: 3.04,
    for: 0.88,
    was: 0.74,
    not: 0.61,
    are: 0.5,
    his: 0.49,
    but: 0.38,
    had: 0.35,
    you: 0.31,
    one: 0.29,
    all: 0.28,
    can: 0.22,
    her: 0.22,
    has: 0.22,
    who: 0.2,
  },
  {
    that: 1.08,
    with: 0.7,
    this: 0.51,
    from: 0.47,
    have: 0.37,
    they: 0.33,
    were: 0.31,
    been: 0.22,
    more: 0.21,
    when: 0.2,
    will: 0.2,
  },
  {
    which: 0.42,
    their: 0.29,
    there: 0.22,
    would: 0.2,
  },
] as Record<string, number>[]);

export { wordFreqStats };
