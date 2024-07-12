"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = void 0;
const react_1 = __importDefault(require("react"));
const catalog_css_1 = __importDefault(require("./catalog.css"));
const CatalogCard_1 = require("../../components/Catalog/CatalogCard");
const react_router_dom_1 = require("react-router-dom");
const react_helmet_async_1 = require("react-helmet-async");
function Catalog() {
    const handleStartClick = () => {
        window.scroll(0, 0);
    };
    // const location = useLocation();
    // useEffect(() => {
    //   console.log("catalog = ", location);
    //
    // }, [ location ]);
    // let metaTagContent = "";
    // if (typeof document !== "undefined") {
    //   const metaTag = document.querySelector(
    //     'meta[name="title"]'
    //   ) as HTMLMetaElement;
    //   metaTagContent = metaTag ? metaTag.content : "";
    // } else {
    //   // Handle non-browser environment (e.g., set default meta tag content)
    //   metaTagContent = "Default Meta Tag Content";
    // }
    // useEffect(() => {
    //   fetch(`http://localhost:3000/?metaTag=${metaTagContent}`)
    //     .then((response) => response.text())
    //     .then((data) => {
    //       // Handle the server response here
    //     })
    //     .catch((error) => {
    //       // Handle any errors here
    //     });
    // }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("title", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043A\u043E\u0432\u0430\u043D\u044B\u0445 \u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435"),
            react_1.default.createElement("meta", { name: "title", content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043A\u043E\u0432\u0430\u043D\u044B\u0445 \u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435" }),
            react_1.default.createElement("meta", { name: "description", content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043A\u043E\u0432\u0430\u043D\u044B\u0445 \u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435" })),
        react_1.default.createElement("div", { className: catalog_css_1.default.catalog },
            react_1.default.createElement("h1", { className: catalog_css_1.default.pageName }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
            react_1.default.createElement("div", { className: catalog_css_1.default.helloTextDiv },
                react_1.default.createElement("p", { className: catalog_css_1.default.helloText }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \"\u041A\u043E\u0432\u043A\u0430-\u041D\u0430\u0432\u0435\u0441\" \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u043A\u0443\u043F\u0438\u0442\u044C \u043A\u043E\u0432\u0430\u043D\u044B\u0435 \u0438 \u0441\u0432\u0430\u0440\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435. \u0421 2009 \u0433\u043E\u0434\u0430 \u043C\u044B \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u043D\u0430 \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u0432\u043A\u0435 \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438. \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C \u043D\u0430\u0448\u0438\u0445 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u043E\u0435 \u0441\u044B\u0440\u044C\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044E\u0442 \u0432\u0430\u043C \u043D\u0435\u043F\u0440\u0435\u0432\u0437\u043E\u0439\u0434\u0435\u043D\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438.")),
            react_1.default.createElement("div", { className: catalog_css_1.default.wrapper },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/canopies", className: catalog_css_1.default.link, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "НАВЕСЫ", path: "1.jpg" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/gates", className: catalog_css_1.default.link, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "ВОРОТА", path: "gates.jpg" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/gratings", className: catalog_css_1.default.link, state: {
                        vid: "/gratings",
                        name: "Решетки",
                        nameIzdelie: "Решетка",
                    }, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "РЕШЕТКИ", path: "gratings/207.jpg" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/stairs", className: catalog_css_1.default.link, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "ЛЕСТНИЦЫ", path: "lestnica.jpg" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/railing", className: catalog_css_1.default.link, state: { vid: "/railing", name: "Перила", nameIzdelie: "Перила" }, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "ПЕРИЛА", path: "railing/230.jpg" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/fence", className: catalog_css_1.default.link, state: { vid: "/fence", name: "Заборы", nameIzdelie: "Забор" }, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "ЗАБОРЫ", path: "fence/10.jpeg" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/alcove", className: catalog_css_1.default.link, state: { vid: "/alcove", name: "Беседки", nameIzdelie: "Беседка" }, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "БЕСЕДКИ", path: "alcove/16.jpeg" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/benches", className: catalog_css_1.default.link, state: {
                        vid: "/benches",
                        name: "Скамейки",
                        nameIzdelie: "Скамейка",
                    }, onClick: handleStartClick },
                    react_1.default.createElement(CatalogCard_1.CatalogCard, { name: "СКАМЕЙКИ", path: "benches/37.jpeg" }))))));
}
exports.Catalog = Catalog;
