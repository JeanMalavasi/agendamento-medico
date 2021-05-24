import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendaController } from '../../controller/agenda.controller';
import { Agenda, AgendaSchema } from '../../schema/agenda.schema';
import { AgendaService } from '../../service/agenda.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Agenda.name, schema: AgendaSchema }])
  ],
  //Importa os controllers criados
  controllers: [
    AgendaController
  ],
  //Importa os providers criados
  providers: [
    AgendaService
  ],
})
export class AgendaModule {}
