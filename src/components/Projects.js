// import "../css/components/Home.css";
import axios from 'axios'
import React, {useEffect, useState} from 'react'
//components
import Spinner from './common/Spinner'

function Projects() {
    const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get('https://api.github.com/users/epizarro98/repos').then((res)=>{
      console.log(res.data)
      setData(res.data)
    }).then(() => setLoading(false))
  }, [])

  const display = () =>{
    if(loading){
      return <Spinner/>
    }else{
      return data.map((card) => (
        <div key={card.id} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{card.name}</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      ))
    }
  }
  return(
<div className='container'>
  <h2>Ed's Portfolio</h2>
   <div className='row'> {display()}</div>
  </div>
  )
}

export default Projects
