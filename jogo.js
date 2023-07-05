//Declaração das Variaveis Globais.
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 15

//Jogo inicia com um tempo de 1500 segundos.
var criaMosquitoTempo = 1500

var nivel = window.location.search

nivel = nivel.replace('?', '')

//Entrada do tempo caso o usuario escolha um nivel de jogo.
//E passado o valor da variavel para a pagina html app.html
if(nivel === 'normal'){
     //1500
     var criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
     //1000
     var criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    //750
    var criaMosquitoTempo = 750
}

//Função atualizar o ajuste do tamnaho da pagina html
function ajustaTamanhoPalcoJogo(){
      // Captura o tamanho das dimensões de largura e altura da tela do Browser
     altura = window.innerHeight
     largura = window.innerWidth
     console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()

//Função que decrementa o tempo do relogio do jogo
var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        document.location.href = 'vitoria.html'
        // alert('VitoriA')
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
   
    
}, 1000)

function posicaoRandomica(){

   
     //remover a mosca anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
         
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
     
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        return this.remove()
    }

    document.body.appendChild(mosquito)
    
    

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)


    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
       
    }

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)


    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
       
    }
}