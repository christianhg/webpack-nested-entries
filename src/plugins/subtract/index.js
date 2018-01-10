import { compute } from '../../core/compute'
import { curry } from '../../core/curry'

export const subtract = curry((a, b) => b - a)

console.log('subtracting:', compute(10, subtract(5)))
