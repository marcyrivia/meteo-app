let city = "Bagdad";

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=da9cb24a6099240a11d9da9cebf23d28&lang=fr&units=metric`)

.then(response => response.json())
.then(data => {
    console.log(data.city.population)

    let header = document.querySelector("#header");
for(const prevMeteo of data.list) {
  console.log(prevMeteo.dt_txt) // 2022-03-15 12:00:00 
}
    header.innerHTML += `
    <h2>${data.city.name}</h2>
    `

    header.appendChild(card);
})

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=da9cb24a6099240a11d9da9cebf23d28&lang=fr&units=metric`)

.then(response => response.json())
.then(data => {

  console.log(`Population of ${data.city.name}: ${data.city.population}`);

  const mainTemp = document.querySelector("#mainTemp");

  for (const prevMeteo of data.list) {
    console.log(prevMeteo.dt_txt);

    const temperature = prevMeteo.main.temp;
    const description = prevMeteo.weather[0].description;

    mainTemp.innerHTML = `
      <p class="date"><b>${prevMeteo.dt_txt}</b></p>
      <h2 class="temperature">${temperature}°C</h2>
      <p class="description">${description}</p>
    `;

    mainTemp.appendChild(card);
  }
});


fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=da9cb24a6099240a11d9da9cebf23d28&lang=fr&units=metric`)

.then(response => response.json())
.then(data => {

  console.log(`Population of ${data.city.name}: ${data.city.population}`);

  const tempWeek= document.querySelector("#tempWeek");

  for (const prevMeteo of data.list) {
    console.log(prevMeteo.dt_txt);

    const temperature = prevMeteo.main.temp;
    const description = prevMeteo.weather[0].description;

    const card = document.createElement("div");
    card.classList.add("tempMain");

    tempWeek.innerHTML = `
      <p class="date"><b>${prevMeteo.dt_txt}</b></p>
      <h2 class="temperature">${temperature}°C</h2>
      <p class="description">${description}</p>
    `;

    tempWeek.appendChild(card);
  }
});