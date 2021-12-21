import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "./Form";

configure({ adapter: new Adapter() });

describe('Duck Form', () => {
    describe('Form', () => {
        it('manejo en caso de exito', () => {
            const className = "home__form";
            const ciudades = ['madrid']
            const onChangeOrigen = jest.fn();
            const onChangeDestino = jest.fn();
            const wrapper = shallow(<Form className={className} ciudades={ciudades} onChangeOrigen={onChangeOrigen} onChangeDestino={onChangeDestino} />);
            wrapper
            .find("select")
            .at(0)
            .simulate("change", { target: { value: "none" } });

            wrapper
            .find("select")
            .at(1)
            .simulate("change", { target: { value: "none" } });
            expect(onChangeOrigen.mock.calls).toEqual([
                [ { target: { value: 'none' } } ]
            ]);
            expect(onChangeDestino.mock.calls).toEqual([
                [ { target: { value: 'none' } } ]
            ]);
        })
    })
})