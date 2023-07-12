
const wrapper = document.querySelector('.wrapper')
const section = document.querySelector('.section')
const aside = document.querySelector('.daysForecast')
const search = document.getElementById('input');
let list = document.getElementById('list');
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
                const searchlocation = dataSearch.location.name;
                const searchChanceOfRain = dataSearch.forecast.forecastday[0].day.daily_chance_of_rain;
                const searchTemp_c = dataSearch.current.temp_c;
                const searchRealFeel = dataSearch.current.feelslike_c;
                const searchWind = dataSearch.current.wind_kph;
                const searchUV =dataSearch.current.uv;
                const searchURL = dataSearch.current.condition.icon;
            
                const searchforecast6Temp =  Math.round(dataSearch.forecast.forecastday[0].hour[7].temp_c);
                const searchforecast6URL = dataSearch.forecast.forecastday[0].hour[7].condition.icon;
                const searchforecast9Temp = Math.round(dataSearch.forecast.forecastday[0].hour[10].temp_c);
                const searchforecast9URL = dataSearch.forecast.forecastday[0].hour[10].condition.icon;
                const searchforecast12Temp = Math.round(dataSearch.forecast.forecastday[0].hour[13].temp_c);
                const searchforecast12URL = dataSearch.forecast.forecastday[0].hour[13].condition.icon;
                const searchforecast15Temp = Math.round(dataSearch.forecast.forecastday[0].hour[16].temp_c);
                const searchforecast15URL = dataSearch.forecast.forecastday[0].hour[16].condition.icon;
                const searchforecast18Temp = Math.round(dataSearch.forecast.forecastday[0].hour[19].temp_c);
                const searchforecast18URL = dataSearch.forecast.forecastday[0].hour[19].condition.icon;
                const searchforecast21Temp = Math.round(dataSearch.forecast.forecastday[0].hour[22].temp_c);
                const searchforecast21URL = dataSearch.forecast.forecastday[0].hour[22].condition.icon;

                //7days-forecast

                const searchday_1_Day = 'Today';
                const searchday_1_Url = dataSearch.current.condition.icon;
                const searchday_1_Text = dataSearch.current.condition.text;
                const searchday_1_MaxTemp = dataSearch.forecast.forecastday[0].day.maxtemp_c;
                const searchday_1_MinTemp = dataSearch.forecast.forecastday[0].day.mintemp_c;

                const searchdate_2 = new Date(dataSearch.forecast.forecastday[1].date);
                const searchoptions2 = { weekday: 'short'};
                const searchday_2_Day = new Intl.DateTimeFormat('en-US', searchoptions2).format(searchdate_2)
                const searchday_2_Url = dataSearch.forecast.forecastday[1].day.condition.icon;
                const searchday_2_Text = dataSearch.forecast.forecastday[1].day.condition.text;
                const searchday_2_MaxTemp = dataSearch.forecast.forecastday[1].day.maxtemp_c;
                const searchday_2_MinTemp = dataSearch.forecast.forecastday[1].day.mintemp_c;

                const searchdate_3 = new Date(dataSearch.forecast.forecastday[2].date);
                const searchoptions3 = { weekday: 'short'};
                const searchday_3_Day = new Intl.DateTimeFormat('en-US', searchoptions3).format(searchdate_3)
                const searchday_3_Url = dataSearch.forecast.forecastday[2].day.condition.icon;
                const searchday_3_Text = dataSearch.forecast.forecastday[2].day.condition.text;
                const searchday_3_MaxTemp = dataSearch.forecast.forecastday[2].day.maxtemp_c;
                const searchday_3_MinTemp = dataSearch.forecast.forecastday[2].day.mintemp_c;

                const searchdate_4 = new Date(dataSearch.forecast.forecastday[3].date);
                const searchoptions4 = { weekday: 'short'};
                const searchday_4_Day = new Intl.DateTimeFormat('en-US', searchoptions4).format(searchdate_4)
                const searchday_4_Url = dataSearch.forecast.forecastday[3].day.condition.icon;
                const searchday_4_Text = dataSearch.forecast.forecastday[3].day.condition.text;
                const searchday_4_MaxTemp = dataSearch.forecast.forecastday[3].day.maxtemp_c;
                const searchday_4_MinTemp = dataSearch.forecast.forecastday[3].day.mintemp_c;

                const searchdate_5 = new Date(dataSearch.forecast.forecastday[4].date);
                const searchoptions5 = { weekday: 'short'};
                const searchday_5_Day = new Intl.DateTimeFormat('en-US', searchoptions5).format(searchdate_5)
                const searchday_5_Url = dataSearch.forecast.forecastday[4].day.condition.icon;
                const searchday_5_Text = dataSearch.forecast.forecastday[4].day.condition.text;
                const searchday_5_MaxTemp = dataSearch.forecast.forecastday[4].day.maxtemp_c;
                const searchday_5_MinTemp = dataSearch.forecast.forecastday[4].day.mintemp_c;

                const searchdate_6 = new Date(dataSearch.forecast.forecastday[5].date);
                const searchoptions6 = { weekday: 'short'};
                const searchday_6_Day = new Intl.DateTimeFormat('en-US', searchoptions6).format(searchdate_6)
                const searchday_6_Url = dataSearch.forecast.forecastday[5].day.condition.icon;
                const searchday_6_Text = dataSearch.forecast.forecastday[5].day.condition.text;
                const searchday_6_MaxTemp = dataSearch.forecast.forecastday[5].day.maxtemp_c;
                const searchday_6_MinTemp = dataSearch.forecast.forecastday[5].day.mintemp_c;

                const searchdate_7 = new Date(dataSearch.forecast.forecastday[6].date);
                const searchoptions7 = { weekday: 'short'};
                const searchday_7_Day = new Intl.DateTimeFormat('en-US', searchoptions7).format(searchdate_7)
                const searchday_7_Url = dataSearch.forecast.forecastday[6].day.condition.icon;
                const searchday_7_Text = dataSearch.forecast.forecastday[6].day.condition.text;
                const searchday_7_MaxTemp = dataSearch.forecast.forecastday[6].day.maxtemp_c;
                const searchday_7_MinTemp = dataSearch.forecast.forecastday[6].day.mintemp_c;

              const templateSection = `
                
                  <div class="sityWeather mainSize">
                    <div class="sityWeather__container">
                      <div class="sityWeather__containerForName">
                        <h3 class="sityWeather__name">${searchlocation}</h3>
                        <p class="sityWeather__chanceOfRain">Chance of rain: ${searchChanceOfRain}%</p>
                      </div>
                      <h2 class="sityWeather__temperature">${searchTemp_c}°</h2>
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
                      <div class="forecastWeather__card">
                        <p class="forecastWeather__time">6:00 am</p>
                        <img
                          src=${searchforecast6URL}
                          alt=""
                          class="forecastWeather__url"
                        />
                        <h5 class="forecastWeather__temperature">${searchforecast6Temp}°</h5>
                      </div>
                      <div class="forecastWeather__card">
                        <p class="forecastWeather__time">9:00 am</p>
                        <img
                          src=${searchforecast9URL}
                          alt=""
                          class="forecastWeather__url"
                        />
                        <h5 class="forecastWeather__temperature">${searchforecast9Temp}°</h5>
                      </div>
                      <div class="forecastWeather__card">
                        <p class="forecastWeather__time">12:00 am</p>
                        <img
                          src=${searchforecast12URL}
                          alt=""
                          class="forecastWeather__url"
                        />
                        <h5 class="forecastWeather__temperature">${searchforecast12Temp}°</h5>
                      </div>
                      <div class="forecastWeather__card">
                        <p class="forecastWeather__time">3:00 pm</p>
                        <img
                          src=${searchforecast15URL}
                          alt=""
                          class="forecastWeather__url"
                        />
                        <h5 class="forecastWeather__temperature">${searchforecast15Temp}°</h5>
                      </div>
                      <div class="forecastWeather__card">
                        <p class="forecastWeather__time">6:00 pm</p>
                        <img
                          src=${searchforecast18URL}
                          alt=""
                          class="forecastWeather__url"
                        />
                        <h5 class="forecastWeather__temperature">${searchforecast18Temp}°</h5>
                      </div>
                      <div class="forecastWeather__card">
                        <p class="forecastWeather__time">9:00 pm</p>
                        <img
                          src=${searchforecast21URL}
                          alt=""
                          class="forecastWeather__url"
                        />
                        <h5 class="forecastWeather__temperature">${searchforecast21Temp}°</h5>
                      </div>
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
                            ${searchRealFeel}°
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
                            ${searchChanceOfRain}%
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
                            ${searchWind} km/h
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
                            ${searchUV}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
              `;
              const templateAside = `
                <p class="__title">7-days forecast</p>
                <div class="daysForecast__main">
                  <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchday_1_Day}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchday_1_Url}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchday_1_Text}</h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchday_1_MaxTemp}</h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchday_1_MinTemp}</p>
                    </div>
                  </div>
                  <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchday_2_Day}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchday_2_Url}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchday_2_Text} </h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchday_2_MaxTemp} </h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchday_2_MinTemp}</p>
                    </div>
                  </div>
                  <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchday_3_Day}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchday_3_Url}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchday_3_Text}</h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchday_3_MaxTemp}</h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchday_3_MinTemp}</p>
                    </div>
                  </div>
                  <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchday_4_Day}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchday_4_Url}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchday_4_Text}</h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchday_4_MaxTemp}</h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchday_4_MinTemp}</p>
                    </div>
                  </div>
                  <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchday_5_Day}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchday_5_Url}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchday_5_Text}</h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchday_5_MaxTemp}</h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchday_5_MinTemp}</p>
                    </div>
                  </div>
                  <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchday_6_Day}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchday_6_Url}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchday_6_Text}</h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchday_6_MaxTemp}</h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchday_6_MinTemp}</p>
                    </div>
                  </div>
                  <div class="daysForecast__card">
                    <p class="daysForecast__cardDay">${searchday_7_Day}</p>
                    <div class="daysForecast__cardForecast">
                      <img
                        src=${searchday_7_Url}
                        alt=""
                        class="daysForecast__url"
                      />
                      <h6 class="daysForecast__urlText">${searchday_7_Text}</h6>
                    </div>
                    <div class="daysForecast__cardTemperature">
                      <h6 class="daysForecast__cardTemperatureMax">${searchday_7_MaxTemp}</h6>
                      <p class="daysForecast__cardTemperatureMin">/${searchday_7_MinTemp}</p>
                    </div>
                  </div>
                </div>
              `;
              section.innerHTML = templateSection;
              aside.innerHTML = templateAside;
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

const weatherDefoult = () => {
const defoltLocationWeather =`http://api.weatherapi.com/v1/forecast.json?key=85027d35f7674ae1891143314231107&q=Warsaw&days=7` ;

      fetch(defoltLocationWeather)
      .then(resp => resp.json())
      .then(datadefolt => {
        const defoltlocation = datadefolt.location.name;
        const defoltChanceOfRain = datadefolt.forecast.forecastday[0].day.daily_chance_of_rain;
        const defoltTemp_c = datadefolt.current.temp_c;
        const defoltRealFeel = datadefolt.current.feelslike_c;
        const defoltWind = datadefolt.current.wind_kph;
        const defoltUV =datadefolt.current.uv;
        const defoltURL = datadefolt.current.condition.icon;
    
        const defoltforecast6Temp =  Math.round(datadefolt.forecast.forecastday[0].hour[7].temp_c);
        const defoltforecast6URL = datadefolt.forecast.forecastday[0].hour[7].condition.icon;
        const defoltforecast9Temp = Math.round(datadefolt.forecast.forecastday[0].hour[10].temp_c);
        const defoltforecast9URL = datadefolt.forecast.forecastday[0].hour[10].condition.icon;
        const defoltforecast12Temp = Math.round(datadefolt.forecast.forecastday[0].hour[13].temp_c);
        const defoltforecast12URL = datadefolt.forecast.forecastday[0].hour[13].condition.icon;
        const defoltforecast15Temp = Math.round(datadefolt.forecast.forecastday[0].hour[16].temp_c);
        const defoltforecast15URL = datadefolt.forecast.forecastday[0].hour[16].condition.icon;
        const defoltforecast18Temp = Math.round(datadefolt.forecast.forecastday[0].hour[19].temp_c);
        const defoltforecast18URL = datadefolt.forecast.forecastday[0].hour[19].condition.icon;
        const defoltforecast21Temp = Math.round(datadefolt.forecast.forecastday[0].hour[22].temp_c);
        const defoltforecast21URL = datadefolt.forecast.forecastday[0].hour[22].condition.icon;

        //7days-forecast

        const defoltday_1_Day = 'Today';
        const defoltday_1_Url = datadefolt.current.condition.icon;
        const defoltday_1_Text = datadefolt.current.condition.text;
        const defoltday_1_MaxTemp = datadefolt.forecast.forecastday[0].day.maxtemp_c;
        const defoltday_1_MinTemp = datadefolt.forecast.forecastday[0].day.mintemp_c;

        const defoltdate_2 = new Date(datadefolt.forecast.forecastday[1].date);
        const defoltoptions2 = { weekday: 'short'};
        const defoltday_2_Day = new Intl.DateTimeFormat('en-US', defoltoptions2).format(defoltdate_2)
        const defoltday_2_Url = datadefolt.forecast.forecastday[1].day.condition.icon;
        const defoltday_2_Text = datadefolt.forecast.forecastday[1].day.condition.text;
        const defoltday_2_MaxTemp = datadefolt.forecast.forecastday[1].day.maxtemp_c;
        const defoltday_2_MinTemp = datadefolt.forecast.forecastday[1].day.mintemp_c;

        const defoltdate_3 = new Date(datadefolt.forecast.forecastday[2].date);
        const defoltoptions3 = { weekday: 'short'};
        const defoltday_3_Day = new Intl.DateTimeFormat('en-US', defoltoptions3).format(defoltdate_3)
        const defoltday_3_Url = datadefolt.forecast.forecastday[2].day.condition.icon;
        const defoltday_3_Text = datadefolt.forecast.forecastday[2].day.condition.text;
        const defoltday_3_MaxTemp = datadefolt.forecast.forecastday[2].day.maxtemp_c;
        const defoltday_3_MinTemp = datadefolt.forecast.forecastday[2].day.mintemp_c;

        const defoltdate_4 = new Date(datadefolt.forecast.forecastday[3].date);
        const defoltoptions4 = { weekday: 'short'};
        const defoltday_4_Day = new Intl.DateTimeFormat('en-US', defoltoptions4).format(defoltdate_4)
        const defoltday_4_Url = datadefolt.forecast.forecastday[3].day.condition.icon;
        const defoltday_4_Text = datadefolt.forecast.forecastday[3].day.condition.text;
        const defoltday_4_MaxTemp = datadefolt.forecast.forecastday[3].day.maxtemp_c;
        const defoltday_4_MinTemp = datadefolt.forecast.forecastday[3].day.mintemp_c;

        const defoltdate_5 = new Date(datadefolt.forecast.forecastday[4].date);
        const defoltoptions5 = { weekday: 'short'};
        const defoltday_5_Day = new Intl.DateTimeFormat('en-US', defoltoptions5).format(defoltdate_5)
        const defoltday_5_Url = datadefolt.forecast.forecastday[4].day.condition.icon;
        const defoltday_5_Text = datadefolt.forecast.forecastday[4].day.condition.text;
        const defoltday_5_MaxTemp = datadefolt.forecast.forecastday[4].day.maxtemp_c;
        const defoltday_5_MinTemp = datadefolt.forecast.forecastday[4].day.mintemp_c;

        const defoltdate_6 = new Date(datadefolt.forecast.forecastday[5].date);
        const defoltoptions6 = { weekday: 'short'};
        const defoltday_6_Day = new Intl.DateTimeFormat('en-US', defoltoptions6).format(defoltdate_6)
        const defoltday_6_Url = datadefolt.forecast.forecastday[5].day.condition.icon;
        const defoltday_6_Text = datadefolt.forecast.forecastday[5].day.condition.text;
        const defoltday_6_MaxTemp = datadefolt.forecast.forecastday[5].day.maxtemp_c;
        const defoltday_6_MinTemp = datadefolt.forecast.forecastday[5].day.mintemp_c;

        const defoltdate_7 = new Date(datadefolt.forecast.forecastday[6].date);
        const defoltoptions7 = { weekday: 'short'};
        const defoltday_7_Day = new Intl.DateTimeFormat('en-US', defoltoptions7).format(defoltdate_7)
        const defoltday_7_Url = datadefolt.forecast.forecastday[6].day.condition.icon;
        const defoltday_7_Text = datadefolt.forecast.forecastday[6].day.condition.text;
        const defoltday_7_MaxTemp = datadefolt.forecast.forecastday[6].day.maxtemp_c;
        const defoltday_7_MinTemp = datadefolt.forecast.forecastday[6].day.mintemp_c;

      const templateSection = `
        
          <div class="sityWeather mainSize">
            <div class="sityWeather__container">
              <div class="sityWeather__containerForName">
                <h3 class="sityWeather__name">${defoltlocation}</h3>
                <p class="sityWeather__chanceOfRain">Chance of rain: ${defoltChanceOfRain}%</p>
              </div>
              <h2 class="sityWeather__temperature">${defoltTemp_c}°</h2>
            </div>
            <img
              src=${defoltURL}
              alt=""
              class="sityWeatherUrl"
            />
          </div>
          <div class="forecastWeather mainSize backColor">
            <p class="__title">today's forecast</p>
            <div class="forecastWeather__cardContainer">
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">6:00 am</p>
                <img
                  src=${defoltforecast6URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${defoltforecast6Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">9:00 am</p>
                <img
                  src=${defoltforecast9URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${defoltforecast9Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">12:00 am</p>
                <img
                  src=${defoltforecast12URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${defoltforecast12Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">3:00 pm</p>
                <img
                  src=${defoltforecast15URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${defoltforecast15Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">6:00 pm</p>
                <img
                  src=${defoltforecast18URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${defoltforecast18Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">9:00 pm</p>
                <img
                  src=${defoltforecast21URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${defoltforecast21Temp}°</h5>
              </div>
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
                    ${defoltRealFeel}°
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
                    ${defoltChanceOfRain}%
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
                    ${defoltWind} km/h
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
                    ${defoltUV}
                  </h4>
                </div>
              </div>
            </div>
          </div>
      `;
      const templateAside = `
        <p class="__title">7-days forecast</p>
        <div class="daysForecast__main">
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defoltday_1_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defoltday_1_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defoltday_1_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defoltday_1_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${defoltday_1_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defoltday_2_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defoltday_2_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defoltday_2_Text} </h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defoltday_2_MaxTemp} </h6>
              <p class="daysForecast__cardTemperatureMin">/${defoltday_2_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defoltday_3_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defoltday_3_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defoltday_3_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defoltday_3_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${defoltday_3_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defoltday_4_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defoltday_4_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defoltday_4_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defoltday_4_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${defoltday_4_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defoltday_5_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defoltday_5_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defoltday_5_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defoltday_5_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${defoltday_5_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defoltday_6_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defoltday_6_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defoltday_6_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defoltday_6_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${defoltday_6_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${defoltday_7_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${defoltday_7_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${defoltday_7_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${defoltday_7_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${defoltday_7_MinTemp}</p>
            </div>
          </div>
        </div>
      `;
      section.innerHTML = templateSection;
      aside.innerHTML = templateAside;

      })

}
document.addEventListener('DOMContentLoaded',weatherDefoult)

const userlocation = () =>{
  wrapper.classList.toggle('spinner')

  const success = (position) =>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const latitudeLongitude = (latitude + ',' + longitude);
    const userLocationWeather =  `http://api.weatherapi.com/v1/forecast.json?key=85027d35f7674ae1891143314231107&q=${latitudeLongitude}&days=7` ;

    fetch(userLocationWeather)
    .then(res => res.json())
    .then(data => {
      const currentlocation = data.location.name;
      const currentChanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
      const currentTemp_c = data.current.temp_c;
      const currentRealFeel = data.current.feelslike_c;
      const currentWind = data.current.wind_kph;
      const currentUV =data.current.uv;
      const currentURL = data.current.condition.icon;

      const forecast6Temp =  Math.round(data.forecast.forecastday[0].hour[7].temp_c);
      const forecast6URL = data.forecast.forecastday[0].hour[7].condition.icon;
      const forecast9Temp = Math.round(data.forecast.forecastday[0].hour[10].temp_c);
      const forecast9URL = data.forecast.forecastday[0].hour[10].condition.icon;
      const forecast12Temp = Math.round(data.forecast.forecastday[0].hour[13].temp_c);
      const forecast12URL = data.forecast.forecastday[0].hour[13].condition.icon;
      const forecast15Temp = Math.round(data.forecast.forecastday[0].hour[16].temp_c);
      const forecast15URL = data.forecast.forecastday[0].hour[16].condition.icon;
      const forecast18Temp = Math.round(data.forecast.forecastday[0].hour[19].temp_c);
      const forecast18URL = data.forecast.forecastday[0].hour[19].condition.icon;
      const forecast21Temp = Math.round(data.forecast.forecastday[0].hour[22].temp_c);
      const forecast21URL = data.forecast.forecastday[0].hour[22].condition.icon;

      //7days-forecast

        const day_1_Day = 'Today';
        const day_1_Url = data.current.condition.icon;
        const day_1_Text = data.current.condition.text;
        const day_1_MaxTemp = data.forecast.forecastday[0].day.maxtemp_c;
        const day_1_MinTemp = data.forecast.forecastday[0].day.mintemp_c;

        const date_2 = new Date(data.forecast.forecastday[1].date);
        const options2 = { weekday: 'short'};
        const day_2_Day = new Intl.DateTimeFormat('en-US', options2).format(date_2)
        const day_2_Url = data.forecast.forecastday[1].day.condition.icon;
        const day_2_Text = data.forecast.forecastday[1].day.condition.text;
        const day_2_MaxTemp = data.forecast.forecastday[1].day.maxtemp_c;
        const day_2_MinTemp = data.forecast.forecastday[1].day.mintemp_c;

        const date_3 = new Date(data.forecast.forecastday[2].date);
        const options3 = { weekday: 'short'};
        const day_3_Day = new Intl.DateTimeFormat('en-US', options3).format(date_3)
        const day_3_Url = data.forecast.forecastday[2].day.condition.icon;
        const day_3_Text = data.forecast.forecastday[2].day.condition.text;
        const day_3_MaxTemp = data.forecast.forecastday[2].day.maxtemp_c;
        const day_3_MinTemp = data.forecast.forecastday[2].day.mintemp_c;

        const date_4 = new Date(data.forecast.forecastday[3].date);
        const options4 = { weekday: 'short'};
        const day_4_Day = new Intl.DateTimeFormat('en-US', options4).format(date_4)
        const day_4_Url = data.forecast.forecastday[3].day.condition.icon;
        const day_4_Text = data.forecast.forecastday[3].day.condition.text;
        const day_4_MaxTemp = data.forecast.forecastday[3].day.maxtemp_c;
        const day_4_MinTemp = data.forecast.forecastday[3].day.mintemp_c;

        const date_5 = new Date(data.forecast.forecastday[4].date);
        const options5 = { weekday: 'short'};
        const day_5_Day = new Intl.DateTimeFormat('en-US', options5).format(date_5)
        const day_5_Url = data.forecast.forecastday[4].day.condition.icon;
        const day_5_Text = data.forecast.forecastday[4].day.condition.text;
        const day_5_MaxTemp = data.forecast.forecastday[4].day.maxtemp_c;
        const day_5_MinTemp = data.forecast.forecastday[4].day.mintemp_c;

        const date_6 = new Date(data.forecast.forecastday[5].date);
        const options6 = { weekday: 'short'};
        const day_6_Day = new Intl.DateTimeFormat('en-US', options6).format(date_6)
        const day_6_Url = data.forecast.forecastday[5].day.condition.icon;
        const day_6_Text = data.forecast.forecastday[5].day.condition.text;
        const day_6_MaxTemp = data.forecast.forecastday[5].day.maxtemp_c;
        const day_6_MinTemp = data.forecast.forecastday[5].day.mintemp_c;

        const date_7 = new Date(data.forecast.forecastday[6].date);
        const options7 = { weekday: 'short'};
        const day_7_Day = new Intl.DateTimeFormat('en-US', options7).format(date_7)
        const day_7_Url = data.forecast.forecastday[6].day.condition.icon;
        const day_7_Text = data.forecast.forecastday[6].day.condition.text;
        const day_7_MaxTemp = data.forecast.forecastday[6].day.maxtemp_c;
        const day_7_MinTemp = data.forecast.forecastday[6].day.mintemp_c;

      
      const templateSection = `   
          <div class="sityWeather mainSize">
            <div class="sityWeather__container">
              <div class="sityWeather__containerForName">
                <h3 class="sityWeather__name">${currentlocation}</h3>
                <p class="sityWeather__chanceOfRain">Chance of rain: ${currentChanceOfRain}%</p>
              </div>
              <h2 class="sityWeather__temperature">${currentTemp_c}°</h2>
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
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">6:00 am</p>
                <img
                  src=${forecast6URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${forecast6Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">9:00 am</p>
                <img
                  src=${forecast9URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${forecast9Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">12:00 am</p>
                <img
                  src=${forecast12URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${forecast12Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">3:00 pm</p>
                <img
                  src=${forecast15URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${forecast15Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">6:00 pm</p>
                <img
                  src=${forecast18URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${forecast18Temp}°</h5>
              </div>
              <div class="forecastWeather__card">
                <p class="forecastWeather__time">9:00 pm</p>
                <img
                  src=${forecast21URL}
                  alt=""
                  class="forecastWeather__url"
                />
                <h5 class="forecastWeather__temperature">${forecast21Temp}°</h5>
              </div>
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
                    ${currentRealFeel}°
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
                    ${currentChanceOfRain}%
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
                    ${currentWind} km/h
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
                    ${currentUV}
                  </h4>
                </div>
              </div>
            </div>
          </div>
      `;
      const templateAside = `
      
        <p class="__title">7-days forecast</p>
        <div class="daysForecast__main">
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${day_1_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${day_1_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${day_1_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${day_1_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${day_1_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${day_2_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${day_2_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${day_2_Text} </h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${day_2_MaxTemp} </h6>
              <p class="daysForecast__cardTemperatureMin">/${day_2_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${day_3_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${day_3_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${day_3_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${day_3_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${day_3_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${day_4_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${day_4_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${day_4_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${day_4_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${day_4_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${day_5_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${day_5_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${day_5_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${day_5_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${day_5_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${day_6_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${day_6_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${day_6_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${day_6_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${day_6_MinTemp}</p>
            </div>
          </div>
          <div class="daysForecast__card">
            <p class="daysForecast__cardDay">${day_7_Day}</p>
            <div class="daysForecast__cardForecast">
              <img
                src=${day_7_Url}
                alt=""
                class="daysForecast__url"
              />
              <h6 class="daysForecast__urlText">${day_7_Text}</h6>
            </div>
            <div class="daysForecast__cardTemperature">
              <h6 class="daysForecast__cardTemperatureMax">${day_7_MaxTemp}</h6>
              <p class="daysForecast__cardTemperatureMin">/${day_7_MinTemp}</p>
            </div>
          </div>
        </div>    
      `;
      wrapper.classList.toggle('spinner')

      section.innerHTML = templateSection;
      aside.innerHTML = templateAside
    })
    
  }
  const error = () =>{
      wrapper.classList.toggle('spinner')
  }
  
  navigator.geolocation.getCurrentPosition(success, error);
}
document.addEventListener('DOMContentLoaded',userlocation)





