import React, { Component } from "react";

class ListaCarrito extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const id = e.target.id.replace('eliminar','');
        this.props.eliminarCarrito(id);
    }

    render(){
        const { className, carrito } = this.props;

        return (
            <ul className={`${className}`}>
                {
                    carrito.map((reserva, index) => {
                        return(
                            <li key={index}>
                                <div className={`${className}__li`}>
                                    <div className={`${className}__li__info`}>
                                        idVuelo: {reserva.idVuelo}
                                        trayecto:
                                        {reserva.origen_name} --- {reserva.destino_name}
                                        numero de personas:{reserva.personas}
                                        precio: {reserva.totalVuelo}
                                    </div>
                                    
                                    <div className={`${className}__li__boton`}>
                                        <button id={`eliminar${index}`} onClick={this.handleClick}>Borrar</button>
                                    </div>
                                </div>
                                
    
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ListaCarrito;
