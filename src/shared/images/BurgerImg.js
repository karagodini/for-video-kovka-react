"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurgerImg = void 0;
const react_1 = __importDefault(require("react"));
function BurgerImg() {
    return (react_1.default.createElement("svg", { width: "30px", height: "30px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M4 18L20 18", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round" }),
        react_1.default.createElement("path", { d: "M4 12L20 12", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round" }),
        react_1.default.createElement("path", { d: "M4 6L20 6", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round" })));
}
exports.BurgerImg = BurgerImg;
