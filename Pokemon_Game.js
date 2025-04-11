//colocamos uma variável pros pokemons
let PikachuVida = 80
let CharmanderVida = 80

//quantidade das rodadas, controle delas
let partida = 1

//setamos a quantidade de poder
let Pikachupoder = 0
let Charmanderpoder = 0

while (PikachuVida > 0 && CharmanderVida > 0 && partida<500) {
    // console.log("partida");

    Pikachupoder = Math.floor(Math.random() * 20);
    Charmanderpoder = Math.floor(Math.random() * 20);

    PikachuVida = PikachuVida - Charmanderpoder
    CharmanderVida = CharmanderVida - Pikachupoder

    console.log("o pikachu deu",  Pikachupoder + " no Charmander. coitadinho 🤣")
    console.log("o Charmander deu", Charmanderpoder + " no Pikachu. tadin do bichin 🤣")

    console.log('partida', partida)
    console.log("🧬 a vida do Pikachu:", PikachuVida);
    console.log("🔥 a vida do Charmander:", CharmanderVida);
    console.log("———————————————");

    partida++
}

if (PikachuVida < 0 && CharmanderVida < 0) {
    console.log("🙀 rapaz, deu empate!! vamos tentar novamente :>");
} else if (PikachuVida > CharmanderVida) {
    console.log("⚡VAMBORA PIKACHU! pikachu vence, liderando ginásio e sendo o melhor, o maior!!");
} else {
    console.log("UHUUUL! CHARMANDER É UMA LENDA!! charmander vence e continua sendo o maior");
}

