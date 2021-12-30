//Quando o usuário pressiona a tecla
document.body.addEventListener('keydown', (event)=>{
    //Mostra a tecla digitada pelo usuário
    // console.log(event.code);
    playSound(event.code.toLowerCase()); // event.code manda o código da tecla digitada
})

//Quando o usuário cria uma sequência para reprodução
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split(''); // Vai fazer com que gere um array com cada letra da string digitada pelo usuário ocupando uma posição diferente
        playComposition(songArray);
    }
})

function playSound(sound){
    // Selecionoa os arquivos de áudio do html
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    //Encontrou o som
    if(audioElement){
        audioElement.currentTime = 0; //Não impedir de emitir som ao tocar o teclado rápido várias vezes
        audioElement.play(); //reproduz o som
    }

    if(keyElement){
        //adiciona o efeito de tecla clicada
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait)

        wait += 250;
    }
}