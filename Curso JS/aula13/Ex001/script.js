function carregar() {

    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerText = `Agora são ${hora}:${minutos}!`
    if (hora >= 0 && hora <12) { 
        imagem.src ='/aula13/assets/NoiteJs.jpg'
        document.body.style.background = 'rgb(33, 100, 194)'
    } else if (hora >= 12 && hora <18) {
        imagem.src ='/aula13/assets/TardeJs.jpg'
        document.body.style.background = 'rgb(223, 158, 67)'
    } else if (hora >= 18 && hora <0) {
        imagem.src ='/aula13/assets/NoiteJsV.png'
        document.body.style.background = ' rgb(19, 22, 65)'
    }

}