import React, { Component } from 'react';
import { Items } from '../components';
import _ from 'lodash'
import * as API from '../services/Api'

class Category extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      products: [],
      categoryId: ''
    }
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props
    const categoryId = _.get(match, 'params.categoryId')

    if (prevProps.match.params.categoryId !== categoryId) {
      this.getData(categoryId);
    }
  }

  async getData(newCategoryId) {
    const { match } = this.props
    const categoryId = _.get(match, 'params.categoryId')
    try {
      const result = await API.getProductByName({ categoryId: (newCategoryId || categoryId) })
      this.setState({ products: _.get(result, 'data.data', []) })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const { products, categoryId } = this.state
    return (
      <div class="products">
        <h3>iPhone (hiện có {products && products.length} sản phẩm)</h3>
        <div class="product-list card-deck">
          {products && products.map(e => <Items key={e._id} detail={e} />)}
        </div>
      </div>
    );
  }
}

export default Category;
