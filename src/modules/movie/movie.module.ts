import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { MovieSchema } from 'src/modules/movie/interface/movie.schema';
import { Api } from 'src/shared/api/Api';
import { AppController } from './controllers/app.controller';
import { MovieService } from './services/app.service';

config()
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Movie', schema: MovieSchema},
    ])
  ],
  controllers: [AppController],
  providers: [ MovieService,Api],
  exports:[ MovieService]
})
export class MovieModule {}


