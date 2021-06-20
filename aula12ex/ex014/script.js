document.body.addEventListener('load', carregar())
function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}hs`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#C4DAE5'
    } else if(hora >=12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#F4D8BF'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#3B304E'
    }
}
