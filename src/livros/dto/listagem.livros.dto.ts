export class ListagemLivrosDto {

    codLivro: number;
    titulo: string;
    nomeEditora: string;
    edicao: number;
    localLancamento: string;

    constructor(data: any) {
        this.codLivro = data.codLivro;
        this.titulo = data.titulo;
        this.edicao = data.edicao;
        this.localLancamento = data.localLancamento;
        this.nomeEditora = data.editoras.nomeEditora;
    }
}