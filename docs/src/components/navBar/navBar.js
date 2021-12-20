import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        const {className, numReservas} = this.props;
        return(
            <div className={className}>
                <div className={`${className}__logo`}>
                    <NavLink exact to="/" className={`${className}__links-wrapper__option`}>
                        <div className='navbar__option__text' >Aerolinea</div>
                    </NavLink>
                    
                </div>

                <div className={`${className}__links`}>
                    <div className={`${className}__links-wrapper`}>
                        <NavLink exact to="/" className={`${className}__links-wrapper__option`}>
                            <div className='navbar__option__text' >Busquedas</div>
                        </NavLink>
                        <NavLink exact to="/reservas" className={`${className}__links-wrapper__option`}>
                            <div className='navbar__option__text' >Mi carrito <span className='numReservas'>{numReservas}</span></div>
                        </NavLink>
                    </div>
                </div>



            </div>
        )
    }
}

export default withRouter(Navbar);
