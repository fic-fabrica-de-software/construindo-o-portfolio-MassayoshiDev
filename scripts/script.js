window.onload = function() {
    var nome = localStorage.getItem("nome")
    var n = nome
    if (!nome) {
        n = prompt("Insira um nome")
        localStorage.setItem("nome", n)
    }
    var tomates = localStorage.getItem(`${n}tomates`)
    var agua = localStorage.getItem(`${n}agua`)
    var moedas = localStorage.getItem(`${n}moedas`)
    var diamantes = localStorage.getItem(`${n}diamantes`)
    
    if (!tomates) {
        localStorage.setItem(`${n}tomates`, 0)
        localStorage.setItem(`${n}agua`, 0)
        localStorage.setItem(`${n}moedas`, 0)
        localStorage.setItem(`${n}diamantes`, 0)

        tomates = localStorage.getItem(`${n}tomates`)
        agua = localStorage.getItem(`${n}agua`)
        moedas = localStorage.getItem(`${n}moedas`)
        diamantes = localStorage.getItem(`${n}diamantes`)
    }
    
    
    var labelTomates = document.getElementById("quantTomates")
    var labelAgua = document.getElementById("quantAgua")
    var labelMoedas = document.getElementById("quantMoedas")
    var labelDiamantes = document.getElementById("quantDiamantes")

    labelTomates.innerText = tomates
    labelAgua.innerText = agua
    labelMoedas.innerText = moedas
    labelDiamantes.innerText = diamantes
}

function incTomate() {
    var n = localStorage.getItem("nome")
    var tomate = localStorage.getItem(`${n}tomates`)
    if (tomate) {
        localStorage.setItem(`${n}tomates`, parseInt(tomate) + 1)
    }
}