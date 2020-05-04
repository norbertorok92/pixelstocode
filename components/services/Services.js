import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="ml-services-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h5>
                Take a look, some could be interesting to help you achieve your business goals or start that project.
              </h5>
              <h5>you always wanted to do... Yes, that one!</h5>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img
                      src={require("../../images/services-image/service-image2.png")}
                      alt="development services"
                    />
                  </div>
                  <h3>
                    <Link href="/dev-services">
                      <a className="btn btn-light">Development Services</a>
                    </Link>
                  </h3>
                  <p>
                    We can help you build a web application that helps your business grow.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img
                      src={require("../../images/services-image/service-image4.png")}
                      alt="web hosting services"
                    />
                  </div>
                  <h3>
                    <Link href="/web-hosting-services">
                      <a className="btn btn-light">Web Hosting Services</a>
                    </Link>
                  </h3>
                  <p>
                    It is extremely important to have a good hosting service, we got this too.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img
                      src={require("../../images/services-image/service-image1.png")}
                      alt="digital services"
                    />
                  </div>
                  <h3>
                    <Link href="/digital-strategy">
                      <a className="btn btn-light">Digital Strategy</a>
                    </Link>
                  </h3>
                  <p>
                    We will help you in the whole process, from planing to release.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Shape Images */}
          <div className="shape1">
            <img src={require("../../images/shape1.png")} alt="shape" />
          </div>
          <div className="shape2 rotateme">
            <img src={require("../../images/shape2.svg")} alt="shape" />
          </div>
          <div className="shape3">
            <img src={require("../../images/shape3.svg")} alt="shape" />
          </div>
          <div className="shape4">
            <img src={require("../../images/shape4.svg")} alt="shape" />
          </div>
          <div className="shape7">
            <img src={require("../../images/shape4.svg")} alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img src={require("../../images/shape2.svg")} alt="shape" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
