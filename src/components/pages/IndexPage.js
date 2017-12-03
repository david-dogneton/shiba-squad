import React from 'react';
import ShibaPreview from '../ShibaPreview';
import shibas from '../../data/shibas';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="shibas-selector">
          {shibas.map(shibaData => <ShibaPreview key={shibaData.id} {...shibaData} />)}
        </div>
      </div>
    );
  }
}