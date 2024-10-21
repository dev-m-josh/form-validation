import React, { useState } from "react";
import './App.css';
import Validation from "./Validation";

function App() {
  const [values, setValues] = useState({
  username: '',
  email: '',
  password: ''
  })

  const [erros, setErrors ] = useState({})

  function handleInput(e) {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log({values})

  function handleValidation(e) {
    e.preventDefault()
    setErrors(Validation(values))
  }
  return (
    <div className="container">
      <form onSubmit={handleValidation}>
        <h1>Registration Form</h1>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='username'   onChange={handleInput}/>
            {erros.name && <p style={{color: 'red'}}>{erros.name}</p>}
          </div>
          
          <div className='field'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' onChange={handleInput}/>
            {erros.email && <p style={{color: 'red'}}>{erros.email}</p>}
          </div>

          <div className='field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='password' onChange={handleInput}/>
            {erros.password && <p style={{color: 'red'}}>{erros.password}</p>}
          </div>

            <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
