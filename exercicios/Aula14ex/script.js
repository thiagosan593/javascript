function contar() {
    let ini = document.getElementById('n01')
    let fim = document.getElementById('n02')
    let passo = document.getElementById('pass')
    let resul = document.getElementById('resul')
    if (ini.value== '' || ini.value <0 || fim.value =='' ||fim.value <0 || passo.value =='') {
        resul.innerHTML = "Impossivel Contar"
    } else {
        resul.innerHTML = 'Contando: <br>'
        let i = Number(n01.value)
        let f = Number(n02.value)
        let p = Number(passo.value)
        if(p<=0){
            alert('Passo Inválido! Considerando PASSO 1')
            p=1
        }
        //Contagem Crescente
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resul.innerHTML += (`${c} &#10145`)
            }
            //Contagem regressiva
        } else {
            for (let c = i; c >= f; c -= p) {
                resul.innerHTML += (`${c} &#10145`)
            }
        }
        resul.innerHTML += '\u{1F3C1}'
    }
}