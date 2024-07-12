"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftArrow = void 0;
const react_1 = __importDefault(require("react"));
function LeftArrow() {
    return (react_1.default.createElement("svg", { width: "25px", height: "25px", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", fill: "none" },
        react_1.default.createElement("path", { stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 10H2m0 0l7-7m-7 7l7 7" })));
}
exports.LeftArrow = LeftArrow;
