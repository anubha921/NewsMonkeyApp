import React, { Component } from 'react'

export class NewsItem extends Component { 
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
            <img src={!imageUrl?"https://images.livemint.com/img/2022/11/29/600x338/58ed1798-56ac-11ec-8b80-57aca72afec1_1638816933142_1669713495261_1669713495261.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
