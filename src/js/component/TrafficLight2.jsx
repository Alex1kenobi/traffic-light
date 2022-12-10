import React, {useState} from "react"; 
import "/workspace/traffic-light/src/styles/index.css"
import "/workspace/traffic-light/src/styles/trafficlight.css"

const TrafficLight2 = ()=>{

const [color, setColor] = useState ("red")

 const Handlelight =() => {

     setLight (className = "shadowLight")
 }

//onClick ={Handlelight} // poner esto si lo haces con esta función

return  (
<>
    <div className = "container"> 
        <div className= {"redLight "+(color == "red" ? "shadowLight" : "")} onClick={Handlelight}> </div>
        <div className = {"yellowLight "+(color == "yellow" ? "shadowLight" : "")} onClick={Handlelight}> </div>
        <div className = {"greenLight "+(color == "green" ? "shadowLight" : "")} onClick={Handlelight} > </div>
    </div>
    </>
    )
}

export default TrafficLight2