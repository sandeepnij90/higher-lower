import React from 'react';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.Component {
  render() {
    return(
      <nav>
        <div className="wrapper">
          <ul>
          <NavLink activeClassName='active' to={'/game'}><li><i className="fa fa-gamepad" aria-hidden="true"></i></li></NavLink>
          <NavLink activeClassName='active' to={'/settings'} exact to={'/'}><li className="active"><i className="fa fa-cog" aria-hidden="true"></i></li></NavLink>
          </ul>
        </div>
      </nav>
    )
  }
}
