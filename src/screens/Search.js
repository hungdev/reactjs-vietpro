import React, { Component } from 'react';
import { Items } from '../components';

class Search extends Component {
  render() {
    return (
      <div class="products">
        <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span></div>
        <div class="product-list card-deck">
          {Array(3).fill('').map(e => <Items />)}
        </div>
      </div>
    );
  }
}

export default Search;
