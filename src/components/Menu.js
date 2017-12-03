import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="shibas-menu">
                {this.props.shibas.map(shiba => {
                    return <Link key={shiba.id} to={`/shiba/${shiba.id}`} activeClassName="active"> {shiba.name} </Link>;
                })}
            </nav>
        );
    }
}