import React, { Component } from 'react';
import * as API from '../services/Api'
import _ from 'lodash'
import moment from 'moment'
import { getImageUrl } from '../utils'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

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
      console.log(detailProduct)
    } catch (error) {

    }
  }

  async getProductComments() {
    const { match } = this.props
    const id = _.get(match, 'params.productId')
    try {
      const detailProduct = await API.getProductComments(id)
      this.setState({ commentData: detailProduct.data.data })
      console.log(detailProduct)
    } catch (error) {

    }
  }



  render() {
    const { data, commentData } = this.state
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
              <li id="price-number">{data && data.price}đ</li>
              <li id="status">{isStock}</li>
            </ul>
            <div id="add-cart"><a href="#">Mua ngay</a></div>
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
            <form method="post">
              <div class="form-group">
                <label>Tên:</label>
                <input name="comm_name" required type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Email:</label>
                <input name="comm_mail" required type="email" class="form-control" id="pwd" />
              </div>
              <div class="form-group">
                <label>Nội dung:</label>
                <textarea name="comm_details" required rows="8" class="form-control"></textarea>
              </div>
              <button type="submit" name="sbm" class="btn btn-primary">Gửi</button>
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

export default Header;
