import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Menu from './Layout/Menu'
import Slide from './Layout/Slide'
import SideBanner from './Layout/SideBanner'
import Home from './Home'
import Product from './Product'
import Category from './Category'
import Cart from './Cart'
import Search from './Search'
import Success from './Success'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div id="body">
          <div class="container">
            <Menu />
            <div class="row">
              <div id="main" class="col-lg-8 col-md-12 col-sm-12">
                <Slide />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/product/:productId" component={Product} />
                  <Route path="/category/:categoryId" component={Category} />
                  <Route exact path="/cart" component={Cart} />
                  <Route path="/cart/success" component={Success} />
                  <Route path="/search" component={Search} />
                </Switch>
              </div>
              <SideBanner />
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App