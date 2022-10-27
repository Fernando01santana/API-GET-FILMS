import { Body, Controller, Get, Post } from '@nestjs/common';
import {  MovieService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService:  MovieService) {}

  @Get()
  async find() {
    return this.appService.create()
  }
}
