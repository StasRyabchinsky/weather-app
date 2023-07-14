
const wrapper = document.querySelector('.wrapper')
const section = document.querySelector('.section')
const aside = document.querySelector('.daysForecast')
const search = document.getElementById('input');
const list = document.getElementById('list');
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
              fetch(sityNameWeather)
              .then(resp => resp.json())
              .then(dataSearch => {
                const {name} = dataSearch.location;
                const {daily_chance_of_rain} = dataSearch.forecast.forecastday[0].day;
                const {temp_c} = dataSearch.current;
                const {feelslike_c} = dataSearch.current;
                const {wind_kph} = dataSearch.current;
                const {uv} =dataSearch.current;
                const searchURL = `https:${dataSearch.current.condition.icon}`;
                
                //defaultForecast-day-time
                const searchForecastTime =[];
                for(let i = 6; i <= 21; i+=3){
                  const searchForecastHour = (dataSearch.forecast.forecastday[0].hour[i].time).slice(-5);
                  const searchForecastTemperature =  Math.round(dataSearch.forecast.forecastday[0].hour[i].temp_c);
                  const searchForecastURL = `https:${dataSearch.forecast.forecastday[0].hour[i].condition.icon}`;

                  searchForecastTime.push(
                    `<div class="forecastWeather__card">
                    <p class="forecastWeather__time">${searchForecastHour} am</p>
                    <img
                      src=${searchForecastURL}
                      alt=""
                      class="forecastWeather__url"
                    />
                    <h5 class="forecastWeather__temperature">${searchForecastTemperature}°</h5>
                  </div>`
                  )
                }
                
                //searchForecast-week
                const searchForecastWeek = [];
                for(let i = 0;i <= 6;i++){
                  const searchForecastOptions = {weekday:"short"}
                  const searchForecastDate = new Date(dataSearch.forecast.forecastday[i].date);
                  const today = new Date()
                  const searchForecastDayDay = (searchForecastDate.getDay() == today.getDay()) ? 'Today' : new Intl.DateTimeFormat('en-US', searchForecastOptions).format(searchForecastDate)
                  const searchForecastDayUrl = `https:${dataSearch.forecast.forecastday[i].day.condition.icon}`;
                  const searchForecastDayText = dataSearch.forecast.forecastday[i].day.condition.text;
                  const searchForecastDayMaxTemperature = dataSearch.forecast.forecastday[i].day.maxtemp_c;
                  const searchForecastDayMinTemperature = dataSearch.forecast.forecastday[i].day.mintemp_c;
                  searchForecastWeek.push (
                    `
                    <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchForecastDayDay}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchForecastDayUrl}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchForecastDayText}</h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchForecastDayMaxTemperature}</h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchForecastDayMinTemperature}</p>
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
                  src=${searchURL}
                  alt=""
                  class="sityWeatherUrl"
                />
              </div>
              <div class="forecastWeather mainSize backColor">
                <p class="__title">today's forecast</p>
                <div class="forecastWeather__cardContainer">
                  ${searchForecastTime.reduce(function(sum,current){
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
                ${searchForecastWeek.reduce(function(sum, current){
                  return sum +=current;
                })}
                </div>
              `;
              })
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

const weatherDefault = () => {
const defaultLocationWeather =`http://api.weatherapi.com/v1/forecast.json?key=85027d35f7674ae1891143314231107&q=Warsaw&days=7` ;

      fetch(defaultLocationWeather)
      .then(resp => resp.json())
      .then(datadefault => {
        const {name} = datadefault.location;
        const {daily_chance_of_rain} = datadefault.forecast.forecastday[0].day;
        const {temp_c} = datadefault.current;
        const {feelslike_c} = datadefault.current;
        const {wind_kph} = datadefault.current;
        const {uv} =datadefault.current;
        const defaultURL = `https:${datadefault.current.condition.icon}`;
        
        //defaultForecast-day-time
        const defaultForecastTime = [];
        for(let i = 6; i <= 21; i+=3){
          const defaultForecastHour = (datadefault.forecast.forecastday[0].hour[i].time).slice(-5);
          const defaultForecastTemperature =  Math.round(datadefault.forecast.forecastday[0].hour[i].temp_c);
          const defaultForecastURL = `https:${datadefault.forecast.forecastday[0].hour[i].condition.icon}`;

          defaultForecastTime.push(
            `<div class="forecastWeather__card">
            <p class="forecastWeather__time">${defaultForecastHour} am</p>
            <img
              src=${defaultForecastURL}
              alt=""
              class="forecastWeather__url"
            />
            <h5 class="forecastWeather__temperature">${defaultForecastTemperature}°</h5>
          </div>`
          )
        }

        //defaultForecast-week
        const defaultForecastWeek = [];
         for(let i = 0;i <= 6;i++){
          const defaultOptions = {weekday:"short"}
          const defaultDate = new Date(datadefault.forecast.forecastday[i].date);
          const today = new Date()
          const defaultDayDay = (defaultDate.getDay() == today.getDay()) ? 'Today' : new Intl.DateTimeFormat('en-US', defaultOptions).format(defaultDate)
          const defaultDayUrl = `https:${datadefault.forecast.forecastday[i].day.condition.icon}`;
          const defaultDayText = datadefault.forecast.forecastday[i].day.condition.text;
          const defaultDayMaxTemperature = datadefault.forecast.forecastday[i].day.maxtemp_c;
          const defaultDayMinTemperature = datadefault.forecast.forecastday[i].day.mintemp_c;
          defaultForecastWeek.push (
            `
            <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defaultDayDay}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defaultDayUrl}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defaultDayText}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defaultDayMaxTemperature}</h6>
              <p class="daysForecast__cardTemperatureMin">/${defaultDayMinTemperature}</p>
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
          src=${defaultURL}
          alt=""
          class="sityWeatherUrl"
        />
      </div>
      <div class="forecastWeather mainSize backColor">
        <p class="__title">today's forecast</p>
        <div class="forecastWeather__cardContainer">
        ${defaultForecastTime.reduce(function(sum, current){
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
        ${defaultForecastWeek.reduce(function(sum, current){
          return sum +=current;
        })}
      </div>
      `;
    })

}
document.addEventListener('DOMContentLoaded',weatherDefault)

const userlocation = () =>{
  wrapper.classList.toggle('spinner')

  const success = (position) =>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const latitudeLongitude = (latitude + ',' + longitude);
    const userLocationWeather =  `http://api.weatherapi.com/v1/forecast.json?key=85027d35f7674ae1891143314231107&q=${latitudeLongitude}&days=7` ;

    fetch(userLocationWeather)
    .then(res => res.json())
    .then(dataCurrent => {
      const {name} = dataCurrent.location;
      const {daily_chance_of_rain} = dataCurrent.forecast.forecastday[0].day;
      const {temp_c} = dataCurrent.current;
      const {feelslike_c} = dataCurrent.current;
      const {wind_kph} = dataCurrent.current;
      const {uv} =dataCurrent.current;
      const currentURL = dataCurrent.current.condition.icon;

      //currentForecast-day-time
      const currentForecastTime =[];
      for(let i = 6; i <= 21; i+=3){
        const currentForecastHour = (dataCurrent.forecast.forecastday[0].hour[i].time).slice(-5);
        const currentForecastTemperature =  Math.round(dataCurrent.forecast.forecastday[0].hour[i].temp_c);
        const currentForecastURL = `https:${dataCurrent.forecast.forecastday[0].hour[i].condition.icon}`;

        currentForecastTime.push(
          `<div class="forecastWeather__card">
          <p class="forecastWeather__time">${currentForecastHour} am</p>
          <img
            src=${currentForecastURL}
            alt=""
            class="forecastWeather__url"
          />
          <h5 class="forecastWeather__temperature">${currentForecastTemperature}°</h5>
        </div>`
        )
      }
      
      //currentForecast-week
      const currentForecastWeek = [];
      for(let i = 0;i <= 6;i++){
       const currentOptions = {weekday:"short"}
       const currentDate = new Date(dataCurrent.forecast.forecastday[i].date);
       const today = new Date()
       const currentForecastDayDay = (currentDate.getDay() == today.getDay()) ? 'Today' : new Intl.DateTimeFormat('en-US', currentOptions).format(currentDate)
       const currentForecastDayUrl = `https:${dataCurrent.forecast.forecastday[i].day.condition.icon}`;
       const currentForecastDayText = dataCurrent.forecast.forecastday[i].day.condition.text;
       const currentForecastDayMaxTemperature = dataCurrent.forecast.forecastday[i].day.maxtemp_c;
       const currentForecastDayMinTemperature = dataCurrent.forecast.forecastday[i].day.mintemp_c;
       currentForecastWeek.push (
         `
         <div class="daysForecast__card">
         <p class="daysForecast__cardDay">${currentForecastDayDay}</p>
         <div class="daysForecast__cardForecast">
           <img
             src=${currentForecastDayUrl}
             alt=""
             class="daysForecast__url"
           />
           <h6 class="daysForecast__urlText">${currentForecastDayText}</h6>
         </div>
         <div class="daysForecast__cardTemperature">
           <h6 class="daysForecast__cardTemperatureMax">${currentForecastDayMaxTemperature}</h6>
           <p class="daysForecast__cardTemperatureMin">/${currentForecastDayMinTemperature}</p>
         </div>
       </div>
         `
       )
      }

      wrapper.classList.toggle('spinner')

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
          src=${currentURL}
          alt=""
          class="sityWeatherUrl"
        />
      </div>
      <div class="forecastWeather mainSize backColor">
        <p class="__title">today's forecast</p>
        <div class="forecastWeather__cardContainer">
          ${currentForecastTime.reduce(function(sum, current){
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
        ${currentForecastWeek.reduce(function(sum, current){
          return sum +=current;
        })}
        </div>    
      `;
    })
    
  }
  const error = () =>{
      wrapper.classList.toggle('spinner')
  }
  
  navigator.geolocation.getCurrentPosition(success, error);
}
document.addEventListener('DOMContentLoaded',userlocation)





