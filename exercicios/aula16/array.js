let num = [5,8,3,8,0]
num[5]=4
num.push(7)
console.log(num)
console.log(`Primerio valor do Vetor é ${num[0]}`)
console.log(`Tamanaho do Vetor ${num.length}`)
console.log(`Ordem do Vetor ${num.sort()}`)

console.log('FOR')
for(let i=0;i<num.length;i++){
        console.log(`Número na posição ${i} tem o valor ${num[i]}`)
}

console.log('FOR IN')
for(let i in num){
    console.log(`Número na posição ${i} tem o valor ${num[i]}`)
}