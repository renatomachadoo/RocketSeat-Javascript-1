const number1 = prompt("Insira o primeiro número:")
const number2 = prompt("Insira o segundo número:")

const sum = (Number(number1) + Number(number2))
const subtraction = (Number(number1) - Number(number2))
const multiplication = (Number(number1) * Number(number2))
const division = (Number(number1) / Number(number2))
const rest = (Number(number1) % Number(number2))

const numberIsEven = (sum % 2 === 0)
const numbersAreEqual = (Number(number1) === Number(number2))

alert(`
  Soma: ${sum}
  Subtração: ${subtraction}
  Multiplicação: ${multiplication}
  Divisão: ${division}
  Resto: ${rest}
  ${numberIsEven ? "Par" : "Ímpar"}
  ${numbersAreEqual ? "Números iguais" : "Números diferentes"}
`)