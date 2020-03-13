import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import FooterGuide from './components/FooterGuide'
import MsiteHeader from './components/MsiteHeader'
import routes from './config/routes'
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(route => (
            <Route {...route} key={route.path} />
          ))}
          <Redirect from="/" to="/msite"></Redirect>
        </Switch>
        <FooterGuide />
        <MsiteHeader />
      </div>
    )
  }
}
