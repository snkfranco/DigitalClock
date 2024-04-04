const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const apiKey = '7c6c24c61e22868e3ef91ab6df66e554';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=ituiutaba';

async function checkWeather(){
    let cidade = document.querySelector('.search_city').value; // Pegar o valor digitado no input
    if (cidade === '') {
        cidade = 'Ituiutaba'; // Se nenhum valor for digitado, manter Ituiutaba como a cidade padrão
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cidade}&appid=${apiKey}`; // Construir a URL da API com base no valor do input

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =  Math.round(data.main.temp)  + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
}

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    // let weather = GeolocationCoordinates();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
})

checkWeather()

document.addEventListener("DOMContentLoaded", function() {
    const menuBotao = document.querySelector(".menu .material-icons");
    const menuFlutuante = document.querySelector(".menu-flutuante");
    const searchButton = document.querySelector(".search_city_button"); // Selecionar o botão de busca

    menuBotao.addEventListener("click", function() {
        menuFlutuante.classList.toggle("mostrar");
    });

    searchButton.addEventListener("click", function() {
        checkWeather(); // Chamar a função checkWeather() quando o botão de busca for pressionado
        // menuFlutuante.classList.remove("mostrar"); // Remover a classe "mostrar" do menu flutuante
    });

    document.addEventListener("click", function(event) {
        if (!menuBotao.contains(event.target) && !menuFlutuante.contains(event.target)) {
            menuFlutuante.classList.remove("mostrar");
        }
    });
});
