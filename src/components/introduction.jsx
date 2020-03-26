import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <section id="clib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
           <li>
             <div className="overlay"></div>
             <div className="container-fluid liImage1">
               <div className="row">
                 <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                   <div className="slider-text-inner js-fullheight">
                     <div className="desc">
                       <h1>Hi! <br/>I'm Neha Singh</h1>						   					
                      <p><a className="btn btn-primary btn-learn" href="Neha Singh - Resume - Web Developer - 2020.pdf">Download CV <i className="icon-download4"></i></a></p>
                    </div>
                   </div>
                 </div>
               </div>
             </div>
           </li>
           <li >
             <div className="overlay"></div>
             <div className="container-fluid liImage2">
               <div className="row">
                 <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                   <div className="slider-text-inner">
                     <div className="desc">
                       <h1>I am <br/>a Web Developer</h1>                   
                      <p><a className="btn btn-primary btn-learn" href="https://github.com/neharichi">View Portfolio <i className="icon-briefcase3"></i></a></p>
                    </div>
                   </div>
                 </div>
               </div>
             </div>
           </li>
          </ul>
        </div>
    </section>
    )
  }
}
