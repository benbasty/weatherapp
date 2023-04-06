const API_KEY = "88e0f4096fe79bbf2b6cba26ec6e69d6";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
        .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lon,lat},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        wind: {speed},
        dt,
        sys: {country, sunrise, sunset},
        weather,
        name
    } = data;
    const {
        main: details, icon
    } = weather[0];
    return {
        lon, lat, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed
    }
}

const formatForeCastWeather = () => {
    // 1:24:55
}

const getFormattedCurrentWeather = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
        ('weather', searchParams).then(formatCurrentWeather);
    const {lat, lon} = formattedCurrentWeather;
    const formattedForeCastWeather = await getWeatherData('onecall',{
        lat,lon, exclude: 'current,minutely,alerts', units: searchParams.units
    }).then(formatForeCastWeather)
    return formattedCurrentWeather
}

export default getFormattedCurrentWeather;