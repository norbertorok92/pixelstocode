import React from 'react'
import Link from 'next/link'

export default class Partner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="ready-to-talk">
                    <div className="container">
                        <h3>Like what you see?</h3>
                        <p>Let's start a conversation.</p>
                        <Link activeClassName="active" href="/contact">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                        <span>
                            <Link href="/about">
                                <a>Or, learn more about us.</a>
                            </Link>
                        </span>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
