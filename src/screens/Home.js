import React, { Component } from 'react';
import { Items } from '../components';
import * as API from '../services/Api'
import _ from 'lodash'
import Loading from '../components/Loading'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featData: [],
      newData: []
    }
  }

  componentDidMount() {
    //cach 1
    // this.getFeatureProduct()

    //cach 2
    this.getProduct()
  }

  // cach 1
  // async getFeatureProduct() {
  //   try {
  //     const featurePr = await API.getFeatureProducts({ limit: 9 })
  //     this.setState({ data: featurePr.data.data })
  //     // console.log(featurePr)
  //   } catch (error) {

  //   }
  // }

  //cach 2
  async getProduct() {
    try {
      this.setState({ loading: true })
      const [featPr, newPr] = await Promise.all([
        API.getFeatureProducts({ limit: 9 }),
        API.getNewProducts({ limit: 6 }),
      ])
      const featData = _.get(featPr, 'data.data', [])
      const newData = _.get(newPr, 'data.data', [])
      this.setState({ featData, newData, loading: false })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { featData, newData, loading } = this.state
    return (
      <div>
        <Loading loading={loading} />
        <div class="products">
          {!loading && <h3>Sản phẩm nổi bật</h3>}
          <div class="product-list card-deck">
            {featData && featData.map((e, i) => <Items key={i} detail={e} />)}
          </div>
        </div>
        <div class="products">
          {!loading && <h3>Sản phẩm mới</h3>}
          <div class="product-list card-deck">
            {newData && newData.map((e, i) => <Items key={i} detail={e} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
