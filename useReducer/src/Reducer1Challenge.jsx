import React from 'react'
import { useState } from 'react'

export default function Reducer1Challenge() {
    const [formData,setFormData] = useState({
        name:"",password:"",email:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
    const handleFormChange= (e)=>{
        const {name,value} = e.target
        setFormData((preData)=>{
            return {...preData,[name]:value}
        })
        
    }
    // usereducer to be done
  return (
    <form onSubmit={handleSubmit}>
        <input name='name' onChange={handleFormChange} type="text" placeholder='name' value={formData.name} /> <br />
        <input name='email' onChange={handleFormChange} type="email" placeholder='email' value={formData.email} /> <br />
        <input name='password' onChange={handleFormChange} type="password" placeholder='password' value={formData.password} /> <br />
      <button >submit</button>
    </form>
  )
}
