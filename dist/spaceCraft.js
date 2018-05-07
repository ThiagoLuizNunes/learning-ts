var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        var _this = this;
        this.propulsor = propulsor;
        this.getPropulsor = function () { return _this.propulsor; };
    }
    Spacecraft.prototype.jumpToHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('v8-380');
ship.jumpToHyperSpace();
console.log("Propulsor: " + ship.getPropulsor());
