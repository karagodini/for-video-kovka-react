"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const react_slick_1 = __importDefault(require("react-slick"));
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (react_1.default.createElement(react_slick_1.default, Object.assign({}, settings),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Slide 1")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Slide 2")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Slide 3")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Slide 4")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Slide 5"))));
}
exports.default = Carousel;
