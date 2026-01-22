// Classes de um jogo
class Heroi{
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  
  atacar(){
    let ataque;
    
    switch(this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }
    const tipoMinusculo = this.tipo.toLowerCase();
    console.log(`o ${tipoMinusculo} atacou usando ${ataque}`);
  }
}

const primeiro_heroi = new Heroi("He-man", 1500, "Guerreiro");
const segundo_heroi = new Heroi("Doutor Estranho", 2600, "Monge");
const terceiro_heroi = new Heroi("Ainz Ooal Gown", 5000, "Mago");
const quarto_heroi = new Heroi("Naruto", 1200, "Ninja");

primeiro_heroi.atacar();
segundo_heroi.atacar();
terceiro_heroi.atacar();
quarto_heroi.atacar();

console.log("--- Ataque em grupo ---");
const grupoDeHerois = [primeiro_heroi, segundo_heroi, terceiro_heroi, quarto_heroi];

for (let i = 0; i < grupoDeHerois.length; i++) {
  grupoDeHerois[i].atacar();
}