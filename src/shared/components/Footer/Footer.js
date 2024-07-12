"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const footer_css_1 = __importDefault(require("./footer.css"));
const PhoneImg_1 = require("../../images/PhoneImg");
const MailImg_1 = require("../../images/MailImg");
const react_router_dom_1 = require("react-router-dom");
const TelegramImg_1 = require("../../images/TelegramImg");
const WhatsappImg_1 = require("../../images/WhatsappImg");
const ClockImg_1 = require("../../images/ClockImg");
function Footer() {
    return (react_1.default.createElement("footer", { className: footer_css_1.default.wrapper },
        react_1.default.createElement("div", { className: footer_css_1.default.center },
            react_1.default.createElement("div", { className: footer_css_1.default.mainMenu },
                react_1.default.createElement("h2", { className: footer_css_1.default.mainMenuItem },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: footer_css_1.default.link }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
                react_1.default.createElement("h2", { className: footer_css_1.default.mainMenuItem },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/catalog", className: footer_css_1.default.link }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")),
                react_1.default.createElement("h2", { className: footer_css_1.default.mainMenuItem },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/paymentanddelivery", className: footer_css_1.default.link }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430")),
                react_1.default.createElement("h2", { className: footer_css_1.default.mainMenuItem },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/contacts", className: footer_css_1.default.link }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))),
            react_1.default.createElement("div", { className: footer_css_1.default.flexMenu },
                react_1.default.createElement("div", { className: footer_css_1.default.catalog },
                    react_1.default.createElement("h2", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/canopies", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15} ${footer_css_1.default.colorMenuItems}` }, "\u041D\u0430\u0432\u0435\u0441\u044B")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/gates", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15}  ${footer_css_1.default.colorMenuItems}` }, "\u0412\u043E\u0440\u043E\u0442\u0430")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/gratings", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15}  ${footer_css_1.default.colorMenuItems}` }, "\u0420\u0435\u0448\u0435\u0442\u043A\u0438")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/stairs", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15} ${footer_css_1.default.colorMenuItems}` }, "\u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/railing", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15} ${footer_css_1.default.colorMenuItems}` }, "\u041F\u0435\u0440\u0438\u043B\u0430")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/fence", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15} ${footer_css_1.default.colorMenuItems}` }, "\u0417\u0430\u0431\u043E\u0440\u044B")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/alcove", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15} ${footer_css_1.default.colorMenuItems}` }, "\u0411\u0435\u0441\u0435\u0434\u043A\u0438")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/benches", className: footer_css_1.default.link },
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.catalogItem} ${footer_css_1.default.marginTop15} ${footer_css_1.default.colorMenuItems}` }, "\u0421\u043A\u0430\u043C\u0435\u0439\u043A\u0438"))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h2", null, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B"),
                    react_1.default.createElement("div", { className: footer_css_1.default.workingTime },
                        react_1.default.createElement(ClockImg_1.ClockImg, null),
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.marginLeft10} ${footer_css_1.default.colorMenuItems}` }, "09:00-22:00, \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445"))),
                react_1.default.createElement("div", { className: `${footer_css_1.default.contacts} ` },
                    react_1.default.createElement("h2", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                    react_1.default.createElement("div", { className: `${footer_css_1.default.email} ${footer_css_1.default.marginTop15}` },
                        react_1.default.createElement(MailImg_1.MailImg, null),
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.marginLeft10} ${footer_css_1.default.colorMenuItems}` }, "kovka.naves@yandex.ru")),
                    react_1.default.createElement("div", { className: `${footer_css_1.default.phone} ${footer_css_1.default.marginTop15}` },
                        react_1.default.createElement(PhoneImg_1.PhoneImg, { color: "#f5deb3" }),
                        react_1.default.createElement("h3", { className: `${footer_css_1.default.marginLeft10} ${footer_css_1.default.colorMenuItems}` },
                            react_1.default.createElement("a", { href: "tel:+79818762944", className: `${footer_css_1.default.link} ${footer_css_1.default.phoneNumber}` }, "+7 (981) 876-29-44"),
                            react_1.default.createElement("br", null),
                            "(",
                            react_1.default.createElement(WhatsappImg_1.WhatsappImg, null),
                            " whatsapp, ",
                            react_1.default.createElement(TelegramImg_1.TelegramImg, null),
                            "telegram)")))))));
}
exports.Footer = Footer;
