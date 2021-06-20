document.body.querySelector('#res').addEventListener('click', verificar)
function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var insano = document.querySelector('#nasc')
    var res = document.querySelector('div#res')
    if (insano.value.length == 0 || insano.value > ano) {
        window.alert('[ERRO] Digite um ano válido!')
    } else {
        var insex = document.getElementsByName('radsex')
        var idade = ano - insano.value
        var genero = insex[0].checked ? 'homem' : 'mulher'
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        res.style.textAlign = 'center'
        img.style.padding = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        if (idade >= 0 && idade < 15) {
            img.setAttribute('src', `${genero}/bebe.png`)
        } else if (idade < 21) {
            img.setAttribute('src', `${genero}/jovem.png`)
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', `${genero}/adulto.png`)
        } else {
            //idoso
            img.setAttribute('src', `${genero}/idoso.png`)
        }
        res.appendChild(img)
    }
}