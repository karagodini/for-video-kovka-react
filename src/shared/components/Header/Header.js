"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importStar(require("react"));
const BurgerImg_1 = require("../../images/BurgerImg");
const header_css_1 = __importDefault(require("./header.css"));
const react_router_dom_1 = require("react-router-dom");
const LocationImg_1 = require("../../images/LocationImg");
const PhoneImg_1 = require("../../images/PhoneImg");
const WhatsappImg_1 = require("../../images/WhatsappImg");
const TelegramImg_1 = require("../../images/TelegramImg");
const MailImg_1 = require("../../images/MailImg");
function Header() {
    const [mainMenu, setMainMenu] = (0, react_1.useState)(false);
    const handleClick = () => {
        console.log("Main page");
        setMainMenu(!mainMenu);
        document.body.classList.toggle("menu-open");
        window.scrollTo(0, 0);
    };
    const handleLinkClick = () => {
        setMainMenu(false);
        document.body.classList.remove("menu-open");
        window.scrollTo(0, 0);
    };
    const handleClickToStart = () => {
        window.scrollTo(0, 0);
    };
    return (react_1.default.createElement("div", { className: header_css_1.default.mainContainer },
        mainMenu && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: header_css_1.default.leftMenuPhone },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: header_css_1.default.link, onClick: handleLinkClick },
                    react_1.default.createElement("p", null, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/catalog", className: header_css_1.default.link, onClick: handleLinkClick },
                    react_1.default.createElement("p", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/paymentanddelivery", className: header_css_1.default.link, onClick: handleLinkClick },
                    react_1.default.createElement("p", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430")),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/contacts", className: header_css_1.default.link, onClick: handleLinkClick },
                    react_1.default.createElement("p", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                react_1.default.createElement("div", { className: `${header_css_1.default.email} ${header_css_1.default.marginTop15}` },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(MailImg_1.MailImg, null)),
                    react_1.default.createElement("h3", { className: `${header_css_1.default.marginLeft10} ${header_css_1.default.colorMenuItems}` }, "kovka.naves@yandex.ru")),
                react_1.default.createElement("div", { className: `${header_css_1.default.phone} ${header_css_1.default.marginTop15}` },
                    react_1.default.createElement(PhoneImg_1.PhoneImg, null),
                    react_1.default.createElement("h3", { className: `${header_css_1.default.marginLeft10} ${header_css_1.default.colorMenuItems}` },
                        react_1.default.createElement("a", { href: "tel:+79818762944", className: `${header_css_1.default.link} ${header_css_1.default.phoneNumber}` }, "+7 (981) 876-29-44"),
                        react_1.default.createElement("br", null),
                        "(",
                        react_1.default.createElement(WhatsappImg_1.WhatsappImg, null),
                        " whatsapp, ",
                        react_1.default.createElement(TelegramImg_1.TelegramImg, null),
                        "telegram)"))))),
        react_1.default.createElement("div", { className: header_css_1.default.headerCenter },
            react_1.default.createElement("div", { className: header_css_1.default.logo },
                react_1.default.createElement("div", { className: header_css_1.default.burgerLogoTelephone },
                    react_1.default.createElement("div", { className: header_css_1.default.imgAndLogo },
                        react_1.default.createElement("div", { className: header_css_1.default.burgerimg, onClick: handleClick },
                            react_1.default.createElement(BurgerImg_1.BurgerImg, null)),
                        react_1.default.createElement("img", { src: "/images/favicon.png", style: { width: "40px" } }),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: header_css_1.default.link, onClick: handleClickToStart },
                            react_1.default.createElement("h1", { className: header_css_1.default.siteName }, "\u041A\u041E\u0412\u041A\u0410-\u041D\u0410\u0412\u0415\u0421")),
                        react_1.default.createElement("h2", { className: header_css_1.default.menu }, "\u041C\u0415\u041D\u042E")),
                    react_1.default.createElement("div", { className: header_css_1.default.location },
                        react_1.default.createElement(LocationImg_1.LocationImg, null),
                        react_1.default.createElement("p", { className: header_css_1.default.town }, "\u0433. \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433")),
                    react_1.default.createElement("a", { href: "tel:+79818762944", className: header_css_1.default.telephone }, "+7 (981) 876-29-44")),
                react_1.default.createElement("div", { className: header_css_1.default.listMenu },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: header_css_1.default.link, onClick: handleClickToStart },
                        react_1.default.createElement("div", { className: header_css_1.default.item },
                            react_1.default.createElement("h2", null, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"))),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/catalog", className: header_css_1.default.link, onClick: handleClickToStart },
                        react_1.default.createElement("div", { className: header_css_1.default.item },
                            react_1.default.createElement("h2", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"))),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/paymentanddelivery", className: header_css_1.default.link, onClick: handleClickToStart },
                        react_1.default.createElement("div", { className: header_css_1.default.item },
                            react_1.default.createElement("h2", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"))),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/contacts", className: header_css_1.default.link, onClick: handleClickToStart },
                        react_1.default.createElement("div", { className: header_css_1.default.item },
                            react_1.default.createElement("h2", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))))))));
}
exports.Header = Header;
