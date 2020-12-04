import Jogador from '../classes/jogador';
import Clube from '../classes/clube';

class Personagem01 extends Clube {
    constructor() {
        super('Grêmio');
    }
}

const gremio = new Gremio();
const goleiro = new Jogador('Vanderlei', 1);
const zagueiro = new Jogador('Geromel', 4, true);
const meia = new Jogador('Jean Pierre', 10);
const atacante = new Jogador('Diego Solza', 9);

gremio.inscreverJogador(goleiro);
gremio.inscreverJogador(zagueiro);
gremio.inscreverJogador(meia);
gremio.inscreverJogador(atacante);

//gremio.trocarCapitao('Vanderlei');


export default gremio;