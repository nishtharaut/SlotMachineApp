import React from "react";
import SlotM from "./Slotmach";


const App = () =>{
return <>
    <h1 className="heading_style">
    🎰 Welcome to <span style={{fontWeight:"bold" ,backgroundColor:"white"}}>Slot Machine Game</span>🎰 
    </h1>
    <div className="slotMachine">
    <SlotM x='😄' y='😄' z='😄' />
    <hr/>
    <SlotM x='🦊 ' y='🐧' z='🐰'/>
    <hr/>
    <SlotM x='😎' y='😇' z='🥺'/>
    <hr/>
    <SlotM x='🍒' y='🍒' z='🍒'/>
    
    </div>
</>
};






export default App;