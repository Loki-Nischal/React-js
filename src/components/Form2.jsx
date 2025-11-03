import { useState } from "react"

const Form2 = () => {
    const [fromData,setFromData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange =(e)=>{
      setFromData(prev => ({
        ...prev,
        [e.target.name] : e.target.value

      }))
    }
   


    const handleSubmit = (e)=>{
          e.preventDefault() // prevent default browser reload after form is submitted

        
      

        // Logic to send to server
        console.log(fromData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="border border-slate-400 p-10 rounded-lg shadow max-w-sm">
           <h1 className="text-4xl text-center mb-6 text-teal-800 font-bold">Register</h1>
           <div>
            <label htmlFor="username">Username</label>
            <input 
              type ="text"
              name = "username"
              placeholder="Enter name"
              id="username"
              onChange = {handleChange}
             />
       
           </div>
           {/* Email */}
           <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input 
              type ="email"
              name = "email"
              placeholder="Enter email"
              id="email"
              onChange = {handleChange}
             />
       
           </div>

           {/* password */}
             <div className="mt-4">
            <label htmlFor="password">password</label>
            <input 
              type ="password"
              name = "password"
              placeholder="Enter password"
              id="password"
              onChange = {handleChange}
             />
       
           </div>
           <button type="submit"  className="mt-4 primary_button">
            Register
           </button>
        </form>
    </div>
  )
}

export default Form2