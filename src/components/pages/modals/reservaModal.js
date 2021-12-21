import React, { Component } from 'react';
import {Redirect} from 'react-router';


class ReservaModal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            redirect: false,
            guardado: false,
            redirect: false
        }
        this.cerrarModal = this.cerrarModal.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.finalizar = this.finalizar.bind(this);
    }
    
    cerrarModal() {
        this.props.cerrarModal();
    }

    handleRegisterSubmit(event) {
        event.preventDefault();
        this.setState({
            guardado: true
        })
        let datos = [{
            nombre: document.getElementById("nombreUsuario").value,
            Apellidos: document.getElementById("apellidosUsuario").value,
            direcion: document.getElementById("direcion").value,
            email: document.getElementById("email").value,
            
        }]
        this.props.guardarDatos(datos)
        
    }
    finalizar() {
        this.setState({redirect: true}); 
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/"}/>;
        }

        if(this.state.guardado === true) {
            return(
                <div className='guardadoModal'>
                    <div className='guardadoModal__wrapper'>
                        <div className='guardadoModal__wrapper__titulo'>
                            Se guardo correctamente muchas gracias
                        </div>

                        <div className='guardadoModal__wrapper__boton'>
                            <button className='guardadoModal__wrapper__boton__volver btn-reservas' onClick={this.finalizar}>Volver</button>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div className='reservasModal'>
               <div className='reservasModal__wrapper'>
                    <div className='reservasModal__wrapper__titulo'>
                        Mis datos
                    </div>
                    

                    <form className='reservasModal__wrapper__form' onSubmit={this.handleRegisterSubmit} >

                        <div className='reservasModal__wrapper__form__input'>
                            <label htmlFor='nombreUsuario'>Nombre</label>
                            <input id='nombreUsuario' name='nombreUsuario' type="text" required/>
                        </div>
                        <div className='reservasModal__wrapper__form__input'>
                            <label htmlFor='apellidosUsuario'>Apellidos</label>
                            <input id='apellidosUsuario' name='apellidosUsuario' type="text" required/>
                        </div>
                        
                        <div className='reservasModal__wrapper__form__input'>
                            <label htmlFor='direcion'>Dirección</label>
                            <input id='direcion' name='direcion' type="text" required/>
                        </div>
                        
                        <div className='reservasModal__wrapper__form__input'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' name='email' type="email" required/>
                        </div>
                        


                        <div className='reservasModal__wrapper__form__buttons'>
                            
                            <input className="reservasModal__form__buttons__submit btn-reservas" type="submit" value="Finalizar"/>

                        </div>
                    </form>
                    <button className='reservasModal__wrapper__buttons btn-reservas' onClick={this.cerrarModal}>Regresar</button>
                </div>
            </div>
            
        );

    }
}
export default ReservaModal;