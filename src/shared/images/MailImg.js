"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailImg = void 0;
const react_1 = __importDefault(require("react"));
function MailImg() {
    return (react_1.default.createElement("svg", { width: "25px", height: "25px", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("title", null),
        react_1.default.createElement("g", { id: "Complete" },
            react_1.default.createElement("g", { id: "mail" },
                react_1.default.createElement("g", null,
                    react_1.default.createElement("polyline", { fill: "none", points: "4 8.2 12 14.1 20 8.2", stroke: "#f5deb3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
                    react_1.default.createElement("rect", { fill: "none", height: "14", rx: "2", ry: "2", stroke: "#f5deb3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", width: "18", x: "3", y: "6.5" }))))));
}
exports.MailImg = MailImg;
