import factorial from "./factorial";

export default function ncr(n, r) {
  return factorial(n)/(factorial(r)*factorial(n-r))
}
