import React, { useState } from "react";
import { Row, Col, Input, Button,Image } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import "./App.css";


const Home = () => {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState({
    celcius: 32,
    name: "Penang",
    humidity: 10,
    speed: 2,
  });
  
  const [name,setName]= useState('');
      const handleClick= ()=>{
        if(name!==""){
          const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=af84cb4ddfc31d841bb2594c407b4fec&units=metric`;
          axios.get(apiUrl)
          .then(res => {
            
              console.log(res.data);
            setData({...data, celcius : res.data.main.temp, name: res.data.name, 
              humidity : res.data.main.humidity, speed : res.data.wind.speed,
             })
          })
          .catch((err) => console.log(err));
        }
      }
  return (
    <div id="mode"
      style={{
        backgroundColor:
          theme === "dark" ? "rgba(70,4,94,0.8)" : "rgba(234,162,255,1)",
        transitionDuration: "1s",
        padding: "5vh 0px",
      }}
    >
      <Row justify="center">
        <Col style={{ width: 1200 }}>
          <Row align="middle">
            <Col span={20}>
              <Input 
                placeholder="Please enter Your Country"
                size="large"
                onChange={e=>setName(e.target.value)}
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(70,4,94,1)"
                      : "rgba(255,255,255,0.5)",
                  borderWidth: 0,
                  color: theme === "dark" ? "#fff" : "rgba(0,0,0,0.65)",
                }}
              />
            </Col>

            <Col span={4}>
              <Row justify="end" gutter={16} align="middle">
                <Col>
                  <SearchOutlined className="inputtext"
                    onClick={handleClick}
                    style={{
                      backgroundColor:
                        theme === "dark"
                          ? "rgba(70,4,94,1)"
                          : "rgba(70,4,94,0.5)",
                    }}
                  />
                </Col>

                <Col>
                  <Button className="backgroundbutton"
                    onClick={() =>
                      setTheme((curr) => (curr === "light" ? "dark" : "light"))
                    }
                  >
                    {theme === "light" ? "Light Mode" : "Dark Mode"}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>


      <Row>
        <Col className="weather-container" gutter={24} >
          <Row >
            <Col>
              <Image className="cloud"
                src="/Weather/Cloud.jpg" />
                <Row justify={"center"}>
                  <h1>{Math.round(data.celcius)}°C</h1>
                  <h2>{data.name}</h2>  
                </Row>
                
              <Col className="list-tem ">
                    <Col span={6}>
                      <Image className="water"
                        src="/Weather/humidity.png" 
                        style={{ width:100}} />

                  
                      <Col className=" col">
                        <p>{Math.round(data.humidity)}%</p>
                        <p>Humidity</p>
                      </Col>
                    </Col>
                    <Col span={6}>
                          <Image className="air"
                            src="/Weather/wind.jpg"
                            style={{ width:100 }} />
                        <Row>
                          <Col className="col">
                            <p>{Math.round(data.speed)}km/h</p>
                            <p>Wind</p>
                          </Col>
                       </Row> 
                    </Col>
              </Col>      
            </Col>
          </Row>      
        </Col>
      </Row>


      
      {/* <div className="weather-container ">  
        <img src={data.image} alt="" className="cloud"/>
        <h1>{Math.round(data.celcius)}°C</h1>
        <h2>{data.name}</h2>

        <div className="list-history">
          <div className="col">
            <img src={humidity} alt="" className="water" />
            <div> 
              <p>{Math.round(data.humidity)}%</p>
              <p>Humidity</p>
            </div>
          </div>

          <div className="col">
            <img src={wind} alt="" className="air" />
            <div>
              <p>{Math.round(data.speed)}km/h</p>
              <p>Wind</p>
            </div>
          </div>

        </div>
      </div> */}
    </div>
  );
};

export default Home;

// function Home() {
//   const [data, setData] = useState({
//     celcius: 30,
//     name: "Penang",
//     humidity: 10,
//     speed: 2,
//   });

//   useEffect(() => {
//     const apiUrl =
//       "https://api.openweathermap.org/data/2.5/weather?q=Penang&appid=af84cb4ddfc31d841bb2594c407b4fec";
//     axios
//       .get(apiUrl)
//       .then((res) => console.log(123, res.data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div className="container">
//       <div className="weather">
//         <div className="search">
//           <input type="text" className="input" placeholder="search" />
//           <button>search</button>
//         </div>
//       </div>
//       <div className="weather-container">
//         <img src={cloud} alt="" className="cloud"></img>
//         <h1>35°C</h1>
//         <h2>Penang</h2>
//         <div className="list-history">
//           <div className="col">
//             <img src={humidity} alt="" className="water" />
//             <div>
//               <p>10%</p>
//               <p>Humidity</p>
//             </div>
//           </div>

//           <div className="col">
//             <img src={wind} alt="" className="air" />
//             <div>
//               <p>2 km/h</p>
//               <p>Wind</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
