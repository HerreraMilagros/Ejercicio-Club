const fs = require('fs')
const readlineSync = require('readline-sync')
import { Deporte, Jugador } from './Jugador'
import './socios.json'
export default class GestorClub {
    constructor() {

    }

    data() { return JSON.parse(fs.readFileSync('./socios.json')) }

    agregarSocio() {
        let nombre = readlineSync.question('Escriba el nombre del socio: ');
        let apellido = readlineSync.question('Escriba el apellido del socio: ');
        let fechaNacimiento = readlineSync.question('Escriba la fecha de nacimiento del socio en este formato YYYY/MM/DD: ');
        let documento = Number(readlineSync.question('Escriba el documento del socio: '));
        let telefono = Number(readlineSync.question('Escriba el telefono del socio: '));

        let dep = Object.values(Deporte)
        let deport = readlineSync.keyInSelect(dep, 'Seleccione el deporte del socio: ');
        let play = dep[deport];

        let nuevoSocio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, play)

        let socios = [...this.data(), nuevoSocio]
        fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2));

    }

    buscarXNombre(nombre: string) {
        let nombreSocio = this.data().filter((socio: { nombre: string }) => socio.nombre === nombre);
        console.log(nombreSocio);
        return nombreSocio;
    }
    buscarXApellido(apellido: string) {
        let apellidoSocio = this.data().filter((socio: { apellido: string }) => socio.apellido === apellido);
        console.log(apellidoSocio);
        return apellidoSocio;
    }
    buscarXDeporte(deporte: string) {
        let deporteSocio = this.data().filter((socio: { deporte: string }) => socio.deporte === deporte);
        console.log(deporteSocio);
        return deporteSocio;
    }

    buscarXId(documento: number) {
        let documentoSocio = this.data().find((socio: { documento: number }) => socio.documento === documento);
        console.log(documentoSocio);
        return documentoSocio;
    }


}
