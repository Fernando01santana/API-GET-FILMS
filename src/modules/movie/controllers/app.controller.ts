import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ┬áMovieService } from '../services/app.service';
import {ApiBody, ApiCreatedResponse, ApiQuery } from '@nestjs/swagger';
import {IMovie} from '../interface/movie.interface'
@Controller()
export class AppController {
  constructor(private readonly appService: ┬áMovieService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Filmes listados e criados com sucesso'})
  async create():Promise<void> {
    return this.appService.create()
  }

  @Get()
  @ApiCreatedResponse({ description: 'Filmes listados e criados com sucesso',type:IMovie})
  @ApiQuery({ name: 'page'})
  @ApiQuery({ name: 'limit'})
  async findFilms(@Query('page') page,@Query('limit') limit){
    return this.appService.findFilms(parseInt(limit),parseInt(page))
  }
}
