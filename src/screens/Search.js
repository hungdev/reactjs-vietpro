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
    //c1
    // this.getData()

    //cc2
    const { location } = this.props
    const query = new URLSearchParams(location.search);
    const queryString = query.get('query')
    this.getData()
    this.setState({ queryString })
  }

  // c1
  // componentWillReceiveProps(newProps) {
  //   const { location } = newProps
  //   const query = new URLSearchParams(location.search);
  //   const queryString = query.get('query')
  //   this.getData(queryString)
  // }

  //c2
  static getDerivedStateFromProps(nextProps, prevState) {
    const { location } = nextProps
    const query = new URLSearchParams(location.search);
    const queryString = query.get('query')
    if (queryString !== prevState.queryString) {
      return { queryString: nextProps.queryString };
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props
    const query = new URLSearchParams(location.search);
    const queryString = query.get('query')

    if (prevState.queryString !== queryString) {
      this.getData(queryString);
    }
  }

  //c1
  // async getData(newQuery) {
  //   const { location } = this.props
  //   const query = new URLSearchParams(location.search);
  //   const queryString = query.get('query')
  //   try {
  //     const result = await API.getProductByName({ name: (newQuery || queryString) })
  //     this.setState({ products: _.get(result, 'data.data', []) })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  //c2
  async getData(newQuery) {
    const { queryString } = this.state
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
