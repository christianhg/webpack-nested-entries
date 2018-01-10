export function compute(input, ...functions) {
  return functions.reduce((result, f) => f(result), input)
}
