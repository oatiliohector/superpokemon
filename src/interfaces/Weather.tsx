interface WeatherData {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: number;
        temp_f: number;
        condition: {
            text: string;
        };
        wind_kph: number;
        wind_dir: string;
        humidity: number;
        pressure_mb: number;
    };
}

export default WeatherData;