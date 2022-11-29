function contar() {
    var num = document.getElementById('num')
    var seltab = document.getElementById('seltab')
    if ( num.value == '') {
        alert('Por favor,digite um número!')
    } else {
        seltab.innerHTML =''
        let i = (num.value)
        for (let c = 0; c <= 10; c+=1) {
            let item = document.createElement('option')
            item.value =`tab${c}`
            item.text += ` ${i} x ${c} = ${i*c}` 
            seltab.appendChild(item)
        }

    }
}