import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { PrismaService } from 'src/prisma.service.service';

@Module({
    providers: [LivrosService, PrismaService],
    controllers: [LivrosController]
})

export class LivrosModule {

}


// GET -> Listar todos
    // codLivro; titulo; nomeEditora; edicao; localLancamento; 

// GET -> listar por id
// GET -> detalhes livro

// POST -> cadastrar livros