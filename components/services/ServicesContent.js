import React from 'react'
import * as Icon from 'react-feather'
import Link from '../common/ActiveLink'

export default function ServicesContent() {
    return (
        <section className="services-area-two ptb-80 bg-f9f6f6">
			<div className="container">
				<div className="section-title">
					<h2>Ways we can help you</h2>
					<div className="bar"></div>
					<p>Have a look, some could be interesting to help you achieve your business goals or start that project you always wanted to do... Yes, that one!</p>
				</div>

				<div className="row">
					<div className="col-lg-6 col-md-6">
						<Link activeClassName="active" href="/dev-services">
							<div className="single-services-box">
								<div className="center-image">
									<img 
										src={require("../../images/services-left-image/main-pic.png")} 
										className="wow fadeInUp" 
										data-wow-delay="0.6s" 
										alt="main-pic"
									/>
								</div>

								<h3>Development Services</h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</Link>
					</div>

					<div className="col-lg-6 col-md-6">
						<Link activeClassName="active" href="/web-hosting-services">
							<div className="single-services-box">
								<div className="center-image">
								<img 
										src={require("../../images/services-right-image/main-pic.png")} 
										className="wow fadeInUp" 
										data-wow-delay="0.6s" 
										alt="main-pic"
									/>
								</div>

								<h3>Web Hosting Services</h3>
								<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
							</div>
						</Link>
					</div>

				</div>
			</div>
		</section>
    )
}
