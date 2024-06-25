import mongoose,{Schema,Document}  from "mongoose";


export interface WeatherSchemaType extends Document{
    country:string;
    state:string;
    city:string,
    temperature:string;
    wind:string;
    humidity:string;
    atmosphericPressure:string;
    weatherCondtion:string;
    sunriseTime:string;
    sunsetTime:string;
    uvIndex:string;
    visibility:string;
}


const weatherSchema:Schema<WeatherSchemaType> = new Schema ({
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },

    temperature:{
        type:String,
        required:true
    },
    wind:{
        type:String,
        required:true
    },
    humidity:{
        type:String,
        required:true
    },
    atmosphericPressure:{
        type:String,
        required:true
    },
    weatherCondtion:{
        type:String,
        required:true
    },
    sunriseTime:{
        type:String,
        required:true
    },
    sunsetTime:{
        type:String,
        required:true
    },

    uvIndex:{
        type:String,
        required:true
    },

    visibility:{
        type:String,
        required:true
    }
});

const WeatherModel = mongoose.models.Weather as mongoose.Model<WeatherSchemaType> || mongoose.model<WeatherSchemaType>("Weather",weatherSchema);

export default WeatherModel;