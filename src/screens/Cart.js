import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeQuantity, removeProduct } from '../actions/cartAction';
import { getImageUrl } from '../utils'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };

  onChangeQuantity(value, product) {
    const { dispatchChangeQuantity } = this.props
    dispatchChangeQuantity({ ...product, quantity: value })
  }

  render() {
    const { cart, dispatchRemoveProduct } = this.props
    console.log('v', cart)
    const totalPrice = cart.reduce((acc, cur) => { return acc + (cur.price * cur.quantity) }, 0)
    return (
      <>
        <div id="my-cart">
          <div class="row">
            <div class="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
            <div class="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
            <div class="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
          </div>
          <form method="post" onSubmit={(e) => { e.preventDefault() }}>
            {cart && cart.map((el, i) => (
              <div key={el._id} class="cart-item row">
                <div class="cart-thumb col-lg-7 col-md-7 col-sm-12">
                  <img src={getImageUrl(el)} alt='product' />
                  <h4>{el.name}</h4>
                </div>
                <div class="cart-quantity col-lg-2 col-md-2 col-sm-12">
                  <input
                    type="number"
                    id="quantity" class="form-control form-blue quantity"
                    value={el.quantity}
                    min="1"
                    onChange={(e) => this.onChangeQuantity(e.target.value, el)}
                  />
                </div>
                <div class="cart-price col-lg-3 col-md-3 col-sm-12">
                  <b>{Intl.NumberFormat('vn-VN').format((el.price * el.quantity))}đ</b>
                  <div onClick={() => dispatchRemoveProduct(el)} className='btn'>
                    <a>Xóa</a>
                  </div>
                </div>
              </div>
            ))}


            <div class="row">
              <div class="cart-thumb col-lg-7 col-md-7 col-sm-12">
                <button id="update-cart" class="btn btn-success" onClick={() => alert('ok')} > Cập nhật giỏ hàng</button>
              </div>
              <div class="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
              <div class="cart-price col-lg-3 col-md-3 col-sm-12"><b>{Intl.NumberFormat('vn-VN').format(totalPrice)}đ</b></div>
            </div>
          </form>

        </div>

        <div id="customer">
          <form method="post">
            <div class="row">

              <div id="customer-name" class="col-lg-4 col-md-4 col-sm-12">
                <input placeholder="Họ và tên (bắt buộc)" type="text" name="name" class="form-control" required />
              </div>
              <div id="customer-phone" class="col-lg-4 col-md-4 col-sm-12">
                <input placeholder="Số điện thoại (bắt buộc)" type="text" name="phone" class="form-control" required />
              </div>
              <div id="customer-mail" class="col-lg-4 col-md-4 col-sm-12">
                <input placeholder="Email (bắt buộc)" type="text" name="mail" class="form-control" required />
              </div>
              <div id="customer-add" class="col-lg-12 col-md-12 col-sm-12">
                <input placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="add" class="form-control" required />
              </div>

            </div>
          </form>
          <div class="row">
            <div class="by-now col-lg-6 col-md-6 col-sm-12">
              <a href="#">
                <b>Mua ngay</b>
                <span>Giao hàng tận nơi siêu tốc</span>
              </a>
            </div>
            <div class="by-now col-lg-6 col-md-6 col-sm-12">
              <a href="#">
                <b>Trả góp Online</b>
                <span>Vui lòng call (+84) 0988 550 553</span>
              </a>
            </div>
          </div>
        </div>
      </>
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
    dispatchChangeQuantity: (product) => dispatch(changeQuantity(product)),
    dispatchRemoveProduct: (product) => dispatch(removeProduct(product)),
    // dispatchDeletePerson: (person) => dispatch(removePerson(person))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
