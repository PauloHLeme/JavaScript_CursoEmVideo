document.body.querySelector('button#calcular').addEventListener('click', clicar)

function clicar() {
    var num = Number(document.querySelector('input#numero').value)
    var res = document.querySelector('select#tabuada')
    var count = 1
    if(num == 0){
        res.innerHTML = '<option value="placeholder" id="placeholder">Digite um número acima</option>'
        window.alert('Por favor, digite um número')
        
    }else{
        res.innerHTML = ''
        for(count = 1; count <= 10; count ++){
            //criar variável e atribuir a criação de um elemento
            var opcao = document.createElement('option')
            //abaixo, adicionamos um texto para a variável
            opcao.text = `${num} x ${count} = ${count * num}`
            opcao.value = `tab${count}`
            //aqui, criamos a opção dentro do select
            res.appendChild(opcao)
        }
    }
    
}