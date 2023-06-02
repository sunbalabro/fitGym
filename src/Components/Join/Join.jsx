import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
export const Join = (props) => {
    const form = useRef()
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_jpcwiax','template_8i8m7ua' , form.current, 'qwmXtIM94tKK_1m8-').then((results)=>{
              console.log(results.text)
        } , (error)=>{
            console.log(error.text)
        })
    }
  return(
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
             <div>
                <span className='stroke-text'>READY TO </span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'> WITH US?</span>
            </div>
        </div>
        <div className="right-j">
              <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email Address' />
                <button className='btn btn-j'>Join Now</button>
              </form>
        </div>
    </div>
   )
  }
