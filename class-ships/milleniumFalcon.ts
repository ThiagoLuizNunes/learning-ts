import { SpaceCraft } from './spaceCraft';
import { ContainerShip } from './containerShip';

class MilleniumFalcon extends SpaceCraft implements ContainerShip {
  
  cargoContainers: number;

  constructor(propulsor: string) {
    super(propulsor);
    this.cargoContainers = 2;
  }

  jumpToHyperSpace() {
    if (Math.random() >= 0.5) {
      super.jumpToHyperSpace();
    } else {
      console.log('Failed to jump into hyperspace');
    }
  }
}

export { MilleniumFalcon };
