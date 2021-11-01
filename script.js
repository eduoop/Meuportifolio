var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle("show-menu")
})

document.querySelector('#qtde').addEventListener('change', atualizarPreço)
document.querySelector('#js').addEventListener('change', atualizarPreço)
document.querySelector('#layout-sim').addEventListener('change', atualizarPreço)
document.querySelector('#layout-nao').addEventListener('change', atualizarPreço)
document.querySelector('#prazo').addEventListener('change', () => {
    const prazo = document.querySelector('#prazo').value
    document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreço()``
})

function atualizarPreço() {
    const quantidade = document.querySelector('#qtde').value
    const temJS = document.querySelector('#js').checked
    const incluilayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value



    let preco = quantidade * 100;
    if (temJS) preco *= 1.1
    if(incluilayout) preco += 500
    let taxaurgencia = 1 - prazo*0.1
    preco *= 1 + taxaurgencia

    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
}