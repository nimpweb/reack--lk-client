import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Page } from './components/ui'
import { Routes as RoutesList } from './Routes'
import { Page404 } from './pages'

const InitApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        { RoutesList.map( ({Path, Component, Title, Sidebar, Header})  => (
          <Route
            key={Path} 
            path={Path} 
            render={ props => <Page title={Title} Sidebar={Sidebar} Header={Header} ><Component {...props}/></Page> } 
            exact
          />
        ) ) }
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default InitApp