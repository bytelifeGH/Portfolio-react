import React from 'react'
import './css/Form.css'
export default function Form() {
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <div className='form'>
      <div className="blank"></div>
      <div className="field">
        <div className="header">Send a Message</div>
        <form className="entry" onSubmit={handleSubmit}>
            <div className="first"><input type="text" placeholder='First Name'/></div>
            <div className="last"><input type="text" placeholder='Last Name'/></div>
            <div className="email"><input type="email" placeholder='Email Address'/></div>
            <div className="number"><input type="number" placeholder='Mobile Number'/></div>
            <textarea name="" id="" cols="30" rows="10" className='area' placeholder='Write your message here..'></textarea>
            <button type='submit' className='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
