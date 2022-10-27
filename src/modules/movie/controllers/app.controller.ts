import { Body, Controller, Get, Post } from '@nestjs/common';
import {  MovieService } from '../services/app.service';
import {ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import {IMovie} from '../interface/movie.interface'
@Controller()
export class AppController {
  constructor(private readonly appService:  MovieService) {}

  @Get()
  @ApiCreatedResponse({ description: 'Filmes listados e criados com sucesso',type:IMovie})
  async find() {
    return this.appService.create()
  }
}
