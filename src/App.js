import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education';
import Skills from './components/skills';
import Work from './components/work';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div id="clib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="clib-main">
					<Introduction></Introduction>
					<About></About>
          <Skills></Skills>
          <Education></Education>
					<Experience></Experience>
          <Work></Work>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
