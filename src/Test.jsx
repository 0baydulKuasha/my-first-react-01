import { useState } from "react"

export default  function Test( ){
    function hendel(){
        alert('push the button')
    }
    const hendels = () => {
        alert('pop the part')
    }
    const butto = {
      name : 'arif',
      roll: 2345
    }
    const addoprtor = (num) => {
        alert(num + 5);
    }
    const addoffer = (offer) => {
        alert( offer * 4)
    }





    return  (
        <>






        <button onClick={() => {addoffer(3)}} >Miltpul</button>
        <button onClick={ () => {addoprtor(3)}}>Math</button>
        <button onClick={() => {alert('Hellow obaydul')}}>click</button>
        <button onClick={() => {alert('i will fuck you')}}>You</button>
        <button onClick={hendel}>PUSH</button>
        <button onClick={hendels} >PoP</button>  
        <h2> i like th</h2>
        <h2>I like {butto.name  } she is {butto.roll} the best</h2>
        </>
    )
}

