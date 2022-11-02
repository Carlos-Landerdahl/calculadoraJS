let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("resultSum")


const btnSomar = document.getElementById("somar")
btnSomar.addEventListener("click", function(e) {
    e.preventDefault();

    let number1 = num1.value
    let number2 = num2.value

    let total = parseFloat(number1) + parseFloat(number2)
    console.log(total)

    if (isNaN(total)) {
        alert("Insira um número")
    } else {
        result.innerHTML = `Somar: ${total}`
    }
})

const btnDividr = document.getElementById("dividir")
btnDividr.addEventListener("click", function (e) {
    e.preventDefault();

    let number1 = num1.value
    let number2 = num2.value

    let total = parseFloat(number1) / parseFloat(number2)
    console.log(total)

    if (isNaN(total)) {
        alert("Insira um número")
    } else {
        result.innerHTML = `Divisão: ${total}`
    }
})

const btnMultiplicar = document.getElementById("multiplicar")
btnMultiplicar.addEventListener("click", function (e) {
    e.preventDefault();

    let number1 = num1.value
    let number2 = num2.value

    let total = parseFloat(number1) * parseFloat(number2)
    console.log(total)

    if (isNaN(total)){
        alert("Insira um número")
    } else {
        result.innerHTML = `Multiplicação: ${total}`
    }

    
    
})

const btnReset = document.getElementById("reset")
btnReset.reset()

