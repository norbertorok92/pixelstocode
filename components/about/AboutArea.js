import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
			<React.Fragment>
        <section className="about-area ptb-80">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div className="about-image">
									<img src={require("../../images/1.png")} alt="about us" />
								</div>
							</div>

							<div className="col-lg-6 col-md-12">
								<div className="about-content">
									<div className="section-title">
										<h2>We dream big for you</h2>
										<div className="bar"></div>
									</div>

									<p>There are two things that go well together: Who we are and what we do.</p>

									<p>We're a team of motivated developers who love to get things done. Our workflow helps us put our talents to work for our clients. We like what we do — and we think you will, too.</p>
								</div>
							</div>
						</div>

						<div className="about-inner-area">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="about-text">
										<h3>Where we've been</h3>
										<p>We developed our first web app in 2015. Since then, we've grown and evolved to cover the full spectrum of software solutions and services for clients all over the world.</p>
										<p>We cover you with skills in NodeJS, ReactJS, React Native, AngularJS, NextJS, Wordpress, Shopify, and much more</p>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="about-text">
										<h3>Where we are</h3>
										<p>We're in a place called Europe's Silicon Valley, Cluj-Napoca but we remote is what we love, so it doesn't matter where is your business, we are here to help.</p>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
									<div className="about-text">
										<h3>Where we're going</h3>
										<p>We're constantly looking to what's next. New chellanges, clients who are satisfied with our development services. The future for us also means global expansion.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="ready-to-talk">
					<div className="container">
							<h3>Let's develop custom software together.</h3>
							<p>Ready to gain competitive advantage?</p>
							<Link activeClassName="active" href="/contact">
									<a className="btn btn-primary">Talk To Us</a>
							</Link>
					</div>
				</section>
		</React.Fragment>
    )
}