import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendaModule } from './module/agenda/agenda.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoModule } from './module/medico/medico.module';
import { PacienteModule } from './module/paciente/paciente.module';


@Module({
  imports: [
    //Realiza a conexão com o mongoDB
    MongooseModule.forRoot('mongodb://localhost/hospital'),
    //Importa os modulos criados, para que sejam acessados pelo resto do sistema
    MedicoModule,
    AgendaModule,
    PacienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
