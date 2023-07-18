
const wrapper = document.querySelector('.wrapper')
const section = document.querySelector('.section')
const aside = document.querySelector('.daysForecast')
const search = document.getElementById('input');
const list = document.getElementById('list');

const currentWeather = (url) => {
  const LocationWeather = url;
      fetch(LocationWeather)
      .then(resp => resp.json())
      .then(data => {
        const {name} = data.location;
        const {daily_chance_of_rain} = data.forecast.forecastday[0].day;
        const {temp_c} = data.current;
        const {feelslike_c} = data.current;
        const {wind_kph} = data.current;
        const {uv} =data.current;
        const URL = `https:${data.current.condition.icon}`;
       
        //Forecast-day-time
        const ForecastTime = [];
        for(let i = 6; i <= 21; i+=3){
          const ForecastHour = (data.forecast.forecastday[0].hour[i].time).slice(-5);
          const ForecastTemperature =  Math.round(data.forecast.forecastday[0].hour[i].temp_c);
          const ForecastURL = `https:${data.forecast.forecastday[0].hour[i].condition.icon}`;

          ForecastTime.push(
            `<div class="forecastWeather__card">
            <p class="forecastWeather__time">${ForecastHour} am</p>
            <img
              src=${ForecastURL}
              alt=""
              class="forecastWeather__url"
            />
            <h5 class="forecastWeather__temperature">${ForecastTemperature}°</h5>
          </div>`
          )
        }

        //Forecast-week
        const ForecastWeek = [];
         for(let i = 0;i <= 6;i++){
          const Options = {weekday:"short"}
          const currentDate = new Date(data.forecast.forecastday[i].date);
          const today = new Date()
          const DayDay = (currentDate.getDay() == today.getDay()) ? 'Today' : new Intl.DateTimeFormat('en-US', Options).format(currentDate)
          const DayUrl = `https:${data.forecast.forecastday[i].day.condition.icon}`;
          const DayText = data.forecast.forecastday[i].day.condition.text;
          const DayMaxTemperature = data.forecast.forecastday[i].day.maxtemp_c;
          const DayMinTemperature = data.forecast.forecastday[i].day.mintemp_c;
          ForecastWeek.push (
            `
            <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${DayDay}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${DayUrl}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${DayText}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${DayMaxTemperature}</h6>
              <p class="daysForecast__cardTemperatureMin">/${DayMinTemperature}</p>
            </div>
          </div>
            `
          )
         }
      
      section.innerHTML = `
      <div class="sityWeather mainSize">
        <div class="sityWeather__container">
          <div class="sityWeather__containerForName">
            <h3 class="sityWeather__name">${name}</h3>
            <p class="sityWeather__chanceOfRain">Chance of rain: ${daily_chance_of_rain}%</p>
          </div>
          <h2 class="sityWeather__temperature">${temp_c}°</h2>
        </div>
        <img
          src=${URL}
          alt=""
          class="sityWeatherUrl"
        />
      </div>
      <div class="forecastWeather mainSize backColor">
        <p class="__title">today's forecast</p>
        <div class="forecastWeather__cardContainer">
        ${ForecastTime.reduce(function(sum, current){
          return sum +=current;
        })}
        </div>
      </div>
      <div class="weatherConditions mainSize backColor">
        <div class="weatherConditions__titleContainer">
          <p class="__title">air conditions</p>
          <a href="#">See more</a>
        </div>
        <div class="weatherConditions__mainContainer">
          <div class="weatherConditions__main">
            <div class="weatherConditions__card">
              <div class="weatherConditions__cardCondition">
                <img src="./assets/svg/conditionTermometr.svg" alt="" />
                <p>Real Feel</p>
              </div>
              <h4
                class="weatherConditions__temperature weatherConditions__mainCondition"
              >
                ${feelslike_c}°
              </h4>
            </div>
            <div class="weatherConditions__card">
              <div class="weatherConditions__cardCondition">
                <img src="./assets/svg/conditionRain.svg" alt="" />
                <p>Chance of Rain</p>
              </div>
              <h4
                class="weatherConditions__chanceRain weatherConditions__mainCondition"
              >
                ${daily_chance_of_rain}%
              </h4>
            </div>
          </div>

          <div class="weatherConditions__main">
            <div class="weatherConditions__card">
              <div class="weatherConditions__cardCondition">
                <img src="./assets/svg/conditionWind.svg" alt="" />
                <p>Wind</p>
              </div>
              <h4
                class="weatherConditions__wind weatherConditions__mainCondition"
              >
                ${wind_kph} km/h
              </h4>
            </div>
            <div class="weatherConditions__card">
              <div class="weatherConditions__cardCondition">
                <img src="./assets/svg/conditionUVIndex.svg" alt="" />
                <p>UV Index</p>
              </div>
              <h4
                class="weatherConditions__uvIndex weatherConditions__mainCondition"
              >
                ${uv}
              </h4>
            </div>
          </div>
        </div>
      </div>
       `;
      aside.innerHTML = `
      <p class="__title">7-days forecast</p>
      <div class="daysForecast__main">
        ${ForecastWeek.reduce(function(sum, current){
          return sum +=current;
        })}
      </div>
      `;
    })

}

const openList = () =>{
  search.classList.add('active');
  list.classList.add('active');
  
}
const openListSearch = () =>{
  search.classList.add('active');
  list.classList.add('active');
  
  const searchValue =document.getElementById('input').value;

  const arrSearch =`http://api.weatherapi.com/v1/search.json?key=85027d35f7674ae1891143314231107&q=${searchValue}` ;
    fetch(arrSearch)
      .then(resp => resp.json())
      .then(dataSearch => {
        const arrLength = dataSearch.length;
        let list = document.getElementById('list');
            list.replaceChildren();

        for(let i = 0; i <= arrLength-1; i++ ){
          let listEl = document.createElement('a');
              listEl.innerHTML = `${dataSearch[i].name} <span> — ${dataSearch[i].country} </span>`;
              listEl.className = 'main__search__btn';
              list.appendChild(listEl);
        }

        let usersNode = list.childNodes
            usersNode.forEach(user => {
            user.addEventListener("click", click, false);
            });
            function click() {
              const sityNameCountry = this.textContent;
              const sityName = sityNameCountry.substring(0, sityNameCountry.indexOf('—', 0));
              const sityNameWeather =`http://api.weatherapi.com/v1/forecast.json?key=85027d35f7674ae1891143314231107&q=${sityName}&days=7` ;
              document.getElementById('input').value ="";
              list.replaceChildren();
              
              currentWeather(sityNameWeather)

            }
      })
}
search.addEventListener('mouseenter',openList);
search.addEventListener('input',openListSearch);

const closeList =() =>{
  search.classList.remove('active');
  list.classList.remove('active');
}

document.addEventListener('click', e =>{
  let target = e.target;
  const its_search = target == search || search.contains(target);
  if(!its_search){
    closeList();
  }
})
list.addEventListener('mouseleave',closeList);

currentWeather(`http://api.weatherapi.com/v1/forecast.json?key=85027d35f7674ae1891143314231107&q=Warsaw&days=7`)

const userlocation = () =>{
  wrapper.classList.toggle('spinner')

  const success = (position) =>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const latitudeLongitude = (latitude + ',' + longitude);
    const userLocationWeather =  `http://api.weatherapi.com/v1/forecast.json?key=85027d35f7674ae1891143314231107&q=${latitudeLongitude}&days=7` ;
    
    currentWeather(userLocationWeather);

    wrapper.classList.toggle('spinner')
  }
  const error = () =>{
      wrapper.classList.toggle('spinner')
  }
  
  navigator.geolocation.getCurrentPosition(success, error);
}
document.addEventListener('DOMContentLoaded',userlocation)





