import React from 'react'
import NavBar from 'containers/NavBar'
import Home from 'containers/Home'
import Cart from 'containers/Cart'
import TopProducts from 'containers/TopProducts'
import Products from 'containers/Products'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div className="app">
      <NavBar />
      <div className="container page">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/top-products">
            <TopProducts />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
)
export default App
