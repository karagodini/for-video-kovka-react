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
exports.Gates = void 0;
const react_1 = __importStar(require("react"));
const gates_css_1 = __importDefault(require("./gates.css"));
const ProtfolioCard_1 = require("../../components/Portfolio/ProtfolioCard");
const react_helmet_async_1 = require("react-helmet-async");
function Gates() {
    const [dataFromDB, setDataFromDB] = (0, react_1.useState)([]);
    const [sortedData, setSortedData] = (0, react_1.useState)([]);
    const [arrPath, setArrPath] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch(`/api/db/gates`).then((response) => response.json()).then((data) => setDataFromDB(data)).catch((error) => console.error(error));
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
            react_1.default.createElement("title", null, "\u041A\u043E\u0432\u0430\u043D\u044B\u0435 \u0432\u043E\u0440\u043E\u0442\u0430 \u043A\u0443\u043F\u0438\u0442\u044C \u0432 \u0421\u041F\u0431"),
            react_1.default.createElement("meta", { name: "title", content: "\u041A\u043E\u0432\u0430\u043D\u044B\u0435 \u0432\u043E\u0440\u043E\u0442\u0430 \u043A\u0443\u043F\u0438\u0442\u044C \u0432 \u0441\u043F\u0431" }),
            react_1.default.createElement("meta", { name: "description", content: "\u041A\u043E\u0432\u0430\u043D\u044B\u0435 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u043E\u0440\u043E\u0442\u0430 \u0432 \u0421\u041F\u0431, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u041A\u043E\u0432\u043A\u0430-\u041D\u0430\u0432\u0435\u0441 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435 " })),
        react_1.default.createElement("div", { className: gates_css_1.default.gates },
            react_1.default.createElement("h1", { className: gates_css_1.default.pageName }, "\u0412\u043E\u0440\u043E\u0442\u0430"),
            react_1.default.createElement("div", { className: gates_css_1.default.helloTextDiv },
                react_1.default.createElement("p", { className: gates_css_1.default.helloText }, "\u041E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u0432\u043E\u0440\u043E\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0430\u0442 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0432\u0445\u043E\u0434\u0430 \u043D\u0430 \u0432\u0430\u0448\u0443 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044E. \u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438, \u043E\u0442 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0437\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u043D\u0438\u044F, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0442\u043E, \u0447\u0442\u043E \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0435\u0439.")),
            react_1.default.createElement("div", { className: gates_css_1.default.cards }, sortedData.length
                ? sortedData.map((item) => (react_1.default.createElement(ProtfolioCard_1.ProtfolioCard, { key: item.id, item: sortedData, path: arrPath, img: item.img, price: item.price, articul: item.articul, namePage: "gates", nameIzdelie: "Ворота " })))
                : "Loading..."))));
}
exports.Gates = Gates;
// <Card
//   pathToImg={"/gates/160.jpg"}
//   vid={"/close"}
//   name={"Кованые ворота закрытого типа"}
//   installationPrice={"800"}
//   turnkeyPrice={"1200"}
//   element={"gates"}
//   nameIzdelie={"Ворота закрытого типа"}
// />
// <Card
//   pathToImg={"/gates/130.jpg"}
//   vid={"/open"}
//   name={"Кованые ворота открытого типа"}
//   installationPrice={"800"}
//   turnkeyPrice={"1900"}
//   element={"gates"}
//   nameIzdelie={"Ворота открытого типа"}
// />
// <Card
//   pathToImg={"/gates/131.jpg"}
//   vid={"/polycarbonate"}
//   name={"Кованые ворота с поликарбонатом"}
//   installationPrice={"800"}
//   turnkeyPrice={"1200"}
//   element={"gates"}
//   nameIzdelie={"Кованые ворота с поликарбонатом"}
// />
