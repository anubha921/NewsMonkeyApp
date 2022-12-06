import React, { Component } from 'react'
import loading from './loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div>
        <img className='my-3 img-responsive center-block d-block mx-auto' src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner
