# Proyecto aerolinea

Este proyecto esta realizado en Reactjs 

## Paquetes necesarios para ejecutar 

Los paquetes utilizados son:
-Paquetes:
"axios": "^0.21.1",
"node-sass": "^7.0.0",
"react-router": "5.1.2",
"react-router-dom": "5.1.2",
"redux": "^4.0.1",
"redux-thunk": "^2.3.0"

-paquetes de pruebas
"enzyme": "^3.11.0",
"enzyme-adapter-react-16": "^1.15.6",
"jest": "^27.4.5"

### `npm start`

El servidor de desarrollo utilizado es [http://localhost:3000]


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### gitHub pages
El link para ver la pagina ejecutandose: [https://daniellaborda.github.io/aerolinea/]

### mock utilizado  y datos
En este caso utilice un mock generado por postman  con los siguientes datos
En el ambito de ciudades los datos son los siguientes:
{
    "ciudades": [
        {
            "id_ciudad": 0,
            "name": "Ciudad de México",
            "letras": "CDMX" 
        },
        {
            "id_ciudad": 1,
            "name": "Guadalajara",
            "letras": "GDL"  
        },
        {
            "id_ciudad": 2,
            "name": "La paz",
            "letras": "LPZ" 
        },
        {
            "id_ciudad": 3,
            "name": "Zaragoza",
            "letras": "ZGZ" 
        }
    ]
}
En el ambito de vuelos los datos son los siguientes:
{
    "vuelos": [
        {
            "id_vuelo": 0,
            "origen_id": 0,
            "destino_id": 1,
            "fecha": "2021-12-05",
            "hora": "00:00",
            "precio": 300
        },
        {
            "id_vuelo": 1,
            "origen_id": 0,
            "destino_id": 1,
            "fecha": "2021-12-15",
            "hora": "15:00",
            "precio": 500
        },
        {
            "id_vuelo": 2,
            "origen_id": 0,
            "destino_id": 1,
            "fecha": "2021-12-22",
            "hora": "12:00",
            "precio": 500
        },
        {
            "id_vuelo": 3,
            "origen_id": 0,
            "destino_id": 1,
            "fecha": "2021-12-31",
            "hora": "11:00",
            "precio": 1500
        },
        {
            "id_vuelo": 4,
            "origen_id": 0,
            "destino_id": 2,
            "fecha": "2021-12-01",
            "hora": "09:00",
            "precio": 6500
        },
        {
            "id_vuelo": 5,
            "origen_id": 0,
            "destino_id": 2,
            "fecha": "2021-12-05",
            "hora": "00:00",
            "precio": 1400
        },
        {
            "id_vuelo": 6,
            "origen_id": 0,
            "destino_id": 2,
            "fecha": "2021-12-11",
            "hora": "20:00",
            "precio": 1700
        },
        {
            "id_vuelo": 7,
            "origen_id": 0,
            "destino_id": 2,
            "fecha": "2021-12-13",
            "hora": "04:00",
            "precio": 1500
        },
        {
            "id_vuelo": 8,
            "origen_id": 0,
            "destino_id": 2,
            "fecha": "2021-12-31",
            "hora": "21:00",
            "precio": 1700
        },
        {
            "id_vuelo": 9,
            "origen_id": 0,
            "destino_id": 3,
            "fecha": "2021-12-12",
            "hora": "07:00",
            "precio": 600
        },
        {
            "id_vuelo": 10,
            "origen_id": 0,
            "destino_id": 3,
            "fecha": "2021-12-12",
            "hora": "09:00",
            "precio": 1600
        },
        {
            "id_vuelo": 11,
            "origen_id": 0,
            "destino_id": 3,
            "fecha": "2021-12-31",
            "hora": "18:30",
            "precio": 2600
        },
        {
            "id_vuelo": 12,
            "origen_id": 1,
            "destino_id": 0,
            "fecha": "2021-12-03",
            "hora": "11:00",
            "precio": 2300
        },
        {
            "id_vuelo": 13,
            "origen_id": 1,
            "destino_id": 0,
            "fecha": "2021-12-09",
            "hora": "12:00",
            "precio": 2340
        },
        {
            "id_vuelo": 14,
            "origen_id": 1,
            "destino_id": 0,
            "fecha": "2021-12-13",
            "hora": "11:00",
            "precio": 2700
        },
        {
            "id_vuelo": 15,
            "origen_id": 1,
            "destino_id": 2,
            "fecha": "2021-12-19",
            "hora": "20:00",
            "precio": 3400
        },
        {
            "id_vuelo": 16,
            "origen_id": 1,
            "destino_id": 2,
            "fecha": "2021-12-21",
            "hora": "10:00",
            "precio": 3500
        },
        {
            "id_vuelo": 17,
            "origen_id": 1,
            "destino_id": 2,
            "fecha": "2021-12-25",
            "hora": "23:00",
            "precio": 2300
        },
        {
            "id_vuelo": 16,
            "origen_id": 1,
            "destino_id": 2,
            "fecha": "2021-12-30",
            "hora": "10:00",
            "precio": 2400
        },
        {
            "id_vuelo": 17,
            "origen_id": 1,
            "destino_id": 3,
            "fecha": "2021-12-23",
            "hora": "23:45",
            "precio": 3500
        },
        {
            "id_vuelo": 18,
            "origen_id": 1,
            "destino_id": 3,
            "fecha": "2021-12-26",
            "hora": "08:00",
            "precio": 5500
        },
        {
            "id_vuelo": 19,
            "origen_id": 2,
            "destino_id": 0,
            "fecha": "2021-12-05",
            "hora": "00:00",
            "precio": 2650
        },
        {
            "id_vuelo": 20,
            "origen_id": 2,
            "destino_id": 0,
            "fecha": "2021-12-15",
            "hora": "20:00",
            "precio": 3000
        },
        {
            "id_vuelo": 21,
            "origen_id": 2,
            "destino_id": 0,
            "fecha": "2021-12-15",
            "hora": "23:00",
            "precio": 3000
        },
        {
            "id_vuelo": 22,
            "origen_id": 2,
            "destino_id": 0,
            "fecha": "2021-12-22",
            "hora": "08:00",
            "precio": 3000
        },
        {
            "id_vuelo": 23,
            "origen_id": 2,
            "destino_id": 0,
            "fecha": "2021-12-31",
            "hora": "05:00",
            "precio": 3500
        },
        {
            "id_vuelo": 24,
            "origen_id": 2,
            "destino_id": 0,
            "fecha": "2021-12-31",
            "hora": "18:00",
            "precio": 9000
        },
        {
            "id_vuelo": 25,
            "origen_id": 2,
            "destino_id": 1,
            "fecha": "2021-12-16",
            "hora": "13:00",
            "precio": 3550
        },
        {
            "id_vuelo": 26,
            "origen_id": 2,
            "destino_id": 1,
            "fecha": "2021-12-17",
            "hora": "00:00",
            "precio": 3400
        },
        {
            "id_vuelo": 27,
            "origen_id": 2,
            "destino_id": 1,
            "fecha": "2021-12-27",
            "hora": "10:00",
            "precio": 5300
        },
        {
            "id_vuelo": 28,
            "origen_id": 2,
            "destino_id": 3,
            "fecha": "2021-12-25",
            "hora": "00:00",
            "precio": 300
        },
        {
            "id_vuelo": 29,
            "origen_id": 2,
            "destino_id": 3,
            "fecha": "2021-12-25",
            "hora": "23:00",
            "precio": 7300
        },
        {
            "id_vuelo": 30,
            "origen_id": 2,
            "destino_id": 3,
            "fecha": "2021-12-26",
            "hora": "00:00",
            "precio": 4300
        },
        {
            "id_vuelo": 31,
            "origen_id": 2,
            "destino_id": 3,
            "fecha": "2021-12-27",
            "hora": "012:00",
            "precio": 6600
        },
        {
            "id_vuelo": 32,
            "origen_id": 3,
            "destino_id": 0,
            "fecha": "2021-12-15",
            "hora": "00:00",
            "precio": 2700
        },
        {
            "id_vuelo": 33,
            "origen_id": 3,
            "destino_id": 0,
            "fecha": "2021-12-21",
            "hora": "00:00",
            "precio": 4700
        },
        {
            "id_vuelo": 34,
            "origen_id": 3,
            "destino_id": 0,
            "fecha": "2021-12-23",
            "hora": "00:00",
            "precio": 4700
        },
        {
            "id_vuelo": 35,
            "origen_id": 3,
            "destino_id": 0,
            "fecha": "2021-12-24",
            "hora": "00:00",
            "precio": 7200
        },
        {
            "id_vuelo": 36,
            "origen_id": 3,
            "destino_id": 0,
            "fecha": "2021-12-28",
            "hora": "00:00",
            "precio": 2300
        },
        {
            "id_vuelo": 37,
            "origen_id": 3,
            "destino_id": 1,
            "fecha": "2021-12-20",
            "hora": "20:00",
            "precio": 900
        },
        {
            "id_vuelo": 38,
            "origen_id": 3,
            "destino_id": 1,
            "fecha": "2021-12-22",
            "hora": "20:00",
            "precio": 2900
        },
        {
            "id_vuelo": 39,
            "origen_id": 3,
            "destino_id": 1,
            "fecha": "2021-12-25",
            "hora": "20:00",
            "precio": 5900
        },
        {
            "id_vuelo": 40,
            "origen_id": 3,
            "destino_id": 1,
            "fecha": "2021-12-28",
            "hora": "20:00",
            "precio": 3000
        },
        {
            "id_vuelo": 41,
            "origen_id": 3,
            "destino_id": 1,
            "fecha": "2021-12-30",
            "hora": "20:00",
            "precio": 8900
        },
        {
            "id_vuelo": 42,
            "origen_id": 3,
            "destino_id": 2,
            "fecha": "2021-12-20",
            "hora": "00:00",
            "precio": 3300
        },
        {
            "id_vuelo": 43,
            "origen_id": 3,
            "destino_id": 2,
            "fecha": "2021-12-22",
            "hora": "00:00",
            "precio": 7300
        },
        {
            "id_vuelo": 44,
            "origen_id": 3,
            "destino_id": 2,
            "fecha": "2021-12-24",
            "hora": "00:00",
            "precio": 4300
        },
        {
            "id_vuelo": 45,
            "origen_id": 3,
            "destino_id": 2,
            "fecha": "2021-12-26",
            "hora": "00:00",
            "precio": 17700
        }
    ]
}