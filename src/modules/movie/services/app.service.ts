import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Api } from 'src/shared/api/Api';
import { Movie } from '../interface/movie.interface';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('Movie') 
    private movieDatabase:Model<Movie>,
    private apiService:Api){}
  async create():Promise<void> {
    const apiMovies = await this.apiService.getUser()
    try {
      for await (const iterator of apiMovies) {

        let movie = {
          title:iterator.title,
          description:iterator.description,
          original_title:iterator.original_title,
          rt_score:iterator.rt_score,
          release_date:iterator.release_date
        }
      
        await this.movieDatabase.create(movie)
      }
      return;
    } catch (error) {
      throw new BadRequestException('Erro ao salvar filmes na base de dados' + error)
    }

  }

  async findFilms(limit,page):Promise<any>{    
    return await this.movieDatabase.find().sort({release_date:1}).skip(page * limit).limit(limit)
  }
}
