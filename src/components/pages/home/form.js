import React from "react";

export const opcionesCiudad = (ciudades) => {
    if (ciudades !== undefined) {
        const ciudadesOpciones = ciudades.map((ciudad, index) => {
            return(<option key={index} value={ciudad.id_ciudad}>{ciudad.name}</option>)
        })
        return ciudadesOpciones;
    } else {
        return(<option  key={0}  value={"sinciudad"}>Seleccione ciudad</option>)
    }
}

export default function Form({className, ciudades, onChangeOrigen, onChangeDestino }) {
    return(
        <div className={className}>
            <div className={`${className}__wrapper`}>
                <div className={`${className}__wrapper__titulo`}>
                    Busca tu vuelo
                </div>

                <form className={`${className}__wrapper__formulario`}>
                    <div className={`${className}__wrapper__formulario__selects`}>

                    
                        <div className={`${className}__wrapper__formulario__selects__origen`}>
                            <label htmlFor="origen"> Origen </label>
                            <div className="select-blanco">
                                <select id="origen" name="origen" defaultValue={"none"}  onChange={onChangeOrigen}>
                                    <option  key={"origen"}  value={"none"} disabled >Seleccione ciudad</option>
                                    { opcionesCiudad(ciudades) }
                                </select> 
                            </div>
                        </div>
                        
                        <div className={`${className}__wrapper__formulario__selects__destino`}>
                            <label htmlFor="destino"> Destino </label>
                            <div className="select-blanco">
                                <select id="destino" name="destino" defaultValue={"none"} onChange={onChangeDestino}>
                                    <option  key={"destino"}  value={"none"} disabled>Seleccione ciudad</option>
                                    { opcionesCiudad(ciudades) }
                                </select>
                            </div>
                            
                        </div>
                    </div>   
                </form>
            </div>
            
            
        </div>
    )

}