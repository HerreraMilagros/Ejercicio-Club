
import MiembroClub from "./AbstractMiembroClub";

export enum Deporte {
    futbol = "futbol", basket = "basket", zumba = "zumba", voley = "voley", natacion = "natacion", gym = "gym"

}

export class Jugador extends MiembroClub {
    deporte: Deporte;
    constructor(nombre: string, apellido: string, fechaNacimiento: string, documento: number, telefono: number, deporte: Deporte) {
        super(nombre, apellido, fechaNacimiento, documento, telefono)
        this.deporte = deporte;
    }
}


