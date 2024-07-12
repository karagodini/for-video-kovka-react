"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const react_1 = __importDefault(require("react"));
const contacts_css_1 = __importDefault(require("./contacts.css"));
const react_helmet_async_1 = require("react-helmet-async");
const PhoneImg_1 = require("../../images/PhoneImg");
function Contacts() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("title", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
            react_1.default.createElement("meta", { name: "title", content: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F" }),
            react_1.default.createElement("meta", { name: "description", content: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F " })),
        react_1.default.createElement("div", { className: contacts_css_1.default.contactsPage },
            react_1.default.createElement("h1", { className: contacts_css_1.default.pageName }, "\u041D\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
            react_1.default.createElement("div", { className: contacts_css_1.default.helloTextDiv },
                react_1.default.createElement("p", { className: contacts_css_1.default.helloText }, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0438 \u0437\u0430\u0434\u0430\u0442\u044C \u043B\u044E\u0431\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043E \u043D\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u0443\u0433\u0430\u0445. \u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u043C \u0432 \u0432\u044B\u0431\u043E\u0440\u0435 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u043D\u0430\u0432\u0435\u0441\u0430. \u0427\u0442\u043E\u0431\u044B \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438, \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443\u044E \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435. \u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438. \u041C\u044B \u0441 \u043D\u0435\u0442\u0435\u0440\u043F\u0435\u043D\u0438\u0435\u043C \u0436\u0434\u0435\u043C \u0432\u0430\u0448\u0438\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0438 \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u043D\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441 \u0412\u0430\u043C\u0438!")),
            react_1.default.createElement("div", { className: contacts_css_1.default.contacts },
                react_1.default.createElement("div", { className: contacts_css_1.default.phone },
                    react_1.default.createElement(PhoneImg_1.PhoneImg, { color: "white" }))))));
}
exports.Contacts = Contacts;
// <a
//   href="tel:+79818762944"
//   className={`${styles.link} ${styles.phoneNumber}`}
// >
//   +7 (981) 876-29-44
// </a>
