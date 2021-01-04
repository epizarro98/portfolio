import React from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import {Route, Link} from 'react-router-dom'
import Layout from './components/common/Layout'


// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <nav class='nav'>
        <Link to='/'>Home</Link>{'   '}
        <Link to='/About'>Contact</Link>{'   '}
        {/* <Link to='/Blog'>Blog</Link>{'   '} */}
        {/* <Link to='/Projects'>Projects</Link>{'   '} */}
      </nav>
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        {/* <Route path='/Blog' component={Blog} /> */}
        <Route path='/Projects' component={Projects} />
      </Layout>
    </div>
  );
};

export default App;
