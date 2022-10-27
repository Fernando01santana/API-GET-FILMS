import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Api } from 'src/shared/api/Api';
import { DataMovie, Movie } from '../interface/movie.interface';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('Movie') 
    private movieDatabase:Model<Movie>,
    private apiService:Api){}
  async create() {
    const apiMovies = await this.apiService.getUser()
    const movies:DataMovie[] = []
    apiMovies.forEach(element => {
      let movie = {
        title:element.title,
        description:element.description,
        original_title:element.original_title,
        producer:element.producer,
        time_duration:element.running_time
      }
      movies.push(movie)
    });
    const movieSaves = await this.movieDatabase.create(movies)
    return movieSaves
  }
}
