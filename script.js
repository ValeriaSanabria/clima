const apiClima = "https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo";

fetch(apiClima)
    .then(res => res.json())
    .then(data => {
        console.log(data.hourly.time[0]);
        console.log(data.hourly.temperature_2m[0]);
        console.log(data.hourly.apparent_temperature[0]);


        let mostrar = document.getElementById('test');
        mostrar.innerHTML = `
                <div>
                <h1>${data.hourly.temperature_2m[0]}</h1>
                </div> `;
    })
