import React from 'react'
import * as Icon from 'react-feather';

const BoxArea = (props) => {
    return (
        <section className="boxes-area">
			<div className="container">
				<div className="row">

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.Code />
							</div>
							<h3>Web Development</h3>
							<p>We leverage new approaches to web development to deliver innovative solutions.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.ShoppingCart />
							</div>
							<h3>E-Commerce</h3>
							<p>We analyse the business profile to understand all its characteristics.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.Smartphone />
							</div>
							<h3>Mobile Development</h3>
							<p>From pure native to cross-platform, we'll help you select the best choice for your app.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
                                <Icon.Target />
							</div>
							<h3>Digital Strategy</h3>
							<p>We'll help you define the scope, technology stack, and potential of your solution.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default BoxArea
