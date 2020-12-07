import * as mongoose  from 'mongoose';
import { Manga } from './manga.model';
export const chapterSchema:mongoose.Schema = new mongoose.Schema({
    manga:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"manga"
    },
    index:{
        type:Number,
        default:1
    },
    title:{
        type:String
    },
    url:{
        type:String
    },
    content:{
        type:String
    },
    images:[
        {
            type:String
        }
    ]
},{timestamps:true})
chapterSchema.index({source:1})
export interface Chapter extends mongoose.Document {
    manga:string|Manga,
    index?:number,
    source?:string,
    images?:string[],
    content?:string,
    title?:string,
    url?:string,
    status_update_images?:boolean
}