import { ApiProperty } from "@nestjs/swagger"

export interface Movie{
    title:string
    description:string
    original_title:string
    rt_score:string
    release_date:string
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
