import React from 'react'

import './CreatePage.scss'

const CreatePage = () => {
  return (
    <div className='createWindow'>
        <h1>Share your art with the World</h1>
        <form className='forms'>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name' />
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Password' />

            <button type="submit">Create Account</button>

        </form>
    </div> 
  )
}

export default CreatePage