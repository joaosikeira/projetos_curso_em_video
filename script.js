
function verificar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    //let data = new Date()
    let  h = document.getElementById('txth')
    let hora = Number(h.value)
    

    if ( h.value.length == 0 || Number(h.value) >= 24) {
        alert('[ERRO] Digite um horário válido!')
    } else {

        if (hora >= 0 && hora < 12){
            //BOM DIA!
            img.src = 'img/manha.png'
            document.body.style.background = '#dec269'
            msg.innerHTML = `Agora são ${hora} horas da Manhã.`
        } else if (hora >= 12 && hora <= 18){
            // BOA TARDE!
            img.src = 'img/tarde.png'
            document.body.style.background = '#ff5330'
            msg.innerHTML = `Agora são ${hora} horas da Tarde.`
        } else {
            //  BOA NOITE!
            img.src = 'img/noite.png'
            document.body.style.background = '#1235a5'
            msg.innerHTML = `Agora são ${hora} horas da Noite.`
        }
    

    }
    
}
