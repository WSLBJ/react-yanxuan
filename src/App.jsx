import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import FooterGuide from './containers/FooterGuide'
import MsiteHeader from './containers/Msite/MsiteHeader'
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
