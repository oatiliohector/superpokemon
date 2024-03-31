import { useState, useEffect } from "react";
import WeatherData from "../interfaces/Weather";

function WeatherAPI (){

    const [weather, setWeather] = useState<WeatherData | null> (null);
    const url = "http://api.weatherapi.com/v1/current.json?key=f8402992b1ea4e2a814222608240303&q=Sao_Paulo&aqi=no";

    useEffect(()=> {
        async function fecthData(){
            const res = await fetch(url);
            const data = await res.json();

            setWeather(data);
        }

        fecthData()
    }, []);

    return(
        <div>
            {weather?.location.name}
        </div>
    )
}

export default WeatherAPI;