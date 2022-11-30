let pessoa = {nome:'josé',sexo:'M',peso:80, engordar(p=0){
    console.log('engordou')
this.peso += p
}}
pessoa.engordar(5)
console.log(`${pessoa.nome} pesa ${pessoa.peso} kg`)