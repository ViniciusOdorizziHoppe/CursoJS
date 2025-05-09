var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas`)

if (hora < 12) {
    console.log(`Bom Dia são ${hora} horas`)
}else if (hora < 18) {
    console.log(`Boa Tarde são ${hora} horas`)
} else {
    console.log(`Boa Noite são ${hora} horas`)
}