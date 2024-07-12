"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogCard = void 0;
const react_1 = __importDefault(require("react"));
const catalogcard_css_1 = __importDefault(require("./catalogcard.css"));
function CatalogCard({ name, path }) {
    const imagePath = `/images/${path}`;
    return (react_1.default.createElement("div", { className: catalogcard_css_1.default.image, style: { backgroundImage: `url(${imagePath})` } },
        react_1.default.createElement("div", { className: catalogcard_css_1.default.center },
            react_1.default.createElement("h2", { className: catalogcard_css_1.default.nameItem }, name),
            react_1.default.createElement("div", { className: catalogcard_css_1.default.more },
                react_1.default.createElement("p", null, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")),
            react_1.default.createElement("hr", { className: catalogcard_css_1.default.line }))));
}
exports.CatalogCard = CatalogCard;
