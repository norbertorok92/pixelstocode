import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="ml-services-area ptb-80">
          <div className="container">
            <div className="row">
            
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/gphoto.jpg")} alt="gphoto" />
                  </div>
                  <h3>
                    <Link href="https://www.gphoto.ro">
                      <a className="btn btn-light">Gphoto Gallery | Fine Art Photography</a>
                    </Link>
                  </h3>
                  <p>A photo portfolio website for a true artist, based in Romania. This is a portfolio, but an online store as well. Its in shopify and uses a custom theme.</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/glowlissorganics.jpg")} alt="glowliss organics" />
                  </div>
                  <h3>
                    <Link href="https://glowlissorganics.com/">
                      <a className="btn btn-light">Glowliss Organic</a>
                    </Link>
                  </h3>
                  <p>An ecommerce store in the beaty and health industry. Based in NYC. This store is created in shopify, and we worked with the client to customize the theme.</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/solidandstriped.jpg")} alt="solidandstriped" />
                  </div>
                  <h3>
                    <Link href="http://solidandstriped.com/">
                      <a className="btn btn-light">solid&striped</a>
                    </Link>
                  </h3>
                  <p>Solid & Striped is swimwear & après swim, made from the finest globally sourced fabrics, guided by a desire for everlasting holidays and classic style.</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/Senlis.jpg")} alt="Senlis" />
                  </div>
                  <h3>
                    <Link href="http://senlis.com/">
                      <a className="btn btn-light">Senlis</a>
                    </Link>
                  </h3>
                  <p>Senlis is a brand of affordable floral dresses with a store in West Hollywood, inspired by the french town of the same name.</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/norbertorok.jpg")} alt="norbertorok" />
                  </div>
                  <h3>
                    <Link href="https://www.norbertorok.com/">
                      <a className="btn btn-light">Norbert Torok - Presentation Website</a>
                    </Link>
                  </h3>
                  <p>A website for a web developer based in Romania. AngularJS is what we used for this website.</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/rollins.jpg")} alt="rollins shoes" />
                  </div>
                  <h3>
                    <Link href="https://rollins-shoes.com/">
                      <a className="btn btn-light">Rollins shoes</a>
                    </Link>
                  </h3>
                  <p>A NYC based ecommerce store, that sells handmade shoes. An online store built in shopify.</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/mdclimaterm.jpg")} alt="mdclimaterm" />
                  </div>
                  <h3>
                    <Link href="https://www.mdclimaterm.ro">
                      <a className="btn btn-light">MDClimaterm</a>
                    </Link>
                  </h3>
                  <p>A presentation website for a plumbing and installations company based in Cluj-Napoca. We used wordpress to be easy for managing the content of the website.</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="single-ml-services-box">
                  <div className="image">
                    <img src={require("../../images/works-image/cryptoz.jpg")} alt="cryptoz" />
                  </div>
                  <h3>
                    <Link href="http://cryptoz.co.uk/">
                      <a className="btn btn-light">Cryptoz</a>
                    </Link>
                  </h3>
                  <p>A multi-functional cryptocurrency mining platform, based in UK. We used Ruby on Rails for the backend and ReactJS for the frontend. Its a web application we are very proud of.</p>
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
