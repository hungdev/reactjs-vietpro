import React, { Component } from 'react';
import { Items } from '../components';
import * as API from '../services/Api'
import _ from 'lodash'
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryString: ''
    };
  };

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
    const preQuery = new URLSearchParams(prevProps.location.search);
    const getPreQuery = preQuery.get('query') // get iphone, props cũ

    const nextQuery = new URLSearchParams(this.props.location.search);
    const getNextQuery = nextQuery.get('query')  // get samsung props mới


    if (getPreQuery !== getNextQuery) {
      this.getData(getNextQuery)
    }
  }

  async getData(newQuery) {
    const { location } = this.props
    const query = new URLSearchParams(location.search);
    const queryString = query.get('query')
    try {
      const result = await API.getProductByName({ name: (newQuery || queryString) })
      this.setState({ products: _.get(result, 'data.data', []) })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { products } = this.state
    return (
      <div class="products">
        <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span></div>
        <div class="product-list card-deck">
          {products && products.map(e => <Items key={e._id} detail={e} />)}
        </div>
      </div>
    );
  }
}

export default Search;
