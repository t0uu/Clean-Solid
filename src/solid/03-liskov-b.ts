export abstract class Vehicle {

// getNumberOfSeats():number {
    // throw Error('Method not implemented');
// }
// Las clases abstractas son clases que estan directamente creadas desde el punto de inicio para ser heredaras a otras.
abstract getNumberOfSeats():number 

}



export class Tesla  extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi  extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle  {

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda  extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super()
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

