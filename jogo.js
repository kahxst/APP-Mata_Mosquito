// encontrar a largura e altura do site 

var altura = 0
var largura=0
var vidas = 1
 var tempo = 15
 criaMosquitoTempo=1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'Normal'){
    criaMosquitoTempo=1500
}else if(nivel === 'Difícil'){
    criaMosquitoTempo=1000
}else if(nivel === 'Chucknorris'){
    criaMosquitoTempo=750
}

function ajustaTamanhoPalcoJogo(){
   altura =window.innerHeight
   largura = window.innerWidth

}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo-=1
    if(tempo<0){
       clearInterval(cronometro) 
       clearInterval(criaMosca)
       window.location.href='vitoria.html'
    }else{
         document.getElementById('cronometro').innerHTML=tempo
    }
   
},1000)

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas>3){
           window.location.href = 'fim_de_jogo.html'
        }else{
              document.getElementById('v' +  vidas).src='img/coracao_vazio.png'
        vidas++
        }
      
    }
    
    var posicaoX=Math.floor( Math.random() * largura)-90
    var posicaoY=Math.floor( Math.random() * altura)-90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    
    //criando um elemento html
    var mosquito = document.createElement('img')
    mosquito.src='img/mosca.png'
    mosquito.className=tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left=posicaoX+'px'
    mosquito.style.top=posicaoY+'px'
    mosquito.style.position='absolute'
    mosquito.id='mosquito'
    mosquito.onclick= function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito)
    ladoAleatorio()
    }




    
    function tamanhoAleatorio(){
        var classe =Math.floor( Math.random()*3 )
        switch(classe){
            case 0:
            return 'mosca1'

            case 1:
            return 'mosca2'

            case 2:
                return 'mosca3'
        }
    }



    function ladoAleatorio(){
        var classe =Math.floor( Math.random()*2 )
        switch(classe){
            case 0:
            return 'ladoA'

            case 1:
            return 'ladoB'

        }
    }