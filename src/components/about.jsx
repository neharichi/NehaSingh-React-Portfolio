import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
       	<section className="clib-about" data-section="about">
				<div className="clib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About Us</span>
										<h2 className="clib-heading">Who Am I?</h2>
										<p><strong>Hi I'm Neha Singh</strong> I am a web developer, looking to work for great companies that can help me advance my technical skills.</p>
										<p>I am humble, enthusiastic and love to take on challenges. I believe in God, Hardwork and friends</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
									<div className="services color-1">
										<span className="icon2"><i className="icon-bulb"></i></span>
										<h3>Graphic Design</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
									<div className="services color-2">
										<span className="icon2"><i className="icon-globe-outline"></i></span>
										<h3>Web Design</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
									<div className="services color-3">
										<span className="icon2"><i className="icon-data"></i></span>
										<h3>Software</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-4">
										<span className="icon2"><i className="icon-phone3"></i></span>
										<h3>Application</h3>
									</div>
								</div>
							</div>
							{/* <div className="row">
								<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
									<div className="hire">
										<h2>I am happy to know you <br>that 32+ projects done sucessfully!</h2>
										<a href="https://github.com/neharichi" className="btn-hire">Checkout my Github Profile</a>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>	
      </div>
    )
  }
}
