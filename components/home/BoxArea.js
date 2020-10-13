import React from 'react'
import * as Icon from 'react-feather';

const BoxArea = (props) => {
    return (
        <section className="boxes-area">
			<div className="container">
				<div className="row">

					<div className="col-lg-4">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.Code />
							</div>
							<h3>Presentation Websites</h3>
							<p>Professional presentation websites using modern technologies which are fully optimised and are responsive on any device, and yeah, they look amazing.</p>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="single-box">
							<div className="icon">
                                <Icon.ShoppingCart />
							</div>
							<h3>Online Stores</h3>
							<p>We develop efficient e-commerce platforms. Online stores that guide your customers to your products, and let you manage you business easily.</p>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.Smartphone />
							</div>
							<h3>Web Applications</h3>
							<p>The right web application can help your business grow exponentially. We use the latest tachnologies and we can built any wev application you want.</p>
						</div>
					</div>

				</div>
			</div>
		</section>
    )
}

export default BoxArea
