import React, {useState} from 'react'
import "../css/components/Home.css"



const whackLink = ()=>{
  window.location = "https://epizarro98.github.io/Whack-a-mole-P1/"
}

const mailLink = ()=>{
  window.location = "https://mail-direct.herokuapp.com/"
}

const smittyLink = ()=>{
  window.location = "https://www.smittysgarageapparel.com/"
}
const valLink = ()=>{
  window.location = "https://360virtualtourview.com/"
}

function Home() {
  const [ toggleImage, setToggleImage ] = useState(false);

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
      <h5 class='animate__animated animate__fadeInDown'>Full-Stack Developer</h5>
    </div>

    <div className='bio'>
      <p>
        I am a software engineer who is a constant and curious learner.
        With a 5 year background <br/>in metal fabrication, I understand the
        importance of delivering a quality product to a customer.<br/> I am
        fluent in many programming languages and thrive to deliver quality
        products and learn on the way.
      </p>
    </div>
    <h3 className='project-text'>Projects</h3>

<div className='project-container'>
  <div>
    <img className={`whack__img ${toggleImage ? "animate__animated animate__bounceOut" : ""}`}
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

    <div>
      <img className='smitty__img'
        onClick={smittyLink}
        src='https://images.barrons.com/im-242220?width=620&size=1.5'
        alt=''
        />
        <p className='val-text'>Smitty's Garage<br/>(Web Design)</p>
    </div>

    <div>
    <img className='val__img'
      onClick={valLink}
      src='https://i2.wp.com/vrmatters.hk/wp-content/uploads/2017/07/pro2-matterport.jpg?fit=600%2C600'
      alt=''
      />
      <p className='val-text'>360 Virtual <br/>Tour View<br/>(Web Design)</p>
    </div>
  </div>
    </>
  )
}


export default Home