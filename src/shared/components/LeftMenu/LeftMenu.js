"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftMenu = void 0;
const react_1 = __importDefault(require("react"));
const leftmenu_css_1 = __importDefault(require("./leftmenu.css"));
const react_router_dom_1 = require("react-router-dom");
function LeftMenu() {
    return (react_1.default.createElement("div", { className: leftmenu_css_1.default.mainContainer, style: {
            backgroundImage: `url(/images/imagesForNavesKovka/IMG_6210.JPG)`,
        } },
        react_1.default.createElement("div", { className: leftmenu_css_1.default.menu },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/canopies", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u041D\u0430\u0432\u0435\u0441\u044B")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/gates", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u0412\u043E\u0440\u043E\u0442\u0430")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/gratings", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u0420\u0435\u0448\u0435\u0442\u043A\u0438")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/stairs", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/railing", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u041F\u0435\u0440\u0438\u043B\u0430")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/fence", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u0417\u0430\u0431\u043E\u0440\u044B")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/alcove", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u0411\u0435\u0441\u0435\u0434\u043A\u0438")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/benches", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u0421\u043A\u0430\u043C\u0435\u0439\u043A\u0438")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/benches", className: leftmenu_css_1.default.link },
                react_1.default.createElement("p", { className: leftmenu_css_1.default.itemMenu }, "\u041E\u0433\u0440\u0430\u0434\u043A\u0438")),
            react_1.default.createElement("hr", { className: leftmenu_css_1.default.line }))));
}
exports.LeftMenu = LeftMenu;
