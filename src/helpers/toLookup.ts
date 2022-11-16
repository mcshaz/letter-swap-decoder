export function toLookup<T, K, V>(
  values: Iterable<T>,
  delegate: (arg: T) => [K, V]
): Map<K, V[]> {
  const rv = new Map<K, V[]>();
  for (const v of values) {
    const r = delegate(v);
    const arr = rv.get(r[0]);
    if (arr) {
      arr.push(r[1]);
    } else {
      rv.set(r[0], [r[1]]);
    }
  }
  return rv;
}

export function toPatternCount<T, K>(
  values: Iterable<T>,
  delegate: (arg: T) => K
): Map<K, number> {
  const rv = new Map<K, number>();
  for (const v of values) {
    const r = delegate(v);
    const count = rv.get(r) ?? 0;
    rv.set(r, count + 1);
  }
  return rv;
}
