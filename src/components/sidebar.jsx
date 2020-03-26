import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
     <div>
       <a href="#navbar" className="js-clib-nav-toggle clib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		<aside id="clib-aside" role="complementary" className="border js-fullheight">
			<div className="text-center">
				<div className="author-img"></div>
				<h1 id="clib-logo"><a href="index.html">Neha Singh</a></h1>
				<span className="position"><a href="#">Web Developer</a> in Los Angeles, CA</span>
			</div>
			<nav id="clib-main-menu" role="navigation" className="navbar">
				<div id="navbar" className="collapse">
					<ul>
						<li className="active"><a href="#" data-nav-section="home">Home</a></li>
						<li><a href="#" data-nav-section="about">About</a></li>						
						<li><a href="#" data-nav-section="skills">Skills</a></li>
						<li><a href="#" data-nav-section="education">Education</a></li>
						<li><a href="#" data-nav-section="experience">Experience</a></li>
						<li><a href="#" data-nav-section="work">Work</a></li>						
						<li><a href="#" data-nav-section="contact">Contact</a></li>
					</ul>
				</div>
			</nav>

			<div className="clib-footer">
				<ul>
					<li><a href="https://github.com/neharichi"><i className="icon-github"></i></a></li>
					<li><a href="https://www.linkedin.com/in/nehasingh17/"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>

		</aside>
     </div>
    )
  }
}
