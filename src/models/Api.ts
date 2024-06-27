import mongoose,{Schema,Document, Model} from 'mongoose';


export interface ApiSchemaType {
    title:string;
    description:string;
    apiUrl:string;
    jsonData:string;
}

const apiSchema:Schema<ApiSchemaType> = new Schema ({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    apiUrl:{
        type:String,
        required:true
    },
    jsonData:{
        type:String,
        required:true
    },
})

const ApiModel  = mongoose.models.Api as mongoose.Model<ApiSchemaType> || mongoose.model<ApiSchemaType>("Api",apiSchema);

export default ApiModel;