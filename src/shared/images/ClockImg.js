"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClockImg = void 0;
const react_1 = __importDefault(require("react"));
function ClockImg() {
    return (react_1.default.createElement("svg", { width: "25px", height: "25px", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("title", null),
        react_1.default.createElement("g", { id: "Complete" },
            react_1.default.createElement("g", { id: "Clock" },
                react_1.default.createElement("g", null,
                    react_1.default.createElement("polyline", { fill: "none", points: "11.9 5.9 11.9 11.9 12 12 14.1 14.1", stroke: "#f5deb3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
                    react_1.default.createElement("circle", { cx: "12", cy: "12", "data-name": "Circle", fill: "none", id: "Circle-2", r: "10", stroke: "#f5deb3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }))))));
}
exports.ClockImg = ClockImg;
