function verificar(){
  var data =new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var resul = document.getElementById('res')
   if(fano.value <= 0 || fano.value > ano ){
    window.alert("[ERROR] Verifique os dados e tente novamente")
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano- Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    var genero =''
    if(fsex[0].checked){
        genero= 'Homem'
        if(idade<=10){
          //Criança
          img.setAttribute('src','./imagens/crianca-m-250px.png')
        }else if(idade <=21){
          //jovem
          img.setAttribute('src','./imagens/jovem-m-250px.png')
        }else if(idade<=50){
          //adulto
          img.setAttribute('src','./imagens/homem-250px.png')
        }else{
          // idoso
          img.setAttribute('src','./imagens/idoso-250px.png')
        }
    }else if(fsex[1].checked){
        genero= 'Mulher'
        if(idade<=10){
          //Criança
          img.setAttribute('src','./imagens/crianca-f-250px.png')
        }else if(idade <=21){
          //jovem
          img.setAttribute('src','./imagens/jovem-f-250px.png')
        }else if(idade<=50){
          //mulher
          img.setAttribute('src','./imagens/mulher-250px.png')
        }else{
          //idosa
          img.setAttribute('src','./imagens/idosa-250px.png')
        }
    }

   resul.innerHTML = `${genero} com idade  de ${idade} <br>`
   resul.appendChild(img)
 }

}