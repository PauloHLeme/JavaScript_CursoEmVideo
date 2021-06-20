//criando chamadas
document.querySelector('button#adicionar').addEventListener('click', add)
document.querySelector('button#finalizar').addEventListener('click', end)
document.querySelector('button#limpar').addEventListener('click', clear)

    let list = []
    let output = document.querySelector('div#saida')
    let addsel = document.querySelector('select#seletor')

//função adicionar
function add() {
    let addnum = Number(document.querySelector('#numero').value)
    
    let option = document.createElement('option')
    if (addnum == ''){
        window.alert('Por favor insira um número')
    } else if (addnum < 1 || addnum > 100 || list.indexOf(addnum) != -1){
        window.alert('valor inválido ou já encontrado na lista')
    }else{
        option.text = `Valor ${addnum} adicionado`
        option.value= `tab${addnum}`
        addsel.appendChild(option)
        list.push(addnum)
        output.innerHTML = 'Valor inserido. Aperte Finalizar para ver o resultado'
    }
    numero.value = ''
    numero.focus()
}

//função resultados
function end() {
    if (list =='') {
        window.alert('Adicione valores antes de finalizar')
    }else{
        //definindo o maior e o menor número da lista
        list.sort()
        let smallest = list[0]
        let biggest = list[list.length - 1]
        let sum = 0
        let medium = 0

        //somando os valores
        for(let pos in list){
            sum += list[pos]
        }

        //média
        medium = sum / list.length

        //saídas
        output.innerHTML = ''
        output.innerHTML = `<p>Ao todo, temos ${list.length} números cadastrados.</p>`
        output.innerHTML += `<p>O maior valor informado foi ${biggest}.</p>`
        output.innerHTML += `<p>O menor valor informado foi ${smallest}.</p>`
        output.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        output.innerHTML += `<p>A média dos valores digitados é ${medium}.</p>`
    }
}
//limpar entradas
function clear() {
        output.innerHTML = ''
        list = []
        addsel.innerHTML = ''
}