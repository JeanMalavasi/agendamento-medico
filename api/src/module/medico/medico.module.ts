import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicoController } from '../../controller/medico.controller';
import { Medico, MedicoSchema } from '../../schema/medico.schema';
import { MedicoService } from '../../service/medico.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Medico.name, schema: MedicoSchema }])
  ],
  //Importa os controllers criados
  controllers: [
    MedicoController
  ],
  //Importa os providers criados
  providers: [
    MedicoService
  ],
})
export class MedicoModule {}
