import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      {/* <Person></Person>
      <Student name = 'Jake' dept = 'CSE'> </Student>
      <Student name = 'Mike' dept = 'EEE'> </Student>
      <Student name = 'Clarke' dept = 'CSE'> </Student> */}

      <Todo task = "Learn react" isDone = {true}></Todo>
      <Todo task = "Explore core concepts" idDone = {false}></Todo>
    </>
  )
}
function Person(){ 
  const name = "mike";
  const money = 35;
  return(
   
    <h3>There was a person named {name + money}</h3>
  )
}

// const {name,dept} = {name:'jake' , dept:'CSE'}
function Student({name, dept}){
  console.log(name,dept)
  return <div className='student'>

    <h3>this is a student</h3>
    <p>Name : {name}</p>
    <p>Department : {dept}</p>

  </div>
}

export default App
