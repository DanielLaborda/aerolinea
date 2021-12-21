import React, { Component } from "react";
import ReservaModal from "../modals/reservaModal";
import ListaCarrito from "./listaCarrito";

class Reservas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openModal: false
        }
        
        this.eliminarCarrito = this.eliminarCarrito.bind(this);
        this.limpiarCarrito = this.limpiarCarrito.bind(this);
        this.openModal = this.openModal.bind(this);
        this.cerrarModal = this.cerrarModal.bind(this);
        this.guardarDatos = this.guardarDatos.bind(this);
    }

    eliminarCarrito(index){
        this.props.eliminarCarrito(index);
    }

    limpiarCarrito(){
        this.props.limpiarCarrito();
    }

    openModal() {
        this.setState({openModal: true})
    }
    cerrarModal() {
        this.setState({openModal: false})
    }
    guardarDatos(datos){
        this.props.guardarDatos(datos);
    }

    render() {
        const {className, carrito, limpiarCarrito} = this.props;
        if(this.state.openModal === true) {
            return(<ReservaModal cerrarModal={this.cerrarModal} guardarDatos={this.guardarDatos} />)
        }
        return (
            <div className={className}>

                <div className={`${className}__wrapper`}>
                    <div className={`${className}__wrapper__titulo`}>
                        {
                            (carrito == 0)?
                                "Sin reservar pendientes"  
                            :   "Mis reservas"
                        }
                    </div>
                    <div className={`${className}__wrapper__listaCarrito`}>                           
                      <ListaCarrito 
                        className={`${className}__wrapper__listaCarrito__lista`}
                        carrito={carrito}
                        eliminarCarrito={this.eliminarCarrito}
                      />
                    </div>
                    
                    <div className={`${className}__wrapper__botones`}>
                        {
                            (carrito != 0)?
                                <button onClick={limpiarCarrito} className={`${className}__wrapper__botones__limpiar btn-reservas`}>Limpiar carrito</button>
                            : ""

                            
                        }
                        {
                            (carrito != 0)?
                                <button onClick={this.openModal}className={`${className}__wrapper__botones__finalizar btn-reservas`}>Finalizar Reserva{" >>"}</button>
                            : ""
                        }
                        
                    </div>
                    
                </div>
                



            </div>
        );
    }

}

export default Reservas;