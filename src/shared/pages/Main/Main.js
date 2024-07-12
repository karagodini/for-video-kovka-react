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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const react_1 = __importStar(require("react"));
const main_css_1 = __importDefault(require("./main.css"));
const react_router_dom_1 = require("react-router-dom");
const Handshake_1 = require("../../images/Handshake");
const Hammer_1 = require("../../images/Hammer");
const PaperSheet_1 = require("../../images/PaperSheet");
const axios_1 = __importDefault(require("axios"));
const react_helmet_async_1 = require("react-helmet-async");
function Main() {
    const [phoneNumber, setPhoneNumber] = (0, react_1.useState)("");
    const [name, setName] = (0, react_1.useState)("");
    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value.replace(/\D/g, "");
        let formattedPhoneNumber = "+7";
        if (inputPhoneNumber.length > 1) {
            formattedPhoneNumber += ` (${inputPhoneNumber.slice(1, 4)})`;
            if (inputPhoneNumber.length > 4) {
                formattedPhoneNumber += ` ${inputPhoneNumber.slice(4)}`;
            }
        }
        else {
            if (inputPhoneNumber.length > 0) {
                formattedPhoneNumber += ``;
            }
            if (inputPhoneNumber.length > 3) {
                formattedPhoneNumber += ` ${inputPhoneNumber.slice(3)}`;
            }
        }
        setPhoneNumber(formattedPhoneNumber);
    };
    const handleSubmit = (event) => __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const response = yield axios_1.default.post("/api/sendDataToEmail", {
                name,
                phoneNumber,
            });
            console.log(response.data); // Handle the response from the backend
        }
        catch (error) {
            console.error(error);
        }
        setName("");
        setPhoneNumber("");
    });
    const changeName = (e) => {
        setName(e.target.value);
    };
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("title", null, "\u041A\u043E\u0432\u043A\u0430-\u041D\u0430\u0432\u0435\u0441 - \u043A\u043E\u0432\u0430\u043D\u044B\u0435 \u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0432 \u0421\u041F\u0431. \u041A\u043E\u0432\u043A\u0430 \u043A\u0443\u043F\u0438\u0442\u044C \u0432 \u0421\u041F\u0431. \u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u0432\u043A\u0430 \u0432 \u0421\u041F\u0431"),
            react_1.default.createElement("meta", { name: "title", content: "\u041A\u043E\u0432\u043A\u0430-\u041D\u0430\u0432\u0435\u0441 - \u043A\u043E\u0432\u0430\u043D\u044B\u0435 \u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0432 \u0421\u041F\u0431. \u041A\u043E\u0432\u043A\u0430 \u043A\u0443\u043F\u0438\u0442\u044C \u0432 \u0421\u041F\u0431.\n          \u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u0432\u043A\u0430 \u0432 \u0421\u041F\u0431" }),
            react_1.default.createElement("meta", { name: "description", content: "\u041A\u043E\u0432\u043A\u0430-\u041D\u0430\u0432\u0435\u0441 - \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u0432\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u043A\u043E\u0432\u0430\u043D\u044B\u0435 \u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0432 \u0421\u041F\u0431." })),
        react_1.default.createElement("div", { className: main_css_1.default.wrapper },
            react_1.default.createElement("div", { className: main_css_1.default.firstBlock },
                react_1.default.createElement("h1", { className: main_css_1.default.name }, "\u0418\u0417\u0413\u041E\u0422\u041E\u0412\u041B\u0415\u041D\u0418\u0415 \u0418 \u041C\u041E\u041D\u0422\u0410\u0416 \u041A\u041E\u0412\u0410\u041D\u042B\u0425 \u0418 \u041C\u0415\u0422\u0410\u041B\u041B\u0418\u0427\u0415\u0421\u041A\u0418\u0425 \u0418\u0417\u0414\u0415\u041B\u0418\u0419 \u041F\u041E\u0414 \u041A\u041B\u042E\u0427 \u0412 \u0421\u0410\u041D\u041A\u0422-\u041F\u0415\u0422\u0415\u0420\u0411\u0423\u0420\u0413\u0415 \u0418 \u041B\u0415\u041D\u0418\u041D\u0413\u0420\u0410\u0414\u0421\u041A\u041E\u0419 \u041E\u0411\u041B\u0410\u0421\u0422\u0418"),
                react_1.default.createElement("div", { className: main_css_1.default.goCatalog },
                    react_1.default.createElement(react_router_dom_1.Link, { className: main_css_1.default.link, to: "/catalog", onClick: handleClick },
                        react_1.default.createElement("p", null, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433")))),
            react_1.default.createElement("div", { className: main_css_1.default.secondBlock },
                react_1.default.createElement("div", { className: main_css_1.default.howWork },
                    react_1.default.createElement("p", { className: main_css_1.default.namehowwork }, "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C"),
                    react_1.default.createElement("p", { className: main_css_1.default.points }, "- \u0418\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043A\u043E\u0432\u0430\u043D\u044B\u0435 \u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430, \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435 \u0438 \u041B\u0435\u043D. \u041E\u0431\u043B\u0430\u0441\u0442\u0438"),
                    react_1.default.createElement("p", { className: main_css_1.default.points }, "- \u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0432\u0441\u0435 \u0432 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0441 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439"),
                    react_1.default.createElement("div", { className: main_css_1.default.stages },
                        react_1.default.createElement("div", { className: main_css_1.default.square },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement(Handshake_1.Handshake, null)),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("p", null, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F, \u0437\u0430\u043C\u0435\u0440, \u0434\u043E\u0433\u043E\u0432\u043E\u0440"))),
                        react_1.default.createElement("div", { className: main_css_1.default.square },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement(Hammer_1.Hammer, null)),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("p", null, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0435"))),
                        react_1.default.createElement("div", { className: main_css_1.default.square },
                            react_1.default.createElement("div", { style: {
                                    height: "79px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                } },
                                react_1.default.createElement(PaperSheet_1.PaperSheet, null)),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("p", null, "\u0421\u0434\u0430\u0447\u0430 \u0440\u0430\u0431\u043E\u0442 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"))))),
                react_1.default.createElement("div", { className: main_css_1.default.blockForm },
                    react_1.default.createElement("p", { className: main_css_1.default.namehowwork }, "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?"),
                    react_1.default.createElement("p", { className: main_css_1.default.fillForm }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443!"),
                    react_1.default.createElement("p", { className: main_css_1.default.getConsultation }, "\u0418 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("form", { className: main_css_1.default.styleForm },
                            react_1.default.createElement("input", { className: main_css_1.default.styleForInput, type: "text", placeholder: "\u0418\u041C\u042F", onChange: changeName, value: name }),
                            react_1.default.createElement("input", { className: main_css_1.default.styleForInput, type: "tel", placeholder: "\u0422\u0415\u041B\u0415\u0424\u041E\u041D", maxLength: 16, value: phoneNumber, onChange: handlePhoneNumberChange }),
                            react_1.default.createElement("input", { className: main_css_1.default.buttonSubmit, type: "submit", value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", onClick: handleSubmit }))))))));
}
exports.Main = Main;
