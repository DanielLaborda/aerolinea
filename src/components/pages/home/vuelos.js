import React from "react";

export const calcularTotal = e => {
    if (e.target.value == ""){
        e.target.value = 0;
    }
    var id = e.target.id.replace('personasVuelo','');
    let total = document.getElementById("precio"+id).value * e.target.value;
    document.getElementById("totalVuelo"+id).value = total;
};


export default function VuelosLista({className, vuelos, origen_name, destino_name, añadirCarrito }) {
    
    return(
        <div className={className}>
            {
                vuelos.map((vuelo, index)=>{
                    const key = "vuelo" + index;
                    const idPersonas = "personasVuelo" + vuelo.id_vuelo
                    const idButton = "btn" + vuelo.id_vuelo
                    const iPrecio = "precio" + vuelo.id_vuelo
                    const idTotal = "totalVuelo" + vuelo.id_vuelo
                    return(
                        <div key={key} className={`${className}__wrapper`}>
                            <div className={`${className}__wrapper__cover`}>
                                <div className={`${className}__wrapper__cover__info`}>
                                    <div className={`${className}__wrapper__cover__info__trayecto`}>
                                        {origen_name} - {destino_name}
                                    </div>
                                    <div className={`${className}__wrapper__cover__info__fecha`}>
                                        Dia de vuelo: {vuelo.fecha}
                                    </div>
                                    <div className={`${className}__wrapper__cover__info__hora`}>
                                        Hora de vuelo: {vuelo.hora}
                                    </div>
                                    
                                </div>
                                <div className={`${className}__wrapper__cover__precioPersona`}>
                                    $ <input type="number" id={iPrecio}  defaultValue={vuelo.precio} disabled/> x Persona
                                </div>
                                <div className={`${className}__wrapper__cover__personas`}>  
                                    <label htmlFor={idPersonas}>Numero de personas</label>
                                    <input type="number" id={idPersonas} name={idPersonas} defaultValue={0} min={0} onChange={calcularTotal} required/>
                                </div>
                                <div className={`${className}__wrapper__cover__total`}>
                                    <label htmlFor={idTotal}>Precio total</label>
                                    <input id={idTotal} name={idTotal} type="float" value={0} disabled />
                                </div>
                                <button  id={idButton}
                                 className={`${className}__wrapper__cover__btn`}
                                 onClick={añadirCarrito}>Reservar</button>
                        
                            </div>
                            
                        </div>
                    )
                })
            }
            
        </div>
    )

}