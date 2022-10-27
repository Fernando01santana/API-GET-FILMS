import { BadRequestException } from "@nestjs/common";
import api from "./BaseApi";


export class Api{

    async  getUser() {
        try {
          const response = await api.get('films');
          const {data} = response
          return data
        } catch (error) {
          throw new BadRequestException('Erro ao realizar chamada na API externa: '+error)
        }
      }
}



