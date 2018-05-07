"use strict";
exports.__esModule = true;
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propulsor) {
        var _this = this;
        this.propulsor = propulsor;
        this.getPropulsor = function () { return _this.propulsor; };
    }
    SpaceCraft.prototype.jumpToHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
