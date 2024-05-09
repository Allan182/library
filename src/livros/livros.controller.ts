import { Controller, Get } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { ListagemLivrosDto } from './dto/listagem.livros.dto';

@Controller('livros')
export class LivrosController {

    constructor(private readonly livrosService: LivrosService) { }

    @Get()
    async getLivros(): Promise<ListagemLivrosDto[]> {
        return await this.livrosService.getLivros();
    }
}
