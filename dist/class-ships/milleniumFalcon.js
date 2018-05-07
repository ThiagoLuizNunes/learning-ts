"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var spaceCraft_1 = require("./spaceCraft");
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon(propulsor) {
        var _this = _super.call(this, propulsor) || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MilleniumFalcon.prototype.jumpToHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpToHyperSpace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MilleniumFalcon;
}(spaceCraft_1.SpaceCraft));
exports.MilleniumFalcon = MilleniumFalcon;
