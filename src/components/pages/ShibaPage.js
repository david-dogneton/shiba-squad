import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Menu from '../Menu';

import shibas from '../../data/shibas';

export default class ShibaPage extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const shiba = shibas.filter((shiba) => shiba.id === id)[0];
    if (!shiba) {
      return <NotFoundPage/>;
    }
    return (
      <div className="shiba-full">
        <Menu shibas={shibas}/>
        <div className="shiba">
          <div className="picture-container">
            <img src={`../img/${shiba.image}`}/>
            <h2 className="name">{shiba.name}</h2>
          </div>
          <section className="description">
            born in {shiba.birth}.
          </section>
        </div>
      </div>
    );
  }
}
