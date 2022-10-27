import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './modules/movie/controllers/app.controller';
import {  MovieService } from './modules/movie/services/app.service';
import { config } from 'dotenv';
import { MovieSchema } from './modules/movie/interface/movie.schema';
import { MovieModule } from './modules/movie/movie.module';

config()
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://fernando:Santana2002@cluster0.bysac1u.mongodb.net/?retryWrites=true&w=majority`,
    ),MovieModule
  ],
})
export class AppModule {}


