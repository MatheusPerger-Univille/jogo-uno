import { Carta, Cor, Tipo } from "../carta.model";

export const BARALHO_COMPLETO: Carta[] = [
        {id: 1, numero: 0, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_0_NORMAL.svg'},
        {id: 2, numero: 1, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_1_NORMAL.svg'},
        {id: 3, numero: 2, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_2_NORMAL.svg'},
        {id: 4, numero: 3, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_3_NORMAL.svg'},
        {id: 5, numero: 4, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_4_NORMAL.svg'},
        {id: 6, numero: 5, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_5_NORMAL.svg'},
        {id: 7, numero: 6, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_6_NORMAL.svg'},
        {id: 8, numero: 7, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_7_NORMAL.svg'},
        {id: 9, numero: 8, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_8_NORMAL.svg'},
        {id: 10, numero: 9, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_9_NORMAL.svg'},
        {id: 11, numero: undefined, cor: Cor.VERMELHO, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'VERMELHO_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 12, numero: undefined, cor: Cor.VERMELHO, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'VERMELHO_SN_INVERTE_ESPECIAL.svg'},
        {id: 13, numero: undefined, cor: Cor.VERMELHO, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'VERMELHO_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 14, numero: 0, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_0_NORMAL.svg'},
        {id: 15, numero: 1, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_1_NORMAL.svg'},
        {id: 16, numero: 2, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_2_NORMAL.svg'},
        {id: 17, numero: 3, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_3_NORMAL.svg'},
        {id: 18, numero: 4, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_4_NORMAL.svg'},
        {id: 19, numero: 5, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_5_NORMAL.svg'},
        {id: 20, numero: 6, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_6_NORMAL.svg'},
        {id: 21, numero: 7, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_7_NORMAL.svg'},
        {id: 22, numero: 8, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_8_NORMAL.svg'},
        {id: 23, numero: 9, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_9_NORMAL.svg'},
        {id: 24, numero: undefined, cor: Cor.AMARELO, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'AMARELO_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 25, numero: undefined, cor: Cor.AMARELO, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'AMARELO_SN_INVERTE_ESPECIAL.svg'},
        {id: 26, numero: undefined, cor: Cor.AMARELO, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'AMARELO_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 27, numero: 0, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_0_NORMAL.svg'},
        {id: 28, numero: 1, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_1_NORMAL.svg'},
        {id: 29, numero: 2, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_2_NORMAL.svg'},
        {id: 30, numero: 3, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_3_NORMAL.svg'},
        {id: 31, numero: 4, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_4_NORMAL.svg'},
        {id: 32, numero: 5, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_5_NORMAL.svg'},
        {id: 33, numero: 6, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_6_NORMAL.svg'},
        {id: 34, numero: 7, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_7_NORMAL.svg'},
        {id: 35, numero: 8, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_8_NORMAL.svg'},
        {id: 36, numero: 9, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_9_NORMAL.svg'},
        {id: 37, numero: undefined, cor: Cor.VERDE, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'VERDE_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 38, numero: undefined, cor: Cor.VERDE, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'VERDE_SN_INVERTE_ESPECIAL.svg'},
        {id: 39, numero: undefined, cor: Cor.VERDE, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'VERDE_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 40, numero: 0, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_0_NORMAL.svg'},
        {id: 41, numero: 1, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_1_NORMAL.svg'},
        {id: 42, numero: 2, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_2_NORMAL.svg'},
        {id: 43, numero: 3, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_3_NORMAL.svg'},
        {id: 44, numero: 4, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_4_NORMAL.svg'},
        {id: 45, numero: 5, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_5_NORMAL.svg'},
        {id: 46, numero: 6, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_6_NORMAL.svg'},
        {id: 47, numero: 7, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_7_NORMAL.svg'},
        {id: 48, numero: 8, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_8_NORMAL.svg'},
        {id: 49, numero: 9, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_9_NORMAL.svg'},
        {id: 50, numero: undefined, cor: Cor.AZUL, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'AZUL_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 51, numero: undefined, cor: Cor.AZUL, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'AZUL_SN_INVERTE_ESPECIAL.svg'},
        {id: 52, numero: undefined, cor: Cor.AZUL, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'AZUL_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 53, numero: 1, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_1_NORMAL.svg'},
        {id: 54, numero: 2, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_2_NORMAL.svg'},
        {id: 55, numero: 3, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_3_NORMAL.svg'},
        {id: 56, numero: 4, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_4_NORMAL.svg'},
        {id: 57, numero: 5, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_5_NORMAL.svg'},
        {id: 58, numero: 6, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_6_NORMAL.svg'},
        {id: 59, numero: 7, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_7_NORMAL.svg'},
        {id: 60, numero: 8, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_8_NORMAL.svg'},
        {id: 61, numero: 9, cor: Cor.VERMELHO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERMELHO_9_NORMAL.svg'},
        {id: 62, numero: undefined, cor: Cor.VERMELHO, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'VERMELHO_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 63, numero: undefined, cor: Cor.VERMELHO, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'VERMELHO_SN_INVERTE_ESPECIAL.svg'},
        {id: 64, numero: undefined, cor: Cor.VERMELHO, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'VERMELHO_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 65, numero: 1, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_1_NORMAL.svg'},
        {id: 66, numero: 2, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_2_NORMAL.svg'},
        {id: 67, numero: 3, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_3_NORMAL.svg'},
        {id: 68, numero: 4, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_4_NORMAL.svg'},
        {id: 69, numero: 5, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_5_NORMAL.svg'},
        {id: 70, numero: 6, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_6_NORMAL.svg'},
        {id: 71, numero: 7, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_7_NORMAL.svg'},
        {id: 72, numero: 8, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_8_NORMAL.svg'},
        {id: 73, numero: 9, cor: Cor.AMARELO, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AMARELO_9_NORMAL.svg'},
        {id: 74, numero: undefined, cor: Cor.AMARELO, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'AMARELO_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 75, numero: undefined, cor: Cor.AMARELO, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'AMARELO_SN_INVERTE_ESPECIAL.svg'},
        {id: 76, numero: undefined, cor: Cor.AMARELO, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'AMARELO_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 77, numero: 1, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_1_NORMAL.svg'},
        {id: 78, numero: 2, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_2_NORMAL.svg'},
        {id: 79, numero: 3, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_3_NORMAL.svg'},
        {id: 80, numero: 4, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_4_NORMAL.svg'},
        {id: 81, numero: 5, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_5_NORMAL.svg'},
        {id: 82, numero: 6, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_6_NORMAL.svg'},
        {id: 83, numero: 7, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_7_NORMAL.svg'},
        {id: 84, numero: 8, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_8_NORMAL.svg'},
        {id: 85, numero: 9, cor: Cor.VERDE, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'VERDE_9_NORMAL.svg'},
        {id: 86, numero: undefined, cor: Cor.VERDE, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'VERDE_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 87, numero: undefined, cor: Cor.VERDE, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'VERDE_SN_INVERTE_ESPECIAL.svg'},
        {id: 88, numero: undefined, cor: Cor.VERDE, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'VERDE_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 89, numero: 1, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_1_NORMAL.svg'},
        {id: 90, numero: 2, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_2_NORMAL.svg'},
        {id: 91, numero: 3, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_3_NORMAL.svg'},
        {id: 92, numero: 4, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_4_NORMAL.svg'},
        {id: 93, numero: 5, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_5_NORMAL.svg'},
        {id: 94, numero: 6, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_6_NORMAL.svg'},
        {id: 95, numero: 7, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_7_NORMAL.svg'},
        {id: 96, numero: 8, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_8_NORMAL.svg'},
        {id: 97, numero: 9, cor: Cor.AZUL, especial: false, tipo: Tipo.NORMAL, nomeImagem: 'AZUL_9_NORMAL.svg'},
        {id: 98, numero: undefined, cor: Cor.AZUL, especial: true, tipo: Tipo.BLOQUEIO, nomeImagem: 'AZUL_SN_BLOQUEIO_ESPECIAL.svg'},
        {id: 99, numero: undefined, cor: Cor.AZUL, especial: true, tipo: Tipo.INVERTE_ORDEM, nomeImagem: 'AZUL_SN_INVERTE_ESPECIAL.svg'},
        {id: 100, numero: undefined, cor: Cor.AZUL, especial: true, tipo: Tipo.MAIS_DOIS, nomeImagem: 'AZUL_MAIS_DOIS_SN_ESPECIAL.svg'},

        {id: 101, numero: undefined, cor: undefined, especial: true, tipo: Tipo.MAIS_QUATRO, nomeImagem: 'MAIS_QUATRO_PRETO_ESPECIAL.svg'},
        {id: 102, numero: undefined, cor: undefined, especial: true, tipo: Tipo.MAIS_QUATRO, nomeImagem: 'MAIS_QUATRO_PRETO_ESPECIAL.svg'},
        {id: 103, numero: undefined, cor: undefined, especial: true, tipo: Tipo.MAIS_QUATRO, nomeImagem: 'MAIS_QUATRO_PRETO_ESPECIAL.svg'},
        {id: 104, numero: undefined, cor: undefined, especial: true, tipo: Tipo.MAIS_QUATRO, nomeImagem: 'MAIS_QUATRO_PRETO_ESPECIAL.svg'},

        {id: 105, numero: undefined, cor: undefined, especial: true, tipo: Tipo.ESCOLHE_COR, nomeImagem: 'CARTA_TRAS.svg'},
        {id: 106, numero: undefined, cor: undefined, especial: true, tipo: Tipo.ESCOLHE_COR, nomeImagem: 'CARTA_TRAS.svg'},
        {id: 107, numero: undefined, cor: undefined, especial: true, tipo: Tipo.ESCOLHE_COR, nomeImagem: 'CARTA_TRAS.svg'},
        {id: 108, numero: undefined, cor: undefined, especial: true, tipo: Tipo.ESCOLHE_COR, nomeImagem: 'CARTA_TRAS.svg'},
]
   
 