import { SpaceCraft } from './class-ships/spaceCraft';
import { MilleniumFalcon } from './class-ships/milleniumFalcon';
import { ContainerShip } from './class-ships/containerShip';

// Method Interface
let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;

// Class example 
let ship = new SpaceCraft('v8-380');
ship.jumpToHyperSpace();

// Inheritance example
let falcon = new MilleniumFalcon('hyperdrive');
falcon.jumpToHyperSpace();

// Interface example
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`);
