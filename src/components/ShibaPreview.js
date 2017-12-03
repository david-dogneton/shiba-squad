import React from 'react';
import { Link } from 'react-router';

export default class ShibaPreview extends React.Component {
  render() {
    return (
      <Link to={`/shiba/${this.props.id}`}>
        <div className="shiba-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}