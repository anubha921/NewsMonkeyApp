import React from 'react'

const NewsItem = (props)=> { 
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{'display': 'flex','justifyContent': 'flex-end','position': 'absolute','right': '0'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={!imageUrl?"https://images.livemint.com/img/2022/11/29/600x338/58ed1798-56ac-11ec-8b80-57aca72afec1_1638816933142_1669713495261_1669713495261.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
