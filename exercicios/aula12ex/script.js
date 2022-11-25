function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas =  data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`
    if(horas>=0 && horas <12){
        img.src = './imagens/manha-p.png'
        document.body.style.background ='#C7C2C5'
    }else if(horas>=12 && horas<=18){
        img.src = './imagens/tarde-p.png'
        document.body.style.background ='#C05407'
    }else{
        img.src = './imagens/noite-p.png'
        document.body.style.background ='#2B3638'
    }
}