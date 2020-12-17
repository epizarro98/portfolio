import React from 'react'
import "../css/components/Home.css"


const whackLink = ()=>{
  window.location = "https://epizarro98.github.io/Whack-a-mole-P1/"
  
}

const mailLink = ()=>{
  window.location = "https://mail-direct.herokuapp.com/"
}

function Home() {
  return (
    <>
    <div className='name'>
      <p>Edward Pizarro</p>
    </div>
    <div>
      <img className='profile__img'
      src='https://i.postimg.cc/J4Z4CChz/AE493-FEB-7352-46-FA-89-CE-8-D7-F39125578-1-105-c.jpg'
      alt=''
      />
    </div>
    <div className='software-eng'>
      <h5>Full-Stack Developer</h5>
    </div>

    <div className='bio'>
      <p>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br/>
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  <br/>
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining <br/>
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing<br/> 
        rem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including <br/>
        versions of Lorem Ipsum. scrambled it to make a type specimen book."
      </p>
    </div>
    <h3 className='project-text'>Projects</h3>

<div className='project-container'>
    <div>
    <img className='whack__img' 
    onClick={whackLink}
    src='https://confluencenutrition.com/wp-content/uploads/2017/12/whackamole.jpg'
    alt=''
    />
    <p className='mole-text'>Whack-a-mole</p>
  </div>
  
  <div>
  <img className='mail__img'
    onClick={mailLink}
    src='https://cdn.pixabay.com/photo/2016/04/22/00/34/sky-1344910_1280.png'
    alt=''
    />
    <p className='mail-direct-text'>Mail Direct</p>
  </div>
  </div>

    </>
  )
}


export default Home