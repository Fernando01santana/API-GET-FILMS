import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
    title: { 
        type: String 
    },
    description: { 
        type: String 
    },
    original_title: { 
        type: String 
    },
    producer: { 
        type: String 
    },
    time_duration: {
       type:String
    },   
}, {
    timestamps: true, collection: 'EP' })



