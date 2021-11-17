export const roundCommentsValue = (value: string | number) => {
  let number = +value;
  const M = 1000000;
  const K = 1000;

  if (number >= M) {
    number = Math.round(number / M)
    return `${number.toFixed(1)}M`
  }

  if (number >= K) {
    number = Math.round(number / K)
    return `${number.toFixed(1)}K`
  }

  return `${number}`
}