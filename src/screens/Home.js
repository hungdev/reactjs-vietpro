import React, { Component } from 'react';
import { Items } from '../components';

class Home extends Component {
  render() {
    return (
      <>
        <div class="products">
          <h3>Sản phẩm nổi bật</h3>
          <div class="product-list card-deck">
            {Array(3).fill('').map(e => <Items />)}
          </div>
        </div>
        <div class="products">
          <h3>Sản phẩm mới</h3>
          <div class="product-list card-deck">
            <Items />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
