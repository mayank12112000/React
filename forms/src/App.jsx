import React from 'react'

export default function App() {

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data)

    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' />
      <input type="email" name='email'/>
      <input type="password" name='password'/>
        <button>submit</button>
    </form>
  )
}
