"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = __importDefault(require("react"));
const layout_css_1 = __importDefault(require("./layout.css"));
function Layout({ header, children }) {
    return (react_1.default.createElement("div", { className: layout_css_1.default.main },
        react_1.default.createElement("div", { className: layout_css_1.default.header },
            react_1.default.createElement("h1", { className: layout_css_1.default.namePage }, header)),
        react_1.default.createElement("div", { className: layout_css_1.default.gridImages }, children)));
}
exports.Layout = Layout;
