

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect,useState} from "react";
import "./App.css";

function App() {
  const apiKey ="f56f24967aaf51182d1d4df628297c6d"
  const [data,setData] = useState({})
  const[inputCity, setInputCity] = useState("")
  const getWeatherDetails = (cityName) => {
    if(!cityName) return
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?\q="+ cityName + "&appid=" + apiKey
    axios.get(apiUrl).then((res)=>{
      console.log("response",res.data)
      setData(res.data)
    }).catch((error)=>{
      console.log("error",error)

    })

  }
  const handleChangeInput = (e) => {
    console.log("value",e.target)
    setInputCity(e.target.value)

  }

  const handleSearch=()=>{
    getWeatherDetails(inputCity)
    // alert("clicked")
  }
return (
    <div className="col-md-12">
         <div className="weatherBg">
           <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-contol" value={inputCity} onChange={handleChangeInput}/>
            <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>
          {Object.keys(data).length>0 &&
          
          <div className="col-md-12 text-center mt-5">
            <div className="shadow rounded weatherResultBox">
              <img className="weatheIcon" src="https://th.bing.com/th/id/R.d8c10ced4c324b34408dda90292e48c2?rik=hLutIkyyLdbkMw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fiynque%2fios7-style%2f1024%2fWeather-icon.png&ehk=gA92r%2fgxkM24%2f0TYtSFkMie4BkV1Samb0ZYBjpJMqpQ%3d&risl=&pid=ImgRaw&r=0"/>
             <h5 className="weatherCity">{data?.name}</h5>
             <h6 className="weatherTemp">Current temp{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
             
             
             </div>

          </div>
          }       
         </div>
    
    
    );
}

export default App;
