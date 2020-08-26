import React, { createContext, useReducer } from 'react'
import NavBar from 'containers/NavBar'
import Home from 'containers/Home'
import Cart from 'containers/Cart'
import TopProducts from 'containers/TopProducts'
import Products from 'containers/Products'
import useProducts from 'hooks/useProducts'
import cartReducer, { initialState as cartState } from 'reducers/cart'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const ProductsContext = createContext(null)
export const CartContext = createContext(null)

const App = () => {
  const [products] = useProducts()
  const [cart, dispatch] = useReducer(cartReducer, cartState)

  return (
    <ProductsContext.Provider value={{ products }}>
      <CartContext.Provider value={{ cart, dispatch }}>
        <Router>
          <div className="app">
            <NavBar />
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
        </Router>
      </CartContext.Provider>
    </ProductsContext.Provider>
  )
}
export default App
