// import React, { useState } from 'react'

// const Cards = () => {
//   const [name, setName] = useState("")
//   const changeHandler = (user) => {
//     setName(user.target.value)
    
//   }
//   return (
//     <div>
//         <input type='text' name='name' placeholder='Enter Your Name' onChange={changeHandler} value={name}></input>
//         <h1>{name}</h1>
//     </div>
//   )
// }

// export default Cards

// --------------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react'

const Cards = () => {
  const [name, setName] = useState({          // we use the array of objects in useState
    username:"",
    password:""
  });
  const {username, password} = name          // username and password going on name

  const dataSubmit = (e) => {
    e.preventDefault()                // To remove the default actions of form we are going to use e.preventDefault()
  }

  const changeHandler = (user) => {
    setName({...name,[user.target.name]:[user.target.value]})
    console.log(name);
  }


  return (
    <form onSubmit={dataSubmit}>
    <input type='text' name='username' placeholder='Enter Your Name' onChange={changeHandler} value={username}></input>
    <br></br>
    <input type='password' name='password' placeholder='Enter Password' onChange={changeHandler} value={password}></input>
    <br></br>
    <input type='submit'></input>
    </form>
        
    
  )
}

export default Cards