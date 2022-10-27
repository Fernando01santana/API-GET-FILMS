import { ApiProperty } from "@nestjs/swagger"

export interface DataMovie{
    title:string
    description:string
    original_title:string
    rt_score:string
    release_date:string
}

export interface Movie extends Document{
    movie:DataMovie[]
}

export class IMovie{
    @ApiProperty()
    title:string

    @ApiProperty()
    description:string

    @ApiProperty()
    original_title:string

    @ApiProperty()
    rt_score:string

    @ApiProperty()
    release_date:string
}
