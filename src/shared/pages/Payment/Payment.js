"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const react_1 = __importDefault(require("react"));
const payment_css_1 = __importDefault(require("./payment.css"));
const react_helmet_async_1 = require("react-helmet-async");
function Payment() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("title", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
            react_1.default.createElement("meta", { name: "title", content: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430" }),
            react_1.default.createElement("meta", { name: "description", content: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 " })),
        react_1.default.createElement("div", { className: payment_css_1.default.wrapper },
            react_1.default.createElement("h1", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
            react_1.default.createElement("p", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0443 \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u041A\u0410\u0414 - 2000 \u0440\u0443\u0431\u043B\u0435\u0439, \u043F\u043E \u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u043E\u0439 \u041E\u0431\u043B\u0430\u0441\u0442\u0438 5000 \u0440\u0443\u0431\u043B\u0435\u0439"))));
}
exports.Payment = Payment;
