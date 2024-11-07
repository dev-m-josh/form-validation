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

  function handleValidation(e) {
    e.preventDefault()
    setErrors(Validation(values))
  }
  return (
      <form className="container" onSubmit={handleValidation}>
        <h1>Registration Form</h1>
        <div className='form'>
          <div className='field'>
            <label>Name:</label>
            <input type='text' name='username' placeholder='Enter Name...'   onChange={handleInput}/>
            {erros.name && <p style={{color: 'red', margin: 0}}>{erros.name}</p>}
          </div>
          
          <div className='field'>
            <label>Email:</label>
            <input type='email' name='email' placeholder='Enter Email...' onChange={handleInput}/>
            {erros.email && <p style={{color: 'red', margin: 0}}>{erros.email}</p>}
          </div>

          <div className='field'>
            <label>Password:</label>
            <input type='password' name='password' placeholder='Enter Password...' onChange={handleInput}/>
            {erros.password && <p style={{color: 'red', margin: 0}}>{erros.password}</p>}
          </div>

            <button>Submit</button>
        </div>
      </form>
  );
}

export default App;
