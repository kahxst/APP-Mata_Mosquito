// encontrar a largura e altura do site 

var altura = 0
var largura=0
function ajustaTamanhoPalcoJogo(){
   altura =window.innerHeight
   largura = window.innerWidth

}
ajustaTamanhoPalcoJogo()



function posicaoRandomica(){
    
    var posicaoX=Math.floor( Math.random() * largura)-90
    var posicaoY=Math.floor( Math.random() * altura)-90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    
    //criando um elemento html
    var mosquito = document.createElement('img')
    mosquito.src='img/mosca.png'
    mosquito.className=tamanhoAleatorio()
    mosquito.style.left=posicaoX+'px'
    mosquito.style.top=posicaoY+'px'
    mosquito.style.position='absolute'
    
    document.body.appendChild(mosquito)
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
