"use strict";
exports.__esModule = true;
var spaceCraft_1 = require("./class-ships/spaceCraft");
var milleniumFalcon_1 = require("./class-ships/milleniumFalcon");
var _ = require("lodash");
console.log(_.pad('Typescript Examples', 40, '='));
// Class example 
var ship = new spaceCraft_1.SpaceCraft('v8-380');
ship.jumpToHyperSpace();
// Inheritance example
var falcon = new milleniumFalcon_1.MilleniumFalcon('hyperdrive');
falcon.jumpToHyperSpace();
// Interface example
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
