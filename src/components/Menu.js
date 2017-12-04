import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="shibas-menu">
                {this.props.shibas.map(shiba => {
                    return <NavLink key={shiba.id} to={`/shiba/${shiba.id}`} activeclassname="active"> {shiba.name} </NavLink>;
                })}
            </nav>
        );
    }
}
