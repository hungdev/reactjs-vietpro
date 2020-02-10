import React, { Component } from 'react';
import * as API from '../services/Api'
import _ from 'lodash'
import moment from 'moment'
import { connect } from 'react-redux';
import { getImageUrl } from '../utils'
import { addCart } from '../actions/cartAction'

const defaultData = {
  name: '',
  content: '',
  email: ''
}
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: defaultData,
      name: '',
    }
  }

  componentDidMount() {
    this.getDetailProduct()
    this.getProductComments()
  }

  async getDetailProduct() {
    const { match } = this.props
    const id = _.get(match, 'params.productId')
    try {
      const detailProduct = await API.getDetailProducts(id)
      this.setState({ data: detailProduct.data.data })
      // console.log(detailProduct)
    } catch (error) {

    }
  }

  async getProductComments() {
    const { match } = this.props
    const id = _.get(match, 'params.productId')
    try {
      const detailProduct = await API.getProductComments(id)
      this.setState({ commentData: detailProduct.data.data })
      // console.log(detailProduct)
    } catch (error) {

    }
  }


  onInputChange(val, type) {
    const { formData } = this.state
    this.setState({
      formData: {
        ...formData,
        [type]: val.target.value
      }
    })
  }

  async onSubmit() {
    const { formData } = this.state
    const { match } = this.props
    const id = _.get(match, 'params.productId')
    try {
      await API.createComment({ ...formData, productId: id })
      this.getProductComments()
      this.setState({ formData: defaultData })
    } catch (error) {
      console.log(error)
    }
  }

  addCart(data) {
    const { dispatchAddCart, history } = this.props
    dispatchAddCart({ ...data, quantity: 1 })
    // history.push('/cart')
  }

  render() {
    const { data, commentData, formData } = this.state

    const isStock = data && data.is_stock ? 'Còn hàng' : 'Hết hàng'

    return (
      <div id="product">
        <div id="product-head" class="row">
          <div id="product-img" class="col-lg-6 col-md-6 col-sm-12">
            <img src={getImageUrl(data)} alt='product' />
          </div>
          <div id="product-details" class="col-lg-6 col-md-6 col-sm-12">
            <h1>{data && data.name}</h1>
            <ul>
              <li><span>Bảo hành:</span> 12 Tháng</li>
              <li><span>Đi kèm:</span> {data && data.accessories}</li>
              <li><span>Tình trạng:</span> {data && data.status}</li>
              <li><span>Khuyến Mại:</span> {data && data.accessories}</li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">{Intl.NumberFormat('vn-VN').format(data && data.price)}đ</li>
              <li id="status">{isStock}</li>
            </ul>
            <div id="add-cart">
              <a href="#" onClick={() => this.addCart(data)}>
                Mua ngay</a>
            </div>
          </div>
        </div>
        <div id="product-body" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h3>{data && data.name}</h3>
            <p>
              {data && data.details}
            </p>
          </div>
        </div>

        <div id="comment" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="post" onSubmit={(e) => { e.preventDefault() }}>
              <div class="form-group">
                <label>Tên:</label>
                <input
                  name="name"
                  required type="text"
                  class="form-control"
                  value={formData.name}
                  onChange={(e) => this.onInputChange(e, 'name')}
                />
              </div>
              <div class="form-group">
                <label>Email:</label>
                <input
                  name="email"
                  required type="email"
                  class="form-control"
                  value={formData.email}
                  onChange={(e) => this.onInputChange(e, 'email')}
                />
              </div>
              <div class="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="content"
                  required rows="8"
                  class="form-control"
                  value={formData.content}
                  onChange={(e) => this.onInputChange(e, 'content')}
                />
              </div>
              <button
                type="submit"
                name="sbm"
                class="btn btn-primary"
                onClick={() => this.onSubmit()}
              >Gửi</button>
            </form>
          </div>
        </div>

        <div id="comments-list" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            {commentData && commentData.map((e, i) => (
              <div class="comment-item" key={i}>
                <ul>
                  <li><b>{e && e.name}</b></li>
                  <li>{moment(e && e.updated_date).format('DD-MM-YYYY hh:mm:ss')}</li>
                  <li>
                    <p>{e && e.content}</p>
                  </li>
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

// lấy state từ store redux
function mapStateToProps(state) {
  return {
    // state: state từ store, 
    // cartReducer: reducer được import trong index combineReducers
    // cart: lấy từ state trong cartReducer, ( dòng 5 trong cartReducer.js)
    cart: state.cartReducer.cart
  }
}

// gửi action lên reducer
function mapDispatchToProps(dispatch) {
  return {
    // addCart là action
    dispatchAddCart: (product) => dispatch(addCart(product)),
    // dispatchDeletePerson: (person) => dispatch(removePerson(person))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)