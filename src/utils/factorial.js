const cache = new Map()

export default function factorial(number) {
  return cache.get(number) ?? (cache.set(number, number <= 0 ? 1 : number*factorial(number-1)) && cache.get(number))
}
