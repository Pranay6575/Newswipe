import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
   let  {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://d2ksis2z2ke2jq.cloudfront.net/uploads/2023/02/GroupM-Site_Large-BacktoNews-1180x665.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
                 <p className="card-text">{description}...</p>
                  <a href={newsUrl} className="btn btn-sm btn-info">Read More</a>
     </div>
 </div>
      </div>
    )
  }
}

export default Newsitem
