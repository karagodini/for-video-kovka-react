"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramImg = void 0;
const react_1 = __importDefault(require("react"));
function TelegramImg() {
    return (react_1.default.createElement("svg", { width: "18px", height: "18px", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "16", cy: "16", r: "14", fill: "url(#paint0_linear_87_7225)" }),
        react_1.default.createElement("path", { d: "M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z", fill: "white" }),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("linearGradient", { id: "paint0_linear_87_7225", x1: "16", y1: "2", x2: "16", y2: "30", gradientUnits: "userSpaceOnUse" },
                react_1.default.createElement("stop", { stopColor: "#37BBFE" }),
                react_1.default.createElement("stop", { offset: "1", stopColor: "#007DBB" })))));
}
exports.TelegramImg = TelegramImg;
