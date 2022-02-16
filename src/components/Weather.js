import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { weatherActions } from '../toolkit/slices/weather-slice';
import { forecastActions } from '../toolkit/slices/forecast-slice';

export default function Weather() {

    const [input, setInput] = React.useState('Lagos');
     const dispatch = useDispatch();
     const data = useSelector(state => state.weather.data);
     const forecast = useSelector(state => state.forecast?.forecast.daily);
     console.log('forecast',forecast)

     let day = new Date();
    let date = new Date().toDateString();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // let d =  new Date(dateString)
    let dayName = day.toLocaleString('en-us', { weekday: 'long' })

    //get day name respectively for forecast
    const getDay = (index) => {
        let day = new Date();
        let date = new Date().toDateString();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(date);
        d.setDate(d.getDate() + index);
        console.log('d',d)
        return days[d.getDay()];
    }

    console.log('day',getDay(4))


     const getData = async () => {
         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input} &appid=677b0f602f20d710754ced87f9e9bd49`).catch(err => {  
                console.log(err);
     });
         if(response.data.cod === 200){
          dispatch(weatherActions.setWeather(response.data));
          console.log('response',response.data)
         } else {
                swal('Oops!', 'Something went wrong or invalid city name', 'error');
      
            }
     }

    //get lat and lon
    let lat = data?.coord.lat;
    let lon = data?.coord.lon;


     const getForecast = async () => {

         console.log('lat', lat)
         console.log('lon', lon)
         
         const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=677b0f602f20d710754ced87f9e9bd49`).catch(err => {
                console.log(err);
        });

        console.log(' getting response')
    
           
        console.log(' forecast response',response)
            dispatch(forecastActions.setForeCast(response.data));
           
     }

//get each day name from the forecast


    
    //  let dt = data?.dt;


    const temp = (data?.main?.temp - 273.15).toFixed(2) || 0;
    // const temp_min = (data?.main?.temp_min - 273.15).toFixed(2) || 0;
    // const temp_max = (data?.main?.temp_max - 273.15).toFixed(2) || 0;

    let icon;
    if (data?.weather?.[0]?.main === 'Clear') {
        icon = 'fa-sun';
    } else if (data?.weather?.[0]?.main === 'Rain') {
        icon = 'fa-cloud-rain';
    } else if (data?.weather?.[0]?.main === 'Clouds') {
        icon = 'fa-cloud';
    } else if (data?.weather?.[0]?.main === 'Snow') {
        icon = 'fa-snowflake';
    } else if (data?.weather?.[0]?.main === 'Drizzle') {
        icon = 'fa-cloud-sun-rain';
    } else if (data?.weather?.[0]?.main === 'Thunderstorm') {
        icon = 'fa-bolt';
    } else if (data?.weather?.[0]?.main === 'Mist') {
        icon = 'fa-smog';
    } else if (data?.weather?.[0]?.main === 'Haze') {
        icon = 'fa-smog';
    } else if (data?.weather?.[0]?.main === 'Fog') {
        icon = 'fa-smog';
    }

//submitting form
    const handleSubmit = (e) => {
        e.preventDefault();
        getData();

        setTimeout(() => {
            getForecast();
        }, 3000);
        setInput('');
    }


//get forecast icon



    
     useEffect(() => {
        
        // getData();
        setTimeout(() => {
            getForecast();
        }, 3000);

        }, [data]);

  return (
      <div style={{
          background: 'url(https://source.unsplash.com/600x900/?nature,water")',
      }} >
          <div className="hero" data-bg-image="images/banner.png">
              <div className="container">
                  <form className="find-location">
                      <input name='input' type="text" placeholder="Find your location..." value={ input }  onChange={ e => setInput(e.target.value) }
                       />
                      <input onClick={handleSubmit} type="submit" defaultValue="Find" />
                  </form>
              </div>
          </div>
          <div className="forecast-table">
              <div className="container">
                  <div className="forecast-container">
                      <div className="today forecast">
                          <div className="forecast-header">
                              <div className="day">{dayName }</div>
                              <div className="date">{ date }</div>
                          </div> {/* .forecast-header */}
                          <div className="forecast-content">
                              <div className="location">{ data?.name + ' ' +data?.sys.country}</div>
                              <div className="degree">
                                  <div className="num">{ parseInt(temp) }<sup>o</sup>C</div>
                                  <div className="forecast-icon">
                                      {/* <img src="images/icons/icon-1.svg" alt="" width={90} /> */}
                                      <i className={`fas ${icon} fa-4x`} ></i>
                                  </div>
                              </div>
                              <span><img src="images/icon-umberella.png" alt="" />20%</span>
                              <span><img src="images/icon-wind.png" alt="" />18km/h</span>
                              <span><img src="images/icon-compass.png" alt="" />East</span>
                          </div>
                      </div>
                     {
                         forecast?.slice(0,5).map((item, index) => {
                             let icon2;
                             if (item?.weather?.[index]?.main === 'Clear') {
                                 icon2 = 'fa-sun';
                             } else if (item?.weather?.[0]?.main === 'Rain') {
                                 icon2 = 'fa-cloud-rain';
                             } else if (item?.weather?.[0]?.main === 'Clouds') {
                                 icon2 = 'fa-cloud';
                             } else if (item?.weather?.[0]?.main === 'Snow') {
                                 icon2 = 'fa-snowflake';
                             } else if (item?.weather?.[0]?.main === 'Drizzle') {
                                 icon2 = 'fa-cloud-sun-rain';
                             } else if (item?.weather?.[0]?.main === 'Thunderstorm') {
                                 icon2 = 'fa-bolt';
                             } else if (item?.weather?.[0]?.main === 'Mist') {
                                 icon2 = 'fa-smog';
                             } else if (item?.weather?.[0]?.main === 'Haze') {
                                 icon2 = 'fa-smog';
                             } else if (item?.weather?.[0]?.main === 'Fog') {
                                 icon2 = 'fa-smog';
                             }

                            

                                return (
                                  <div key={index} className="forecast">
                                  <div className="forecast-header">
                                 {getDay(index + 1)}<div className="day"> </div>
                          </div> 
                          <div className="forecast-content">
                              <div className="forecast-icon">
                                    <i className={`fas ${icon2} fa-3x`} ></i>
                              </div>
                                            <div className="degree">{parseInt(item.temp.day) }<sup>o</sup>C</div>
                              <small>{ item.temp.min }<sup>o</sup></small>
                          </div>
                      </div>                                )
                            })
                        }
                  </div>
              </div>
          </div>
      </div>

  )
}
