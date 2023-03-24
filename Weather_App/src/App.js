// import React, {useState} from "react";
// import axios from 'axios';

// function App() {
//   const [data,setData] = useState({});
//   const [location, setLocation] = useState('');

//   const url = 'https://api.openweathermap.org/data/2.5/weather?q={location}&units=imperial&appid=8d100a825622f51464094f357ba33ca0';

//   const  searchLocation = (Event) => {
//     if(Event.key === 'Enter'){
//       axios.get(url).then((response) => {
//         setData(response.data)
//         console.log(response.data)
//       })
//       setLocation('')
//     }
//   }
//   return (

//     <div className="app">
//       <div className="search-Box">
//         <input
//         value={location}
//         onChange = {Event => setLocation(Event.target.value)}
//         onKeyUp={searchLocation}
//         placeholder="Enter Location"
//         type="text" />   
//       </div>
//       <div className="container"> 
//         <div className="header">
//           <div className="location">
//             <p>Delhi</p>
//           </div>
//           <div className="temp">
//             <h1>65°C</h1>
//           </div>
//           <div className="description">
//             <p>Clouds</p>
//           </div>
//         </div>
//         <div className="footer">
//           <div className="feels">
//             <p className="bold">65°C</p>
//             <p>Feels Like</p>
//           </div>
//           <div className="humidity">
//             <p className="bold">20%</p>
//             <p>Humidity</p>
//           </div>
//           <div className="wind">
//             <p className="bold">12 MPH</p>
//             <p>Wind Speed</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search-Box">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyUp={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="header">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&  
          <div className="footer">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;