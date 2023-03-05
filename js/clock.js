const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    const img = document.querySelector(".moringNight");
        let pic = '';

        if(hours <= 6 && hours >= 19){
            pic = "moon.png";
        }
        else{
            pic = "sun.png";
        }

        img.src=`img/${pic}`
}


getClock();
setInterval(getClock, 1000);