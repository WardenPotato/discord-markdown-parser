"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heading = void 0;
const simple_markdown_1 = __importDefault(require("simple-markdown"));
const extend_1 = require("../utils/extend");
const regex_1 = require("../utils/regex");
exports.heading = (0, extend_1.extend)({
    match: function (source, state) {
        if (state.prevCapture === null || state.prevCapture[0] === '\n') {
            return regex_1.HeadingRegex.exec(source);
        }
        return null;
    },
}, simple_markdown_1.default.defaultRules.heading);
