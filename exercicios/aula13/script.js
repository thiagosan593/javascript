function verificar(){
  var data =new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var resul = document.getElementById('res')
  if(fano.value.length == 0 || fano.value > ano ){
    window.alert("[ERROR] Verifique os dados e tente novamente")
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano- Number(fano.value)
    var genero =''
    if(fsex[0].checked){
        genero= 'Homem'
        if(idade<18){
            
        }
    }else if(fsex[1].checked){
        genero= 'Mulher'
    }

   resul.innerHTML = `${genero} com idade  de ${idade}`
 }

}