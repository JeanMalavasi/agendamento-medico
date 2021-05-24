import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteController } from '../../controller/paciente.controller';
import { Paciente, PacienteSchema } from '../../schema/paciente.schema';
import { PacienteService } from '../../service/paciente.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Paciente.name, schema: PacienteSchema }])
  ],
  //Importa os controllers criados
  controllers: [
    PacienteController
  ],
  //Importa os providers criados
  providers: [
    PacienteService
  ],
})
export class PacienteModule {}
