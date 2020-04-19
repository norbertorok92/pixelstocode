import React, { useState } from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import GoogleMapComponent from "./GoogleMapComponent"
import 'isomorphic-fetch'

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
      console.log('e', e)
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

    const successMessage = () => {
        if (status.submitted){
            return (
                <div className="alert alert-success">
                    <strong>Thank you!</strong> Your message is send to the owner
                    <button onClick={this.onHideSuccess} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

  return (
    // <main>
    //   <form onSubmit={handleOnSubmit}>
    //     <label htmlFor="email">Email</label>
    //     <input
    //       id="email"
    //       type="email"
    //       onChange={handleOnChange}
    //       required
    //       value={inputs.email}
    //     />
    //     <label htmlFor="message">Message</label>
    //     <textarea
    //       id="message"
    //       onChange={handleOnChange}
    //       required
    //       value={inputs.message}
    //     />
    //     <button type="submit" disabled={status.submitting}>
    //       {!status.submitting
    //         ? !status.submitted
    //           ? 'Submit'
    //           : 'Submitted'
    //         : 'Submitting...'}
    //     </button>
    //   </form>
    //   {status.info.error && (
    //     <div className="error">Error: {status.info.msg}</div>
    //   )}
    //   {!status.info.error && status.info.msg && (
    //     <div className="success">{status.info.msg}</div>
    //   )}
    // </main>

    <React.Fragment>
                 <section className="contact-area ptb-80">
                     <div className="container">
                         <div className="section-title">
                             <h2>Anything On your Mind. We’ll Be Glad To Assist You!</h2>
                             <div className="bar"></div>
                             <p>Don’t let technology hold you back. Break free and discover how our company can help your business grow exponentially.</p>
                         </div>

                         <div className="row h-100 justify-content-center align-items-center">

                             <div className="col-lg-6 col-md-12">
                                 <form 
                                    id="contactForm" 
                                    onSubmit={handleOnSubmit}
                                >
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    className="form-control" 
                                                    required data-error="Please enter your name" 
                                                    placeholder="Name" 
                                                    id="name"
                                                    value={inputs.name}
                                                    onChange={handleOnChange}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    className="form-control" 
                                                    required 
                                                    data-error="Please enter your email" 
                                                    placeholder="Email" 
                                                    id="email"
                                                    value={inputs.email}
                                                    onChange={handleOnChange}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text"
                                                    name="phone" 
                                                    className="form-control" 
                                                    placeholder="Phone" 
                                                    id="phone"
                                                    value={inputs.phone}
                                                    onChange={handleOnChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="subject"
                                                    className="form-control" 
                                                    placeholder="Subject" 
                                                    id="subject"
                                                    value={inputs.subject}
                                                    onChange={handleOnChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="message" 
                                                    className="form-control" 
                                                    id="message" 
                                                    cols="30" 
                                                    rows="5" 
                                                    required 
                                                    data-error="Write your message" 
                                                    placeholder="Your Message" 
                                                    id="message"
                                                    value={inputs.message}
                                                    onChange={handleOnChange}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">

                                            <button type="submit" className="btn btn-primary">Send Message</button>

                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    {successMessage}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-info-area ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <Icon.Mail />
                                    </div>
                                    <h3>Mail Here</h3>
                                    <p>
                                        <Link href="mailto:hello@pixelstocode.com">
                                            <a>hello@pixelstocode.com</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <Icon.Map />
                                    </div>
                                    <h3>Face-to-Face Chit-Chat</h3>
                                    <p>Cluj-Napoca, Romania</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMapComponent />

            </React.Fragment>
  )
}