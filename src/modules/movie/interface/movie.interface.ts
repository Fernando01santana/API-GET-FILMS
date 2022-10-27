import { ApiProperty } from "@nestjs/swagger"

export interface DataMovie{
    title:string
    description:string
    original_title:string
    producer:string
    time_duration:string
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
    producer:string

    @ApiProperty()
    time_duration:string
}
