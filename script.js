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


fetch(apiClima)
    .then(res => res.json())
    .then(data => {
        console.log(data.hourly.time[0]);

        let horaActual = new Date;

        let dia = document.getElementById('dia');
        dia.innerHTML = `
                    <div>
                    <h5>${horaActual}</h5>
                    </div> `;
    })

fetch(apiClima)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.hourly.temperature_2m[0])
        let temperatura = document.getElementById('temp');
        temperatura.innerHTML = `
                        <div>
                        <h3>${data.hourly.temperature_2m[19]}</h3>
                        </div> `;
    })

fetch(apiClima)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.hourly.apparent_temperature[0])
        let sens = document.getElementById('sens');
        sens.innerHTML = `
                <div>
                <h3>${data.hourly.apparent_temperature[0]}</h3>
                </div> `;

    })


fetch(apiClima)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.hourly.precipitation[0])
        let precipitacion = document.getElementById('precip');
        precipitacion.innerHTML = `
    <div>
    <h3>${data.hourly.precipitation[0]}</h3>
    </div> `;

    })


fetch(apiClima)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.hourly.windspeed_10m[0]);
        let viento = document.getElementById('wind');
        viento.innerHTML = `
    <div>
    <h3>${data.hourly.windspeed_10m[0]}</h3>
    </div> `;

    })