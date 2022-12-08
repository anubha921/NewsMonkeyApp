import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
    return (
      <div>
        <img className='my-3 img-responsive center-block d-block mx-auto' src={loading} alt="loading" />
      </div>
    )
}

export default Spinner
