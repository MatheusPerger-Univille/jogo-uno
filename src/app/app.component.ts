import { Component, NgModule, OnInit } from '@angular/core';
import { Carta, Cor, Tipo } from './carta.model';
import { BARALHO_COMPLETO } from './configs/baralho-completo.model';
import { JogadorEnum } from './jogador.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    PATH_IMAGE = "../assets/images/cartas/";
    PATH_CARTA_TRAZ = "CARTA_TRAS.svg";

    baralhoMaquina: Carta[];
    baralhoJogador: Carta[];
    baralhoComprar: Carta[];
    cartaAtualMesa: Carta;
    jogadorDaVez = JogadorEnum.JOGADOR;
    corDaVez: Cor;
    cartasJogadaJogador: Carta[] = [];

    showCartasComputador = false;

    get isComputador(): boolean {
        return this.jogadorDaVez === JogadorEnum.COMPUTADOR
    }

    constructor() {
	}

    ngOnInit(): void {
        this.iniciarJogo([...BARALHO_COMPLETO]);
    }

    private iniciarJogo(cartas: Carta[]) {

        const baralhoEmbaralhado = this.embaralhar(cartas);
        this.separarCartasJogadores(baralhoEmbaralhado);

        const indexPrimeiraCarta = this.baralhoComprar.findIndex(v => !v.especial);
        this.cartaAtualMesa = this.baralhoComprar[indexPrimeiraCarta];
        this.baralhoComprar.splice(indexPrimeiraCarta, 1);
        this.corDaVez = this.cartaAtualMesa.cor;
    }

    private embaralhar(cartas: Carta[]): Carta[] {
        return [...cartas].sort(() => Math.random() - 0.5);
    }

    private separarCartasJogadores(baralho: Carta[]) {

        this.baralhoMaquina = baralho.splice(0, 7);
        this.baralhoJogador = baralho.splice(0, 7);
        this.baralhoComprar = [...baralho];
    }

    onComprarCarta() {

        if (!this.isComputador && this.cartasJogadaJogador.length > 0) {
            alert('Não é possível comprar carta após ter jogado.');
            return;
        }

        const baralho = this.isComputador ? this.baralhoMaquina : this.baralhoJogador;

        const cartaComprada = this.comprarCarta(this.baralhoComprar);
        baralho.push(cartaComprada);
    }

    comprarCarta(baralho: Carta[]): Carta {
        return baralho.pop();
    }

    selecionouCarta(carta: Carta) {

        const isJogadaValida = this.validarJogada(carta);

        if (isJogadaValida) {

            this.realizarJogada(this.baralhoJogador, carta);

        } else {

            alert('Jogada inválida!');

        }
    }

    private realizarJogada(baralho: Carta[], carta: Carta) {

        const indexCarta = baralho.findIndex(v => carta.id === v.id);
        this.cartaAtualMesa = baralho.splice(indexCarta, 1)[0];

        if (!this.isComputador) {
            this.cartasJogadaJogador.push(this.cartaAtualMesa);
        }

        if (!baralho.length) {
            this.venceu(this.jogadorDaVez);
            return;
        }

        this.corDaVez = this.cartaAtualMesa.cor;
        
        if (this.cartaAtualMesa.tipo === Tipo.MAIS_DOIS) {

            const baralhoOponente = this.isComputador ? this.baralhoJogador : this.baralhoMaquina;

            for (let index = 0; index < 2; index++) {
                baralhoOponente.push(this.comprarCarta(this.baralhoComprar));
            }
            
        } else if (this.cartaAtualMesa.tipo === Tipo.MAIS_QUATRO) {
            const baralhoOponente = this.isComputador ? this.baralhoJogador : this.baralhoMaquina;

            for (let index = 0; index < 4; index++) {
                baralhoOponente.push(this.comprarCarta(this.baralhoComprar));
            }
            if (!this.isComputador) {
                document.getElementById("openModalButton").click();
            }
        } else if (this.cartaAtualMesa.tipo === Tipo.ESCOLHE_COR && !this.isComputador) {
            document.getElementById("openModalButton").click();
        }
 
    }

    private validarJogada(carta: Carta, cartaAtual?: Carta): boolean {
        
        const cartaAtualNaMesa = cartaAtual ? cartaAtual : this.cartaAtualMesa;

        let erro = false;
        if (!this.isComputador && this.cartasJogadaJogador.length > 0) {

            if (this.cartasJogadaJogador.some(v => !v.especial)) {
                erro = this.cartasJogadaJogador.filter(v => !v.especial).some(c => c.numero !== carta.numero);
            } else if (this.cartasJogadaJogador.some(v => v.especial && v.cor)) {
                erro = this.cartasJogadaJogador.filter(v => v.especial && v.cor).some(c => c.tipo !== carta.tipo);
            } else if (this.cartasJogadaJogador.some(v => v.tipo === Tipo.MAIS_QUATRO)) {
                erro = this.cartasJogadaJogador.filter(v => v.tipo === Tipo.MAIS_QUATRO).some(c => c.tipo !== Tipo.MAIS_QUATRO);
            } else if (this.cartasJogadaJogador.some(v => v.tipo === Tipo.ESCOLHE_COR)) {
                erro = this.cartasJogadaJogador.filter(v => v.tipo === Tipo.ESCOLHE_COR).some(c => c.tipo !== Tipo.ESCOLHE_COR);
            }

        }

        if (erro) {
            return false;
        }

        if (!carta.especial) {
            return this.validarJogadaCartaNormal(cartaAtualNaMesa, carta);
        } else {
            switch (carta.tipo) {
                case Tipo.BLOQUEIO:
                case Tipo.INVERTE_ORDEM:
                case Tipo.MAIS_DOIS:

                    return this.validarJogadaCartaEspecialComCor(cartaAtualNaMesa, carta);
                case Tipo.MAIS_QUATRO:
                    
                    return true
                case Tipo.ESCOLHE_COR:
                    
                    return true;
            }
        }
    }

    private validarJogadaCartaNormal(cartaAtualMesa: Carta, cartaSendoJogada: Carta): boolean {
        return (cartaAtualMesa.cor === cartaSendoJogada.cor || this.corDaVez === cartaSendoJogada.cor) || (cartaAtualMesa.numero === cartaSendoJogada.numero);
    }
    
    private validarJogadaCartaEspecialComCor(cartaAtualMesa: Carta, cartaSendoJogada: Carta) {
        return (cartaAtualMesa.cor === cartaSendoJogada.cor || this.corDaVez === cartaSendoJogada.cor) || (cartaAtualMesa.tipo === cartaSendoJogada.tipo);
    }

    private venceu(jogador: JogadorEnum) {

        if (jogador === JogadorEnum.COMPUTADOR) {
            alert('Computador venceu!');
        } else {
            alert('Jogador venceu!');
        }
    }

    private jogadaMaquina() {

        setTimeout(() => {
            this.realizarJogadaMaquina();
        }, 500);
    }

    private realizarJogadaMaquina() {
        const cartasEscolhidas = this.escolherCartas();

        if (cartasEscolhidas.length > 0) {
            
            const jogadaValida = cartasEscolhidas.every((v, i) => this.validarJogada(v, i > 0 ? cartasEscolhidas[i - 1] : undefined));
            if (jogadaValida) {
                cartasEscolhidas.forEach(c => this.realizarJogada(this.baralhoMaquina, c));

                if (!this.cartaAtualMesa.especial || this.cartaAtualMesa.tipo === Tipo.ESCOLHE_COR) {
                    this.jogadorDaVez = this.jogadorDaVez === JogadorEnum.COMPUTADOR ? JogadorEnum.JOGADOR : JogadorEnum.COMPUTADOR;
                }

                if (cartasEscolhidas.some(v => v.tipo === Tipo.ESCOLHE_COR) || cartasEscolhidas.some(v => v.tipo === Tipo.MAIS_QUATRO)) {
                    const cartasNaMao = this.baralhoMaquina.filter(v => !v.especial).map(v => v.cor).reduce((r,c) => (r[c] = (r[c] || 0) + 1, r), []);

                    if (cartasNaMao.length) {
                        const corComMaisCartas = Object.entries(cartasNaMao).sort(function(a,b) { return b[1] - a[1]})[0][0];
                        this.corDaVez = Cor[corComMaisCartas];
                    } else {
                        this.corDaVez = Cor.VERMELHO;
                    }
                    
                }

                if (this.isComputador) {
                    this.jogadaMaquina();
                }

            } else {
                alert('Jogada inválida!');
            }

        } else {
            this.onComprarCarta();
            this.realizarJogadaMaquina();
        }

        console.log(cartasEscolhidas);
    }

    private escolherCartas(): Carta[] {

        const baralho = [...this.baralhoMaquina];

        let cartas: Carta[] = [];

        if (baralho.some(v => v.cor === this.corDaVez)) {
            
            const cartasMesmoPadrao = baralho.filter(v => v.cor === this.corDaVez);

            let cartasPossiveisJogar = [];
            let indexJogar: number;
            cartasMesmoPadrao.forEach((c, i) => {
                const cartasIguais = baralho.filter(v => c.id !== v.id && ((v.numero === c.numero && v.tipo === c.tipo && !v.especial) || (v.tipo === c.tipo && v.especial)));
                if (cartasIguais.length > cartasPossiveisJogar.length) {
                    cartasPossiveisJogar = [...cartasIguais];
                    indexJogar = i;
                }
            });

            if (!indexJogar) {
                indexJogar = 0;
            }

            cartas = [cartasMesmoPadrao[indexJogar], ...cartasPossiveisJogar];

        } else if (baralho.some(v => v.numero === this.cartaAtualMesa.numero && !v.especial)) {
            
            const cartasMesmoPadrao = baralho.filter(v => v.numero === this.cartaAtualMesa.numero && !v.especial);

            let cartasPossiveisJogar = [];
            let indexJogar: number;
            cartasMesmoPadrao.forEach((c, i) => {
                const cartasIguais = baralho.filter(v => c.id !== v.id && ((v.numero === c.numero && v.tipo === c.tipo && !v.especial)));
                if (cartasIguais.length > cartasPossiveisJogar.length) {
                    cartasPossiveisJogar = [...cartasIguais];
                    indexJogar = i;
                }
            });

            if (!indexJogar) {
                indexJogar = 0;
            }

            cartas = [cartasMesmoPadrao[indexJogar], ...cartasPossiveisJogar];

        } else if (baralho.some(v => v.tipo === Tipo.MAIS_QUATRO)) {
            
            cartas = [...baralho.filter(v => v.tipo === Tipo.MAIS_QUATRO)];

        } else if (baralho.some(v => v.tipo === Tipo.ESCOLHE_COR)) {

            cartas = [...baralho.filter(v => v.tipo === Tipo.ESCOLHE_COR)];

        }

        return cartas;
    }

    onEncerrouJogada() {

        this.cartasJogadaJogador = [];

        if (!this.cartaAtualMesa.especial || this.cartaAtualMesa.tipo === Tipo.ESCOLHE_COR) {
            this.jogadorDaVez = JogadorEnum.COMPUTADOR;
            this.jogadaMaquina();
        }
    }

    onSelecionouCor(cor) {
        this.corDaVez = Cor[cor];
    }
}
