API_KEY = 'DEMO_KEY';

API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

async function getWeather(){
    const fetched = await fetch(API_URL)
    const result = await fetched.json()
    console.log(result)
}

getWeather();