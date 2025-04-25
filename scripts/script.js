window.onload = function() {
    const nome = localStorage.getItem("nome")
    let n = "a"
    if (!n) {
        n = prompt("Insira um nome")
        localStorage.setItem("nome", n)
    }
    
    const tomates = localStorage.getItem(`${n}tomates`)
    const agua = localStorage.getItem(`${n}agua`)
    const moedas = localStorage.getItem(`${n}moedas`)
    const diamantes = localStorage.getItem(`${n}diamantes`)
    
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
    
    
    const labelTomates = document.getElementById("quantTomates")
    const labelAgua = document.getElementById("quantAgua")
    const labelMoedas = document.getElementById("quantMoedas")
    const labelDiamantes = document.getElementById("quantDiamantes")
    
    labelTomates.innerText = tomates
    labelAgua.innerText = agua
    labelMoedas.innerText = moedas
    labelDiamantes.innerText = diamantes
}