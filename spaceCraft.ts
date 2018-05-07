class Spacecraft {

  constructor(private propulsor: string) {}

  jumpToHyperSpace() {
    console.log(`Entering hyperspace with ${this.propulsor}`);
  }
  getPropulsor = () => this.propulsor;
}

let ship = new Spacecraft('v8-380');
ship.jumpToHyperSpace();
console.log(`Propulsor: ${ship.getPropulsor()}`);
