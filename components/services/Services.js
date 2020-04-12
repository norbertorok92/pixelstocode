import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="ml-services-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Core Project Competencies</h2>
              <div className="bar"></div>
              <h5>
                Have a look, some could be interesting to help you achieve your
                business goals or start that project
              </h5>
              <h5>you always wanted to do... Yes, that one!</h5>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img
                      src={require("../../images/services-image/service-image2.png")}
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/dev-services">
                      <a className="btn btn-light">Development Services</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img
                      src={require("../../images/services-image/service-image4.png")}
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/web-hosting-services">
                      <a className="btn btn-light">Web Hosting Services</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img
                      src={require("../../images/services-image/service-image1.png")}
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/digital-strategy">
                      <a className="btn btn-light">Digital Strategy</a>
                    </Link>
                  </h3>
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

        {/* <section className="services-details-area ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                  <h3>Incredible Infrastructure</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>

                  <p>
                    Took a galley of type and scrambled it to make a type
                    specimen book. survived not only five centuries, but also
                    the leap into electronic remaining. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry’s standard dummy text ever since
                    the 1500s, when an unknown printer when an unknown.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../../images/services-details-image/1.png")}
                  className="wow fadeInUp"
                  alt="image"
                />
              </div>
            </div>

            <div className="separate"></div>

            <div className="row align-items-center">
              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../../images/services-details-image/2.png")}
                  className="wow fadeInUp"
                  alt="image"
                />
              </div>

              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                  <p>
                    Took a galley of type and scrambled it to make a type
                    specimen book. survived not only five centuries, but also
                    the leap into electronic remaining. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry’s standard dummy text ever since
                    the 1500s, when an unknown printer when an unknown.
                  </p>
                  <p>
                    Took a galley of type and scrambled it to make a type
                    specimen book. survived not only five centuries, but also
                    the leap into electronic remaining. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry’s standard dummy text ever since
                    the 1500s, when an unknown printer when an unknown.
                  </p>
                  <p>
                    Took a galley of type and scrambled it to make a type
                    specimen book. survived not only five centuries, but also
                    the leap into electronic remaining. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry’s standard dummy text ever since
                    the 1500s, when an unknown printer when an unknown.
                  </p>
                  <p>
                    Took a galley of type and scrambled it to make a type
                    specimen book. survived not only five centuries, but also
                    the leap into electronic remaining. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry’s standard dummy text ever since
                    the 1500s, when an unknown printer when an unknown.
                  </p>
                  <p>
                    Took a galley of type and scrambled it to make a type
                    specimen book. survived not only five centuries, but also
                    the leap into electronic remaining. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry’s standard dummy text ever since
                    the 1500s, when an unknown printer when an unknown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </React.Fragment>
    );
  }
}

export default Services;
