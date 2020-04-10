import React from "react"
import ReactGA from 'react-ga'
 
const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-127403256-8')
}

const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default class GAnalytics extends React.Component {
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