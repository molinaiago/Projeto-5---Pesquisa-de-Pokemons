var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    e.preventDefault() // Bloqueia o refresh 

    let urlForm = 'https://pokeapi.co/api/v2/pokemon/' //URL da API pokemon para pesquisa

    let nome = document.getElementById('name') // pegar o que o usuário digitou

    urlForm = urlForm.toLowerCase() // deixa em minúsculo

    urlForm += this.name.value // atualizando a url com o número do pokémon

    let resposta = document.getElementById('content')

    let imagem = document.getElementById('imgpokemon')

    let html = ''

    fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data)
        html = 'Nome: ' + maiuscula(data.name) + '<br>'
        html += 'Tipo: ' + maiuscula(data.types[0].type.name)
        resposta.innerHTML = html

        imagem.innerHTML = '<img src=' + data.sprites.front_default + '><img src='+ data.sprites.back_default +'>'

    })

    .catch(function(err){
        console.log(err)
        alert('Erro! Digite um nome ou número correto!')
    })
})

function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}