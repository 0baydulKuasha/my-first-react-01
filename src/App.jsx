import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test'
import Demo from'./Demo'
// import Test from './Counter'
import Counter from './Counter'
import Users from './User'
import Frinces from './Friences'
import Friend from './Friends'


function App() {
  return (
    <>
      {/* <Album></Album> */}
      <Friend></Friend>
      <Frinces></Frinces>
      <Users></Users>
      <Counter></Counter>
      <Counted></Counted>
      <Test></Test>
      <h1>Vite + React</h1> 
      <Subject name ="bangla" price="55"></Subject>
      <Subject name = "english" price = "3"></Subject>
      <Subject name = "math" price = "4"></Subject>
      <Student name = "samsur " class = "9"></Student>
      <Student name = "rupa" class = "5"></Student>
      <Student name = "tina" class = "11"></Student>
      <Look></Look>
      <Student></Student>
      <Demo></Demo>
    </>
  )
}
function Subject(props){
  console.log(props);
  return <h1> this is the subject name:{props.name} price: {props.price} </h1>
}



function Look(){
  const he = 32;
  const how = 54;
  const people = { name: 'obaydul', age: 22, hed:72,
  }
  return <h2>who i am {people.name} {he + how} my hight {people.hed}</h2>
}

function Student ( props){
  const work = {
    name: 'teacher',
    roll: 54
  }
  return(
    <div className='student'>
      <h3>I am Bad Student {props.name} </h3>
      <p>class: {props.class}</p>
      <p>Roll:  {work.roll} </p>
    </div>
  )

}

 
function Counted(){
  const [count, setCount] = useState(0);
  const handleAdd = () => {
      const newCount = count + 1;
      setCount(newCount)
  }

  const handleReduce = () => {
      const newCount = count - 1;
      setCount(newCount)
  }


  return(
      <>
      <h3>Counter:{count}</h3>
      <button onClick={handleAdd }>add</button>
      <button onClick={handleReduce} >Reduce</button>
      
      </>
  )
}












export default App








