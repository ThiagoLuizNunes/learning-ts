class SpaceCraft {

  constructor(private propulsor: string) {}

  jumpToHyperSpace() {
    console.log(`Entering hyperspace with ${this.propulsor}`);
  }
  getPropulsor = () => this.propulsor;
}

export { SpaceCraft } 
