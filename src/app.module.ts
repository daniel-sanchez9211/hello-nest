import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from './dogs/dogs.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://daniel-sanchez:HuvqCuFrP3EVJvr0@cluster0.6o7mm.mongodb.net/test"),
  DogsModule,
  OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
