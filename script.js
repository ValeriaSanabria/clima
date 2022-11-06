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


            let ahora = moment().startOf('hour').format('YYYY-MM-DD\THH:mm');
            console.log(ahora)
            climaHoy(data,ahora)
           //funcion para dar ubicacion en el array
            function climaHoy(data,ahora){
            let hoy = data.hourly.time.indexOf(ahora);
            console.log(hoy);
            return(hoy); //se retorna valor pero se tiene que reasignar fuera de la funcion
    }
        
    let indice = climaHoy(data,ahora);

            //Temperatura segun horario
        let temperatura = document.getElementById('temp');
        temperatura.innerHTML = `
            <div>
            <h3>${data.hourly.temperature_2m[indice]}°c</h3>
            </div> `;

            //Sensacion Termica segun horario
        let sens = document.getElementById('sens');
        sens.innerHTML = `
            <div>
            <h3>${data.hourly.apparent_temperature[indice]}°c</h3>
            </div> `;

            //Precipitation segun horario
        let precipitacion = document.getElementById('precip');
        precipitacion.innerHTML = `
            <div>
            <h3>${data.hourly.precipitation[indice]} mm</h3>
            </div> `;

            //Velocidad del viento segun horario
        let viento = document.getElementById('wind');
        viento.innerHTML = `
            <div>
            <h3>${data.hourly.windspeed_10m[indice]} Km/h</h3>
            </div> `;
    })

    

