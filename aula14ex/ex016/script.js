
document.querySelector('button#contar').addEventListener('click', verify)

function verify() {
    var start = Number(document.querySelector('input#inicio').value)
    var end = Number(document.querySelector('input#fim').value)
    var step = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('div#contagem')

    if (start == '' || end == '') {
        res.style.color = 'red'
        res.innerHTML = '[ERRO] Faltam Dados!'
    }else {
        res.innerHTML = 'Contando: <br>'
        if(step <= 0){
            window.alert ('Passo inválido. Considerando Passo como 1')
            step = 1
        }
        if(start < end){
            //Contagem Crescente
            for(count = start; count <= end; count += step){
                res.style.color = 'black'
                res.innerHTML +=` ${count} &#x1F449`
            }
        }else{
            //Contagem Regressiva
            for(count = start; count>= end; count-= step){
                res.style.color = 'black'
                res.innerHTML += ` ${count} &#x1F449`
            }
        }
        res.innerHTML+=` &#x1F3C1`
    }
    
}