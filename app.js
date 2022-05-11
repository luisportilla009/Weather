let apiWeather = {
    apiKey: 'd2098e4143daf7181aa6ce76f9d2119b',
    fetchWeather: function ( city ) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=es&appid=' + this.apiKey )
        .then( ( response ) => response.json() )
        .then( ( res ) => this.showWeather( res ) )
    },
    showWeather: function( res ) {
        const { name } = res;
        const { icon, description } = res.weather[0];
        const { temp, feels_like, humidity } = res.main;
        const { speed } = res.wind;
        const info = document.createElement( 'div' );
        const cityAndWeather = document.createElement( 'div' );
        const h1 = document.createElement( 'h1' );
        const desc = document.createElement ( 'div' );
        const imageAndTemp = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const temperature = document.createElement( 'h1' );
        const extraInfo = document.createElement( 'div' );
        const sensation = document.createElement( 'div' );
        const hum = document.createElement( 'div' );
        const windSpeed = document.createElement( 'div' );
        info.classList.add( 'info' );
        cityAndWeather.classList.add( 'city-and-weather' );
        h1.classList.add( 'name' );
        desc.classList.add( 'description' );
        imageAndTemp.classList.add( 'image-and-temp' );
        img.classList.add( 'icon' );
        temperature.classList.add( 'temp' );
        extraInfo.classList.add( 'extra-info' );
        sensation.classList.add( 'sensation' );
        hum.classList.add( 'humidity' );
        windSpeed.classList.add( 'speed' );
        h1.textContent = name;
        desc.textContent = description;
        img.src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        temperature.textContent = temp + '°C';
        sensation.textContent = 'Sensasión Termica: ' + feels_like + '°C';
        hum.textContent = 'Humedad: ' + humidity + '%';
        windSpeed.textContent = 'Viento: ' + speed + ' m/s';
        cityAndWeather.append( h1, desc );
        imageAndTemp.append( img, temperature );
        extraInfo.append( sensation, hum, windSpeed );
        info.append( cityAndWeather, imageAndTemp, extraInfo );
        document.querySelector('.main-container').append(info);
        document.querySelector('.input').value = '';
    },
    find: function () {
        this.fetchWeather(document.querySelector('.input').value);
      },
}

document.querySelector('button').addEventListener('click', function () {
    apiWeather.find();
  });
  
document.querySelector( '.input' ).addEventListener( 'keyup', function (event) {
    if ( event.key == 'Enter' ) {
      apiWeather.find();
    }
  });
  
  apiWeather.fetchWeather( 'Pasto' );