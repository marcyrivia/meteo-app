let city = "Bagdad";

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=da9cb24a6099240a11d9da9cebf23d28&lang=fr&units=metric`)

.then(response => response.json())
.then(data => {
    console.log(data.city.population)
})