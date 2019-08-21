import React from 'react'
import Link from 'next/link'

export default class Partner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="ready-to-talk">
                    <div className="container">
                        <h3>Ready to talk?</h3>
                        <p>The team is here to answer your questions</p>
                        <Link activeClassName="active" href="/contact">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                        <span>
                            <Link href="/services">
                                <a>Or, learn more about our services</a>
                            </Link>
                        </span>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
