import React, { Component } from 'react';
import _ from 'lodash'
import * as API from '../../services/Api'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.getMenu()
  }
  async getMenu() {
    try {
      const result = await API.getCategory()
      const categories = _.get(result, 'data.data', [])
      this.setState({ categories })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { categories } = this.state
    return (
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <nav>
            <div id="menu" class="collapse navbar-collapse">
              <ul>
                {categories && _.map(categories, e => (
                  <li key={e._id} class="menu-item"><a href="#">{e.name}</a></li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Footer;
