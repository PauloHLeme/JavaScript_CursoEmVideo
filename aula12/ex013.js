var agora
var hora

agora = new Date()
hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)
if (hora >=8 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
}else if(hora < 22){
    console.log('Boa Noite!')
}else{
    console.log('Você deveria estar dormindo')
}