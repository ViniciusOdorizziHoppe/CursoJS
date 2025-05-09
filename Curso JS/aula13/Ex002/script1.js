function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anod = document.getElementById('txtano')
    var res = document.getElementById('res')

  
    if(anod.value.length == 0 || anod.value > ano) {
        window.alert(`[ERRO] Verifique as Informações Fornecidas!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anod.value) 
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute("id",'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'assets/criançaMAS.jpg')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'assets/jovemMAS.jpg')
            } else if(idade <50) {
                //adulto
                img.setAttribute('src', 'assets/adultoMAS.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/idosoMAS.jpg')
            }
        } else if (fsex[1].checked){
            genero ='Mulher'
              if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'assets/criançaFEM.jpg')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'assets/jovemFEM.jpg')
            } else if(idade <50) {
                //adulto
                img.setAttribute('src', 'assets/adultoFEM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/idosoFEM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` ${genero} com ${idade} anos! <br>`
        res.appendChild(img)

    }
}