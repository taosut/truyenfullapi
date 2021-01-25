import * as mongoose  from 'mongoose';
export enum TYPE_STATUS_MANGA {
    ON_GOING=0,
    COMPLETE=1
}
export const mangaSchema:mongoose.Schema = new mongoose.Schema({
    name:String,
    author:String,
    category:[
        {type:String}
    ],
    image:String,
    views:{
        type:Number,
        default:0
    },
    description:String,
    url:String,
    manga_status:{
        type:Number,
        default:TYPE_STATUS_MANGA.ON_GOING
    },
    chapters:[
        {type:mongoose.Types.ObjectId,
        ref:'chapter'}
    ],
    first_chapter:{
        type:mongoose.Types.ObjectId,
        ref:'chapter'
    },
    chapter_update:{
        type:Date,
        default:Date.now
    },
    chapter_update_count:{
        type:Number,
        default:0
    },
    last_chapter:{
        type:mongoose.Types.ObjectId,
        ref:'chapter'
    },
    enable:{
        type:Boolean,
        default:true
    },
    commentCount:{
        type:Number,
        default:0
    },
    devices:[
        {
            type:String
        }
    ],
    user_follow:[
        {
            type:mongoose.Types.ObjectId,
            ref:'chapter'
        }
    ]
},{timestamps:true})
export interface Manga extends mongoose.Document {
    name?:string,
    author?:string,
    image?:string,
    views?:number,
    url?:string,
    manga_status?:number,
    enable?:boolean,
    description?:string,
    category?:Array<string>,
    chapters?:Array<string>,
    chapter_update?:Date,
    chapter_update_count?:number,
    source?:string,
    commentCount?:number,
    first_chapter?:string,
    devices?:Array<string>,
    user_follow?:Array<string>
}