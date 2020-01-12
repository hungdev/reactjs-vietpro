import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Items() {
  return (
    <div class="product-item card text-center">
      <Link to={`product/1`}>
        <img src="/images/product-1.png" />
      </Link>
      <h4>
        <Link to={`product/1`}>iPhone Xs Max 2 Sim - 256GB</Link>
      </h4>
      <p>Giá Bán: <span>32.990.000đ</span></p>
    </div>
  )
}

