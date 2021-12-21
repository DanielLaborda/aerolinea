import React, { Component } from 'react';
import Form from './home/form';
import VuelosLista from './home/vuelos';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {className, ciudades, onChangeOrigen, onChangeDestino, vuelos, origen_name, origen_letras, destino_name, destino_letras, añadirCarrito} = this.props;
        return (
            <div className={className}>
                <Form  
                    className={`${className}__form`} 
                    ciudades={ciudades} 
                    onChangeOrigen={onChangeOrigen}
                    onChangeDestino={onChangeDestino}
                />
                <VuelosLista 
                    className={`${className}__listaVuelos`} 
                    vuelos={vuelos}
                    origen_name={origen_name}
                    origen_letras={origen_letras}
                    destino_name={destino_name}
                    destino_letras={destino_letras}
                    añadirCarrito={añadirCarrito}
                />
                
            </div>
        );
    }

}

export default Home;