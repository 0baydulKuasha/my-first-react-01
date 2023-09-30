import { useState } from "react"

export default function Counter(){
  const [team, setTeam] = useState (11)
  
  
  
  
  
  const handeladd = () =>{
    const count = team + 1;
    setTeam(count);
  }
  const handelRemove = () => {
    setTeam(team - 1);
    
  }
  
  
    const teamStyle = {
        border: '2px solid black',
        borderRadius: '30px'
    }

    return(
        <div style={teamStyle} >
         <h2 >players:{team} </h2>
        <button onClick={handeladd} >add</button>
        <button onClick={handelRemove} >Remove</button>
        </div>
    )



} 