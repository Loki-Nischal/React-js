import { useState } from "react"

const Counterr = () => {
    // count -> state variable name
    //setCount -> use to update count sate value
    //useState(0) -> means the initial value of count state is 0
    const[count,setCount] = useState(0) // it is a hook to maintain state for the count
    const[on,setOn] = useState(false)
    const[username,setUsername]=useState("")
    const [hobbies,setHobbies] = useState([])
    const [user,setUser] = useState({
        username:"nischal",
        age:22
    })
    
    const handleIncrement = () => setCount(count + 1) // yauta matra value return garnu xa vhane curly barket dinu perdaina

 
    

    const handleReset = () =>{
        setCount(0)
    }

  return (
    <div className="border border-slate-300 p-4 rounded-md w-80">
        <h1 className="text-4xl font-semibold text-slate-800 text-center mb-4">
            Counter App
        </h1>

        <p className="text-2xl font-semibold text-center mb-10">
            {count}
        </p>

        <div className="space-x-1">
            <button onClick={handleIncrement}  className="primary_button">
                add
            </button>
            <button onClick={ ()  =>    setCount(count - 1)} className="primary_button">subtract</button>
            <button onClick={handleReset}  className="primary_button">reset</button>
        </div>

        <div className="mt-6">
         <button onClick={()=>setOn(!on)}
          className={`px-6 py-2 rounded-md 
           ${on? "bg-green-600":"bg-red-600"}`}> 
            {
                on ? " off" : "on"
            }
         </button>
         
         {
            on ? <p className="text-green-500 font-bold">Switch on</p> : <p className="text-red-500 font-bold">Switch off</p> // ternary operator
         }
        </div>
        <div className="mt-5">
            <button onClick={()=>setUsername("Nischal")} className="primary_button">
                Change username
            </button>
            <p>
               the username is {username}
            </p>
        </div>

    </div>
  )
}
export default Counterr