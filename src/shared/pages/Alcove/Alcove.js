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
exports.Alcove = void 0;
const react_1 = __importStar(require("react"));
const alcove_css_1 = __importDefault(require("./alcove.css"));
const ProtfolioCard_1 = require("../../components/Portfolio/ProtfolioCard");
const react_helmet_async_1 = require("react-helmet-async");
function Alcove() {
    const [dataFromDB, setDataFromDB] = (0, react_1.useState)([]);
    const [sortedData, setSortedData] = (0, react_1.useState)([]);
    const [arrPath, setArrPath] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch(`/api/db/alcove`).then((response) => response.json()).then((data) => setDataFromDB(data)).catch((error) => console.error(error));
    }, []);
    (0, react_1.useEffect)(() => {
        setSortedData([...dataFromDB].sort((a, b) => a.articul - b.articul));
    }, [dataFromDB]);
    (0, react_1.useEffect)(() => {
        const imgArray = sortedData.map((item) => item.img);
        setArrPath(imgArray);
    }, [sortedData]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("title", null, "\u041A\u043E\u0432\u0430\u043D\u044B\u0435 \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u0432 \u0434\u043E\u043C \u043A\u0443\u043F\u0438\u0442\u044C \u0432 \u0421\u041F\u0431"),
            react_1.default.createElement("meta", { name: "title", content: "\u041A\u043E\u0432\u0430\u043D\u044B\u0435 \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u0432 \u0434\u043E\u043C \u043A\u0443\u043F\u0438\u0442\u044C \u0432 \u0421\u041F\u0431" }),
            react_1.default.createElement("meta", { name: "description", content: "\u041A\u043E\u0432\u0430\u043D\u044B\u0435 \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u0432 \u0434\u043E\u043C \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u041A\u043E\u0432\u043A\u0430-\u041D\u0430\u0432\u0435\u0441 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435 " })),
        react_1.default.createElement("div", { className: alcove_css_1.default.alcove },
            react_1.default.createElement("h1", { className: alcove_css_1.default.pageName }, "\u0411\u0435\u0441\u0435\u0434\u043A\u0438"),
            react_1.default.createElement("div", { className: alcove_css_1.default.helloTextDiv },
                react_1.default.createElement("p", { className: alcove_css_1.default.helloText }, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0443\u044E\u0442\u043D\u0443\u044E \u0438 \u043E\u0442\u0434\u044B\u0445\u0430\u044E\u0449\u0443\u044E \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443 \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u0434\u0432\u043E\u0440\u0435 \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0431\u0435\u0441\u0435\u0434\u043A\u0430\u043C\u0438. \u0412 \u043D\u0430\u0448\u0435\u043C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0440\u0430\u0437\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u0441\u0442\u0438\u043B\u0438 \u0431\u0435\u0441\u0435\u0434\u043E\u043A, \u043E\u0442 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u0434\u0435\u0440\u0435\u0432\u043E \u0438\u043B\u0438 \u043C\u0435\u0442\u0430\u043B\u043B, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u043C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0434\u043B\u044F \u043E\u0442\u0434\u044B\u0445\u0430 \u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F.")),
            react_1.default.createElement("div", { className: alcove_css_1.default.cards }, sortedData.length
                ? sortedData.map((item) => (react_1.default.createElement(ProtfolioCard_1.ProtfolioCard, { key: item.id, item: sortedData, path: arrPath, img: item.img, price: item.price, articul: item.articul, namePage: "alcove", nameIzdelie: "Беседка" })))
                : "Loading..."))));
}
exports.Alcove = Alcove;
