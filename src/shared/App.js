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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Header_1 = require("./components/Header");
const Catalog_1 = require("./pages/Catalog");
const Footer_1 = require("./components/Footer");
require("./main.global.css");
const Canopies_1 = require("./pages/Canopies");
const react_router_dom_1 = require("react-router-dom");
const Gates_1 = require("./pages/Gates");
const Gratings_1 = require("./pages/Gratings");
const Railing_1 = require("./pages/Railing");
const Stairs_1 = require("./pages/Stairs");
const Fence_1 = require("./pages/Fence");
const Alcove_1 = require("./pages/Alcove");
const Benches_1 = require("./pages/Benches");
const Contacts_1 = require("./pages/Contacts");
const Payment_1 = require("./pages/Payment");
const Main_1 = require("./pages/Main");
const NotFound_1 = require("./pages/NotFound");
function AppComponent() {
    const location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        console.log("location = ", location);
    }, [location]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                minHeight: "100vh",
            } },
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement("div", { style: {
                    display: "flex",
                    margin: "90px auto 0px",
                } },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Main_1.Main, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/catalog", element: react_1.default.createElement(Catalog_1.Catalog, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/gates", element: react_1.default.createElement(Gates_1.Gates, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/canopies", element: react_1.default.createElement(Canopies_1.Canopies, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/gratings", element: react_1.default.createElement(Gratings_1.Gratings, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/railing", element: react_1.default.createElement(Railing_1.Railing, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/stairs", element: react_1.default.createElement(Stairs_1.Stairs, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/fence", element: react_1.default.createElement(Fence_1.Fence, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/alcove", element: react_1.default.createElement(Alcove_1.Alcove, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/benches", element: react_1.default.createElement(Benches_1.Benches, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/paymentanddelivery", element: react_1.default.createElement(Payment_1.Payment, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/contacts", element: react_1.default.createElement(Contacts_1.Contacts, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.NotFound, null) }))),
            react_1.default.createElement(Footer_1.Footer, null))));
}
const App = () => react_1.default.createElement(AppComponent, null);
exports.default = App;
