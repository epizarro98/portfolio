import React from 'react'

function About() {
    const linkedIn = ()=>{
        window.location = "https://www.linkedin.com/in/edward-pizarro-1a9966151/"
      }

    return (
        <>
            <div>
                <h2 className='contact'>Contact Me!</h2>
                <h4 className='email'>Email:</h4>
                <p className='epiz'>epizarro309@gmail.com</p>
                <h4 className='phone-number'>Phone Number:</h4>
                <p className='number'>774-294-1765</p>
            </div>
            <div className='underline'>
                <h4
                onClick={linkedIn}
                className='link'>Click here to check out my LinkedIn
                </h4>
            </div>
        </>
    )
}

export default About
