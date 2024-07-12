"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperSheet = void 0;
const react_1 = __importDefault(require("react"));
function PaperSheet() {
    return (react_1.default.createElement("svg", { fill: "#734a12", version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", width: "63px", height: "63px", viewBox: "0 0 512 512", enableBackground: "new 0 0 512 512" },
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: "M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472\n\t\tc-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z" }),
            react_1.default.createElement("path", { d: "M320,128H160v256h192V164.578L320,128z M176,368V144h128v32h32v192H176z" }),
            react_1.default.createElement("rect", { x: "192", y: "272", width: "128", height: "16" }),
            react_1.default.createElement("rect", { x: "192", y: "240", width: "128", height: "16" }),
            react_1.default.createElement("rect", { x: "192", y: "192", width: "64", height: "16" }),
            react_1.default.createElement("rect", { x: "192", y: "160", width: "32", height: "16" }),
            react_1.default.createElement("rect", { x: "192", y: "304", width: "128", height: "16" }),
            react_1.default.createElement("rect", { x: "192", y: "336", width: "128", height: "16" }))));
}
exports.PaperSheet = PaperSheet;
