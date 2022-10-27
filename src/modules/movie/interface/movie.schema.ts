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
    rt_score: { 
        type: String 
    },
    release_date: {
       type:String
    },   
}, {
    timestamps: true, collection: 'EP' })



