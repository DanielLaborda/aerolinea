import React, { Component, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../App.css";


class App extends Component {
  constructor(props){
    super(props);

    var hoy = new Date(),
      dia = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate(),
      diaMin = hoy.getFullYear() + '-01-01',
      diaMax = hoy.getFullYear() + '-12-31';

    this.state = {
      fechaMin: diaMin,
      fechaMax: diaMax,
      fecha: dia,
      ciudades: [],
      id_origen: "",
      origen_name: "",
      destino_id: "",
      destino_name: "",
      vuelos: [],
      carrito: []
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

  opcionesCiudad() {
    if(this.props.ciudades.ciudades !== undefined){
      const ciudades = this.props.ciudades.ciudades.map((ciudad, index)=> {
        return(<option  key={index}  value={ciudad.id_ciudad}>{ciudad.name}</option>)
      })
      return ciudades;
    } else {
      return(<option  key={0}  value={"sinciudad"}>Seleccione ciudad</option>)
    }
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
    const numPers = document.getElementById(idPersonasVuelo).value;
    if(numPers > 0){
      console.log(this.state);
      const addCarrito = {
        idVuelo: id,
        id_origen: this.state.id_origen,
        origen_name: this.state.origen_name,
        destino_id: this.state.id_destino,
        destino_name: this.state.destino_name,
        personas: numPers
      };
      const carrito = this.state.carrito;
      carrito.push(addCarrito)
      console.log(carrito);
      this.setState({
        carrito: carrito
      });
    }else {
      alert('Tiene que ser almenos 1 persona');
    }
  }


  render() {
    return (

      <div className="App">
        Aerolinea
        <div className="App__Form">
          <form>
            <label htmlFor="origen"> Origen </label>
            <select id="origen" name="origen" defaultValue={"none"}  onChange={this.onChangeOrigen}>
              <option  key={"origen"}  value={"none"} disabled >Seleccione ciudad</option>
              { this.opcionesCiudad() }
            </select>

            <label htmlFor="destino"> Destino </label>
            <select id="destino" name="destino" defaultValue={"none"} onChange={this.onChangeDestino}>
              <option  key={"destino"}  value={"none"} disabled>Seleccione ciudad</option>
              { this.opcionesCiudad() }
            </select>
          </form>
        </div>

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
        </div>


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
