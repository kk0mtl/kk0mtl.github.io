const API_KEY = "bfe9932e805114d69410f0409a3a2e32";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_CALL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(API_CALL);
    fetch(API_CALL).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        console.log(data);
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
        city.innerText = `@${data.name}`;
    });
}

function onGeoErr(){
    alert("Can't find Geo");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);


