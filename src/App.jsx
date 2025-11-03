// function app(){
//   return <div>Hello, World!</div>;
// }

// export default app; 

//Parent bata children mah data pass garnu lai props bhanxa

// component -> js function that returns jsx
import Counterr from './components/Counterr'
import './App.css'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import Form from './components/Form'
import Form2 from './components/Form2'
import Form3 from './components/From3'
import ProductList from './components/ProductList'

const App = () => { // here App is a component 
  const username = "Loki"
  const num1 = 10
  const num2 = 20

  const isVerified = true
  const age = 18

  const fruits = ["apple", "banana", "mango","orange"]

  return (
    <div className='p-10'>
      {/* <Navbar/>
      <h1 className='bg-blue-950 text-5xl text-white rounded-md p-4'>Hello,{username} How are you</h1>
      <p>the sum of {num1} and {num2} is {num1 + num2}</p>
      {
        isVerified ? <p>Your account is verified</p> : <p>Your account is not verified</p>
      }
       */}
      {/* and operator */}
      {/* {
        age >= 18 && <p>You are eligible to vote</p>
      } */}

      {/* <h3>list of fruits</h3>
      <ul> */}
        {/* {
          fruits.map((fruit,index) => (
            <li key = {index}>{fruit}</li>
          ))
        } */}
      {/* </ul>
       <UserProfile id ={349} name ="Loki" age={23} country="nepal"/> {/*importing and using UserProfile component here */}
       {/* <UserProfile id ={345} name ="oki" age={13} country="china"/>
       <UserProfile id ={346} name ="ki" age={25} country="india"/>  */}
     {/* <Counterr /> */}

     {/* <Form /> */}
     {/* <Form2 /> */}
     {/* <Form3 /> */}
     <ProductList /> 

    </div> // h1 ra p tag aarko root element vitra wrap hunu perxa
  )
}

export default App // component  bhaneko java script function ho jun react element ra html element return garcha