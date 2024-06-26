"use client";
import ApiCard from "@/components/ApiCard";
import { useState } from "react";
const page = () => {
  const allWeatherDescription = `Retrieve comprehensive weather data for all available locations. This API provides detailed information including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility. Perfect for applications that need a complete overview of weather across multiple regions.`;

  const cityWeatherDescription = `Get specific weather data for a particular city. This endpoint delivers detailed weather information such as temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility for the specified city. Ideal for apps focused on urban weather forecasting.`;

  const stateWeatherDescription = `Access weather details for a specific state. This API provides crucial weather metrics including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility tailored to the chosen state. Useful for state-wide weather monitoring and reporting.`;

  const countryWeatherDescription = `Fetch weather information for an entire country. This endpoint offers comprehensive weather data including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility for a specified country. Essential for applications that need country-wide weather data analysis.`;


  const code = `{
"_id": "667aac4f9d85d962342de82b",
"country": "USA",
"state": "California",
"city": "Los Angeles",
"temperature": "258",
"wind": "10",
"humidity": "60%",
"atmosphericPressure": "1015",
"weatherCondtion": "Sunny",
"sunriseTime": "6",
"sunsetTime": "18",
"uvIndex": "Moderate",
"visibility": "10 km",
"__v": 0
}
    `;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-9/12">
        <ApiCard
          apiUrl={"http://localhost:3000/api/weather/all"}
          description={allWeatherDescription}
          code={code}
        />
        <ApiCard
          apiUrl={"http://localhost:3000/api/weather/one?city=new delhi"}
          description={cityWeatherDescription}
          code={code}
        />
        <ApiCard
          apiUrl={"http://localhost:3000/api/weather/one?state=delhi"}
          description={stateWeatherDescription}
          code={code}
        />
        <ApiCard
          apiUrl={"http://localhost:3000/api/weather/one?country=india"}
          description={countryWeatherDescription}
          code={code}
        />
      </div>
    </div>
  );
};

export default page;
