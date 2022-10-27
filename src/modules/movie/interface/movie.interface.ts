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