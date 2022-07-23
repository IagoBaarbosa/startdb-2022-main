class Forca {
  constructor(resposta) {
    this.resposta = resposta.split("");
    this.palavra = this.resposta.map((x) => (x = "_"));
    this.letras = [];
    this.vidas = 6; // (1)O jogo deve iniciar com 6 vidas
  }

  chutar(chute) {
    chute = chute.toLowerCase();
    // (3) Todo chute deve conter apenas uma letra
    if (chute.length > 1) {
      return console.log(
        "Você insiriu mais caracteres do que permetido, tente novamente inserindo apenas uma letra"
      );
    }
    // Não consegui desenvolve a logica para a (4)
    // (4) Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada
    const letraVerificada = this.resposta.includes(chute);
    this.letras.push(chute);
    if (!letraVerificada) {
      this.vidas--; // (6) Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
    } else {
      for (let i = 0; i < this.resposta.length; i++) {
        if (this.resposta[i] === chute) {
          this.palavra.splice(i, 1, chute); // (7) Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição.
        }
      }
    }
  }

  buscarEstado() {
    if (this.vidas <= 0) {
      return "perdeu"; // (8) Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para perdeu.
    }
    for (let i = 0; i < this.resposta.length; i++) {
      if (this.resposta[i] !== this.palavra[i]) {
        return "aguardando chute"; // (2) O jogo deve iniciar com o estado aguardando chute.
      }
    }
    return "ganhou"; // (9) Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para ganhou
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    let letrasChutadas = this.letras; // (5) Toda chamada ao método chutar deve registrar a letra em letrasChutadas
    let palavra = this.palavra;
    let vidas = this.vidas;

    return {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
