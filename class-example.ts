import { SpaceCraft } from './class-ships/spaceCraft';
import { MilleniumFalcon } from './class-ships/milleniumFalcon';
import { ContainerShip } from './class-ships/containerShip';
import * as _ from 'lodash';

console.log(_.pad('Typescript Examples', 40, '='));

// Class example 
let ship = new SpaceCraft('v8-380');
ship.jumpToHyperSpace();

// Inheritance example
let falcon = new MilleniumFalcon('hyperdrive');
falcon.jumpToHyperSpace();

// Interface example
let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`);
