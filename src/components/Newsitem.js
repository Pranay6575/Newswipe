import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
   let  {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <img src="https://cdn.24.co.za/files/Cms/General/d/8744/a7f124255a864201a3c33169cf45ab80.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
 </div>
      </div>
    )
  }
}

export default Newsitem
