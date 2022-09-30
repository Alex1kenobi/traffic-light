import React, {useState} from "react"; 
import "/workspace/react-hello/src/styles/trafficlight.css"

const TrafficLight = ()=>{

const [color, setColor] = useState ("red")

// const Handlelight =() => {

//     setLight (className = "shadowLight")
// }

//onClick ={Handlelight} // poner esto si lo haces con esta función

return  (
<>
    <div className = "container"> 
        <div className= {"redLight "+(color == "red" ? "shadowLight" : "")} onClick={()=>setColor("red")}  > </div>
        <div className = {"yellowLight "+(color == "yellow" ? "shadowLight" : "")} onClick={()=>setColor("yellow")}> </div>
        <div className = {"greenLight "+(color == "green" ? "shadowLight" : "")} onClick={()=>setColor("green")} > </div>
    </div>
    </>
    )
}

export default TrafficLight;