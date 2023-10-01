let lon;
let lat;
let temperature = document.querySelector('.temp');
let city = document.querySelector('.city');
let icon = document.querySelector('.icon');
const kelvin = 273.15

document.addEventListener('DOMContentLoaded', () => {


	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition((position) => {

			console.log(position)
			lon = position.coords.longitude;
			lat = position.coords.latitude;

			const apiKey = '02031a9223cdf2bcf4f252e62d7fde6c';

			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

			fetch(url)
			.then((Response) =>{

				console.log("respuesta json");

				return Response.json();
			})
			.then((data) =>{
				console.log(data);

				temperature.textContent = Math.floor(data.main.temp - kelvin) + "°c";
				city.textContent = data.name + "," + data.sys.country;
			})



		}

		)
	}

})
