import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service.service';
import { ListagemLivrosDto } from './dto/listagem.livros.dto';

@Injectable()
export class LivrosService {

    constructor(private readonly prismaService: PrismaService) { }

    async getLivros(): Promise<ListagemLivrosDto[]> {
        const livros = await this.prismaService.livros.findMany({
            include: {
                editoras: true
            }
        });

        return livros.map(livro => new ListagemLivrosDto(livro));

    }
}
