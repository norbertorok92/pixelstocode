import React, { Component } from "react"
import ReactGA from 'react-ga'
 
export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-127403256-8')
}

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

// export const logEvent = (category = '', action = '') => {
//   if (category && action) {
//     ReactGA.event({ category, action })
//   }
// }
// export const logException = (description = '', fatal = false) => {
//   if (description) {
//     ReactGA.exception({ description, fatal })
//   }
// }

export default class GAnalytics extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
 
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}