import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <div>
       	<section class="clib-work" data-section="work">
				<div class="clib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">My Work</span>
							<h2 class="clib-heading animate-box">Recent Project Work</h2>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div class="project work-img1" >
								<div class="desc">
									<div class="con">
										<h3><a href="https://dry-woodland-53633.herokuapp.com/">Barber Shop</a></h3>
										<span>Barber Shop Website</span>
										<p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project work-img1">
								<div class="desc">
									<div class="con">
										<h3><a href="https://still-basin-99529.herokuapp.com/">Employee Directory</a></h3>
										<span>Employee Directory</span>
										<p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
							<div class="project  work-img3">
								<div class="desc">
									<div class="con">
										<h3><a href="https://neharichi.github.io/weather-dashboard/">Weather Dashboard</a></h3>
										<span>Weather Dashboard</span>
										<p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>						
					</div>
					<div class="row">
						<div class="col-md-12 animate-box">
							<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}
