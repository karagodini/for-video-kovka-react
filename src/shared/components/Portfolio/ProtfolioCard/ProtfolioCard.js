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
exports.ProtfolioCard = void 0;
const react_1 = __importStar(require("react"));
const protfoliocard_css_1 = __importDefault(require("./protfoliocard.css"));
const Cancel_1 = require("../../../images/Cancel");
const LeftArrow_1 = require("../../../images/LeftArrow");
const RightArrow_1 = require("../../../images/RightArrow");
function ProtfolioCard({ path, price, namePage, nameIzdelie, img, articul, item, }) {
    const [currentImageIndex, setCurrentImageIndex] = (0, react_1.useState)(0);
    const [showImage, setShowImage] = (0, react_1.useState)(false);
    const handleClick = (articul) => {
        setCurrentImageIndex(Number(articul) - 1);
        setShowImage(true);
    };
    const handleClose = () => {
        setShowImage(false);
    };
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? path.length - 1 : prevIndex - 1);
    };
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === path.length - 1 ? 0 : prevIndex + 1);
    };
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 27:
                setShowImage(false);
                break;
            case 37:
                handlePrevImage();
                break;
            case 39:
                handleNextImage();
                break;
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: protfoliocard_css_1.default.mainCard, onClick: () => handleClick(articul) },
            react_1.default.createElement("div", { className: protfoliocard_css_1.default.card, style: { backgroundImage: `url(/images/${namePage}/${img})` } }),
            react_1.default.createElement("div", { className: protfoliocard_css_1.default.info },
                react_1.default.createElement("h3", null,
                    nameIzdelie,
                    " ",
                    articul),
                price ? react_1.default.createElement("p", null,
                    "\u0426\u0435\u043D\u0430: ",
                    price,
                    " \u0420") : react_1.default.createElement("p", null, "\u0426\u0435\u043D\u0430: \u041E\u0442 7000 \u0420"))),
        showImage && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: protfoliocard_css_1.default.popup },
                react_1.default.createElement("div", { className: protfoliocard_css_1.default.imageContainer },
                    react_1.default.createElement("div", { onClick: handlePrevImage, className: protfoliocard_css_1.default.arrowLeft },
                        react_1.default.createElement(LeftArrow_1.LeftArrow, null)),
                    react_1.default.createElement("img", { className: protfoliocard_css_1.default.img, src: `/images/${namePage}/${item[currentImageIndex].img}`, alt: "popup" }),
                    react_1.default.createElement("div", { onClick: handleNextImage, className: protfoliocard_css_1.default.arrowRight },
                        react_1.default.createElement(RightArrow_1.RightArrow, null))),
                react_1.default.createElement("div", { className: protfoliocard_css_1.default.cancelImg, onClick: handleClose },
                    react_1.default.createElement(Cancel_1.Cancel, null)),
                react_1.default.createElement("h3", null,
                    nameIzdelie,
                    " ",
                    item[currentImageIndex].articul),
                react_1.default.createElement("p", null,
                    "\u0426\u0435\u043D\u0430: ",
                    item[currentImageIndex].price,
                    " \u0420")),
            react_1.default.createElement("div", { className: protfoliocard_css_1.default.overlay })))));
}
exports.ProtfolioCard = ProtfolioCard;
