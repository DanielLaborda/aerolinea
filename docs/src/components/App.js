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
      destino_id: "",
      destino_name: "",
      vuelos: [],
      carrito: [],
      numReservas: ""
    }

    this.onChangeFecha= this.onChangeFecha.bind(this);
    this.onChangeOrigen= this.onChangeOrigen.bind(this);  
    this.onChangeDestino= this.onChangeDestino.bind(this);  
    this.añadirCarrito= this.añadirCarrito.bind(this);  
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
      destino_id: "",
      destino_name: "",
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
      vuelos: vuelos
    });
  }

  añadirCarrito(event) {
    console.log('se añade al carrito');
    const id = event.target.id.slice(-1)

    const idPersonasVuelo = "personasVuelo" + id;
    const idTotalVuelo = "totalVuelo" + id;
    
    let numPers = 0;
    if (document.getElementById(idPersonasVuelo).value != null) {
      numPers = document.getElementById(idPersonasVuelo).value;
    }
    const totalVuelo = document.getElementById(idTotalVuelo).value;
    console.log(totalVuelo);
    if(numPers > 0){
      const addCarrito = {
        idVuelo: id,
        id_origen: this.state.id_origen,
        origen_name: this.state.origen_name,
        destino_id: this.state.id_destino,
        destino_name: this.state.destino_name,
        personas: numPers,
        totalVuelo: totalVuelo
      };
      const carrito = this.state.carrito;
      carrito.push(addCarrito)
      console.log(carrito);
      this.setState({
        carrito: carrito,
        numReservas: carrito.length
      });
      document.getElementById(idPersonasVuelo).value=0;
    }else {
      alert('Tiene que ser almenos 1 persona');
    }
  }

  render() {
    const {ciudades} = this.props;
    return (
      <div className="App">
        <Router>
          <Navbar className="navbar"
            numReservas={this.state.numReservas}
          />

          <Switch>
            <Route path='/' exact render={ props => (
              <Home
                {...props} 
                className={'home'} 
                ciudades={ciudades.ciudades}
                vuelos={this.state.vuelos}
                origen_name={this.state.origen_name}
                destino_name={this.state.destino_name}
                onChangeOrigen={this.onChangeOrigen}
                onChangeDestino={this.onChangeDestino}
                añadirCarrito={this.añadirCarrito}
              />
            )}/>
            <Route path='/reservas' exact render={ props => (
              <Reservas
                className={'reservas'}
              />
            )}/>
          </Switch>

        </Router>
        {/* 
        <div className="App__ListaVuelos">
          {
            this.state.vuelos.map((vuelo, index)=>{
              const key = "vuelo" + index;
              const idPersonas = "personasVuelo" + vuelo.id_vuelo
              const idButton = "btn" + vuelo.id_vuelo
              return(
                <div key={key}>
                  <div className="trayecto">
                    {this.state.origen_name} - {this.state.destino_name}
                    <div className="fecha">
                      {vuelo.fecha}
                    </div>
                    <div className="hora">
                      {vuelo.hora}
                    </div>
                  </div>
                  <div className="personas">  
                    <label htmlFor={idPersonas}>Numero de personas</label>
                    <input type="number" id={idPersonas} name={idPersonas} defaultValue={0} min={0} required/>
                  </div>
                  
                  <button id={idButton} onClick={this.añadirCarrito}>Reservar</button>
                  
                </div>
              )
            })
          }
        </div> */}


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
