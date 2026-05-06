import React, { useState } from 'react';

function WeatherApp(props) {
    const [city,setCity]=useState("");
    const [weather,setWeather]=useState(null);

    const getWeather=async()=>{
        if(city==="")return;

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e224db0fa110dd50de6efc015f8714f9&units=metric`; 

        const res=await fetch(url);
        const data=await res.json();
        setWeather(data);
    };

    let bg="bg-blue-200";

    if(weather?.weather?.[0]?.main==="Clear"){   
        bg="bg-yellow-100";
    }else if(weather?.weather?.[0]?.main==="Rain"){
        bg="bg-blue-600";
    }else if(weather?.weather?.[0]?.main==="Clouds"){ 
        bg="bg-grey-500";
    }

    let message="";

    if(weather && weather.main){   
        if(weather.main.temp>30){
            message="Stay hydrated";
        }else if(weather.main.temp<15){
            message="Wear Jacket";
        }else{
            message="Perfect weather for walk";
        }
    }

    return (
        <div className={`min-h-screen flex flex-col items-center p-6 ${bg}`}>
            <h1 className='text-3xl font-bold mb-4'>Weather App</h1>

            <div>
                <input 
                    type='text' 
                    placeholder='Enter City..' 
                    value={city}
                    onChange={(e)=>setCity(e.target.value)} 
                    className='border p-2 rounded'
                />

                <button 
                    onClick={getWeather} 
                    className='bg-black text-white px-5 py-2 rounded'>
                    Search
                </button>
            </div>

            {weather && weather.cod === 200 && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature:{weather.main?.temp} °C</p>   
                    <p>Weather:{weather.weather?.[0]?.main}</p> 
                    <p>Humidity:{weather.main?.humidity}%</p>
                    <p>Wind Speed:{weather.wind?.speed} m/s</p>
                </div>
            )}

        </div>
    );
}

export default WeatherApp;