import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
  onSubmit = () => {
    // alert('ok')
    // if (this.state.search === "") {
    //   this.props.history.push("");
    //   return;
    // }
    this.props.history.push(`/search?query=iphone`)
  }
  render() {
    return (
      <div id="header">
        <div class="container">
          <div class="row">
            <div id="logo" class="col-lg-3 col-md-3 col-sm-12">
              <h1>
                <Link to="/">
                  <img class="img-fluid" src="/images/logo.png" />
                </Link>
              </h1>
            </div>
            <div id="search" class="col-lg-6 col-md-6 col-sm-12">
              <form class="form-inline" onSubmit={(e) => { e.preventDefault() }}>
                <input class="form-control mt-3" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                <button class="btn btn-danger mt-3" onClick={this.onSubmit}>Tìm kiếm</button>
              </form>
            </div>
            <div id="cart" class="col-lg-3 col-md-3 col-sm-12">
              <a class="mt-4 mr-2" href="#">giỏ hàng</a><span class="mt-3">8</span>
            </div>
          </div>
        </div>
        <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    );
  }
}

export default withRouter(Header);
