import { useState } from "react"

const Form = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const handleSubmit = (e)=>{
          e.preventDefault() // prevent default browser reload after form is submitted

        //   console.log("username",username)
        //   console.log("Email",email)
        //   console.log("password",password)
        const formData = {
            username:username, 
            email:email,
            password:password
        }

        // Logic to send to server
        console.log(formData)
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
              onChange = {e => setUsername(e.target.value)}
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
              onChange = {e => setEmail(e.target.value)}
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
              onChange = {e => setPassword(e.target.value)}
             />
       
           </div>
           <button type="submit"  className="mt-4 primary_button">
            Register
           </button>
        </form>
    </div>
  )
}

export default Form