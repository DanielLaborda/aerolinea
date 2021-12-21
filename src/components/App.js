import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

import { connect } from "react-redux";
import * as actions from "../actions";


import Navbar from './navBar/navBar';
import Home from "./pages/home";
import Reservas from './pages/reservas/reservas';


class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      ciudades: [],
      id_origen: "",
      origen_name: "",
      origen_letras: "",
      destino_id: "",
      destino_name: "",
      destino_letras: "",
      vuelos: [],
      carrito: [],
      datosUsuario: []
    }

    this.onChangeFecha= this.onChangeFecha.bind(this);
    this.onChangeOrigen= this.onChangeOrigen.bind(this);  
    this.onChangeDestino= this.onChangeDestino.bind(this);  
    this.añadirCarrito= this.añadirCarrito.bind(this);  
    this.eliminarCarrito = this.eliminarCarrito.bind(this);
    this.limpiarCarrito = this.limpiarCarrito.bind(this);
    this.guardarDatos = this.guardarDatos.bind(this);
  }

  componentDidMount() {
    this.props.fetchCiudades();
    this.props.fetchVuelos(); 
  }

  onChangeFecha(fecha) {
    this.setState({fecha: fecha});
  }

  onChangeOrigen(event) {
    let origen = [];
    this.props.ciudades.ciudades.map((ciudad) => {
      if(ciudad.id_ciudad == event.target.value){
        origen = ciudad;
      }
    })
    this.setState({
      id_origen: origen.id_ciudad,
      origen_name: origen.name,
      origen_letras: origen.letras,
      destino_id: "",
      destino_name: "",
      destino_letras: "",
      vuelos: []
    });
    document.getElementById('destino').value = "none";
  }

  onChangeDestino(event) {
    let destino = [];
    this.props.ciudades.ciudades.map((ciudad) => {
      if(ciudad.id_ciudad == event.target.value){
        destino = ciudad;
      }
    });
    let vuelos = [];
    this.props.vuelos.vuelos.map((vuelo) => {
      if(vuelo.origen_id == this.state.id_origen && vuelo.destino_id == event.target.value){
        vuelos.push(vuelo)
      }
    });
    this.setState({
      id_destino: destino.id_ciudad,
      destino_name: destino.name,
      destino_letras: destino.letras,
      vuelos: vuelos
    });
  }

  añadirCarrito(event) {
    const id = event.target.id.replace('btn','');

    const idPersonasVuelo = "personasVuelo" + id;
    const idTotalVuelo = "totalVuelo" + id;
    
    let numPers = 0;
    if (document.getElementById(idPersonasVuelo).value != "") {
      numPers = document.getElementById(idPersonasVuelo).value;
    }
    const totalVuelo = document.getElementById(idTotalVuelo).value;
    if(numPers > 0){
      const addCarrito = {
        idVuelo: id,
        id_origen: this.state.id_origen,
        origen_name: this.state.origen_name,
        origen_letras: this.state.origen_letras,
        destino_id: this.state.id_destino,
        destino_name: this.state.destino_name,
        destino_letras: this.state.destino_letras,
        personas: numPers,
        totalVuelo: totalVuelo
      };
      const carrito = this.state.carrito;
      carrito.push(addCarrito)
      console.log(carrito);
      this.setState({
        id_origen: "",
        origen_name: "",
        origen_letras: "",
        destino_id: "",
        destino_name: "",
        destino_letras: "",
        vuelos: [],
        carrito: carrito
      });
      document.getElementById(idPersonasVuelo).value=0;
    }else {
      alert('Tiene que ser almenos 1 persona');
    }
  }

  eliminarCarrito(index) {
    if(this.state.carrito.length > 1) {
      const nuevoCarrito = this.state.carrito.splice(index, 1);
      this.setState({
        carrito: nuevoCarrito
      });
    } else {
      this.setState({
        carrito: []
      });
    }
  }

  limpiarCarrito() {
    this.setState({
      carrito: []
    });
  }

  guardarDatos(datos) {
    this.setState({
      datosUsuario: datos,
      carrito: []
    });
  }

  render() {
    const {ciudades} = this.props;
    return (
      <div className="App">
        <Router>
          <Navbar className="navbar"
            numReservas={this.state.carrito.length}
          />

          <Switch>
            <Route path='/' exact render={ props => (
              <Home
                {...props} 
                className={'home'} 
                ciudades={ciudades.ciudades}
                vuelos={this.state.vuelos}
                origen_name={this.state.origen_name}
                origen_letras={this.state.origen_letras}
                destino_name={this.state.destino_name}
                destino_letras={this.state.destino_letras}
                onChangeOrigen={this.onChangeOrigen}
                onChangeDestino={this.onChangeDestino}
                añadirCarrito={this.añadirCarrito}
                
              />
            )}/>
            <Route path='/reservas' exact render={ props => (
              <Reservas
                {...props} 
                className={'reservas'}
                carrito={this.state.carrito}
                eliminarCarrito={this.eliminarCarrito}
                limpiarCarrito={this.limpiarCarrito}
                guardarDatos={this.guardarDatos}
              />
            )}/>
          </Switch>

        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    ciudades: state.default.ciudades.recentCiudades,
    vuelos: state.default.vuelos.recentVuelos
  }
};

export default connect(
  mapStateToProps, actions
)(App);
