function sim(){
alert("você aceitou namorar comigo")
}



 function desvia(t) {

     var btn = t
     btn.style.position = "absolut"
     btn.style.top = geraposicao(10, 90)
     btn.style.left = geraposicao(10, 90)

 }

 

 function geraposicao(min, max) {
return (Math.random() * (max - min) + min) + "%" ;
}



