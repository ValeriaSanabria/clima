const apiClima = "https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo";

fetch(apiClima)
    .then(res => res.json())
    .then(data => {
        
        //Horario
        let horaActual = new Date;
        let dia = document.getElementById('dia');
        dia.innerHTML = `
            <div>
            <h5>${horaActual}</h5>
            </div> `;

            //Temperatura segun horario
        let temperatura = document.getElementById('temp');
        temperatura.innerHTML = `
            <div>
            <h3>${data.hourly.temperature_2m[19]}</h3>
            </div> `;

            //Sensacion Termica segun horario
        let sens = document.getElementById('sens');
        sens.innerHTML = `
            <div>
            <h3>${data.hourly.apparent_temperature[0]}</h3>
            </div> `;

            //Precipitation segun horario
        let precipitacion = document.getElementById('precip');
        precipitacion.innerHTML = `
            <div>
            <h3>${data.hourly.precipitation[0]}</h3>
            </div> `;

            //Velocidad del viento segun horario
        let viento = document.getElementById('wind');
        viento.innerHTML = `
            <div>
            <h3>${data.hourly.windspeed_10m[0]}</h3>
            </div> `;
    })