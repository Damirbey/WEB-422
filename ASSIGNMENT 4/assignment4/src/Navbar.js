import React, {Component} from 'react';

class Nav extends Component{
    render()
    {
        return( 
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">{this.props.title}</a>
          </div>
        </div>
      </nav>
      </div>)
    }
}

export default Nav;