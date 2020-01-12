import React, { Component } from 'react';
import { Items } from '../components';

class Header extends Component {
  render() {
    return (
      <div class="products">
        <h3>iPhone (hiện có 186 sản phẩm)</h3>
        <div class="product-list card-deck">
          {Array(3).fill('').map(e => <Items />)}
        </div>
      </div>
    );
  }
}

export default Header;
