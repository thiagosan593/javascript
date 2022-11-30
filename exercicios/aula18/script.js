let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('resul')
let valores = []

 function isNumero(n){
   return !!(Number(n)>=0 && Number(n) <=100);
 }
 function inLista(n,l){
   if(l.indexOf(Number(n)) != -1){
      return true
   }else{
      return false
   }

 }

 function adicionar(){
   if(isNumero(num.value) && !inLista(num.value, valores)){
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text += `Número ${num.value} adicionado`  
      lista.appendChild(item)
      res.innerHTML= ''
   }else{
      alert('Valor inváido ou já encontrado')
   }
   // Esvazia número digitado
   num.value =''
   num.focus()
 }

 function finalizar(){
   if(valores.length==0){
      alert('Adicione valores')
   }else{
      let tot  = valores.length
      let maior = valores[0]
      let menor = valores[0]
      let soma = 0
      let media = 0
      for(let pos in valores){
         soma += valores[pos]
         if(valores[pos]>maior){
            maior = valores[pos]
         }
         if(valores[pos]<menor){
            menor = valores[pos]
         }
      }
      media = soma / tot
      res.innerHTML = ''
      res.innerHTML += `<p> O total de números cadastrados é ${tot} <p>`
      res.innerHTML += `<p> O maior números cadastrados é ${maior} <p>`
      res.innerHTML += `<p> O menor números cadastrados é ${menor} <p>`
      res.innerHTML += `<p> A Soma de todos os números  é ${soma} <p>`
      res.innerHTML += `<p> A media de todos os números  é ${media} <p>`
   }
 }