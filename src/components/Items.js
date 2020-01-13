import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import baseUrl from '../services/config';

export default function Items({ detail }) {
  const imageName = detail && detail.image && detail.image.replace('uploads/', '')
  return (
    <div class="product-item card text-center">
      <Link to={`/product/${detail && detail._id}`}>
        <img src={`${baseUrl.devUrl}/${imageName}`} alt='product' />
      </Link>
      <h4>
        <Link to={`product/1`}>{detail && detail.name}</Link>
      </h4>
      <p>Giá Bán: <span>{detail && detail.price}đ</span></p>
    </div>
  )
}

