function livelyPropertyListener(name, val) {
  switch(name) {
    case "sceneMargin":
      positionDateContainer(-val);
      positionWeatherContainer(-val);
      updateSceneMargin(-val);
      break;
    case "sceneColor":
      dateContainer.style.color = val;
      weatherContainer.style.color = val;
      weatherIcon.setAttribute("style","fill:"+val);
      break;
    case "sceneAdjustWeather":
      root.adjustSceneToWeather = val;
      if (!val) {
        document.getElementById("sceneS1").style.visibility = 'visible';
        document.getElementById("sceneS2").style.visibility = 'visible';
      } else 
        showWeather(root.weatherData);
      break;
    case "weatherShow":
      root.showWeather = val;
      weatherContainer.style.visibility = val ? "visible" : "hidden";
      break;
    case "weatherCityInput":
      root.apiData.cityName = val;
      break;    
    case "weatherApiInput":
      root.apiData.apiKey = val;
      break;
    case "weatherRefreshFreq":
      root.weatherRefreshRate = val;
      break;
    case "weatherBtnRefresh":
      // update weather and redraw scene
      reDrawWeatherScene();
      break;
    case "miscHour12":
      // set hour format
      root.hour12 = val;
      drawDate();
      break;
    case "miscLanguage":
      root.locale = languages[val];
      drawDate();
      getWeather();
      break;
    case "miscSunrise":
      root.defaultSunrise = val;
      // Re-set default values of weather (when api is not used)
      if (root.apiData.cityName ==="" || root.apiData.cityName === "city, country" || root.apiData.apiKey ==="" || root.apiData.apiKey ==="openweathermap.org key") {
        reDrawWeatherScene();
      }
      break;
    case "miscSunset":
      root.defaultSunset = val;
      // Re-set default values of weather (when api is not used)
      if (root.apiData.cityName ==="" || root.apiData.cityName === "city, country" || root.apiData.apiKey ==="" || root.apiData.apiKey ==="openweathermap.org key") {
        reDrawWeatherScene();
      }
      break;
  }
}

function reDrawWeatherScene(){
  getWeather();
  drawScene();
}