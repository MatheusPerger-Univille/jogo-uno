export class Carta {

    public id: number;
    public numero: number;
    public cor: Cor;
    public especial: boolean;
    public tipo: Tipo;
    public nomeImagem: string;
}

export enum Cor {
    VERMELHO = 'VERMELHO',
    AZUL = 'AZUL',
    VERDE = 'VERDE', 
    AMARELO = 'AMARELO'
}

export enum Tipo {
    MAIS_QUATRO = 'MAIS_QUATRO',
    MAIS_DOIS = 'MAIS_DOIS',
    INVERTE_ORDEM = 'INVERTE_ORDEM',
    BLOQUEIO = 'BLOQUEIO',
    ESCOLHE_COR = 'ESCOLHE_COR',
    NORMAL = 'NORMAL'
}
