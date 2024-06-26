"use client";
import ApiCard from "@/components/ApiCard";
interface ParamsType{
    params:{
        apiName:string;
    }
}
const page = ({params}:ParamsType) => {

    const des =`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
    harum molestiae eum, exercitationem consectetur doloribus! Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Cum, reprehenderit`;

    let code = `{
      "country": "USA",
      "state": "California",
      "city": "goa",
      "temperature": "258",
      "wind": "10",
      "humidity": "60%",
      "atmosphericPressure": "1015",
      "weatherCondtion": "Sunny",
      "sunriseTime": "6",
      "sunsetTime": "18",
      "uvIndex": "Moderate",
      "visibility": "10 km"
    }
    `;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-9/12">
      <ApiCard apiUrl={"localhost/api/product/all"} description={des} code={code}/>
      <ApiCard apiUrl={"localhost/api/jack/one"} description={des} code={code}/>
      </div>
    </div>
  )
}

export default page