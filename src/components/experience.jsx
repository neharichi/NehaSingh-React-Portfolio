import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
       	<section class="clib-experience" data-section="experience">
				<div class="clib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Experience</span>
							<h2 class="clib-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
				         <div class="timeline-centered">
					      

					         <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-3">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					               	<h2><a href="#">Attending Full-Stack Web Development Bootcamp at UCLA Extension</a> <span>2017-2018</span></h2>
					                  <p>Best thing that happened to me. Love coding</p>
					               </div>
					            </div>
					         </article>					      

					         <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-5">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					               	<h2><a href="#">Pre-Nursery Teacher</a> <span>2005-2008</span></h2>
					                  <p>I love teaching little kids. I worked in new delhi in a pre-nursery setup.</p>
					               </div>
					            </div>
					         </article>

					         <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-none">
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
			</section>
      </div>
    )
  }
}
