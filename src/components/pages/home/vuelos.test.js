import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VuelosLista from "./vuelos";

configure({ adapter: new Adapter() });

describe('Duck Vuelos', () => {
    describe('Vuelos', () => {
        it('VuelosLista', () => {
            const className = "home__listaVuelos";
            const vuelos = [{
                "vuelos": [{
                    "id_vuelo": 0,
                    "origen_id": 0,
                    "destino_id": 1,
                    "fecha": "2021-12-05",
                    "hora": "00:00",
                    "precio": 300
                }]
            }];
            const origen_name = 'Madrid';
            const destino_name = 'La paz';
            const añadirCarrito = jest.fn();
            const wrapper = shallow(<VuelosLista className={className} vuelos={vuelos} origen_name={origen_name} destino_name={destino_name} añadirCarrito={añadirCarrito}/>);
            expect(wrapper.text().includes("Madrid")).toEqual(true);
            expect(wrapper.text().includes("La paz")).toEqual(true);
            
            wrapper
             .find("button")
             .at(0)
             .simulate("click");

            
            expect(añadirCarrito.mock.calls).toEqual([[]]);
        })
    })
})