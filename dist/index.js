"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.rulesExtended = exports.rules = void 0;
const simple_markdown_1 = __importDefault(require("simple-markdown"));
// import all the rules
const everyone_1 = require("./rules/discord/everyone");
const twemoji_1 = require("./rules/discord/twemoji");
const channel_1 = require("./rules/discord/channel");
const time_1 = require("./rules/discord/time");
const blockQuote_1 = require("./rules/blockQuote");
const strike_1 = require("./rules/strike");
const codeBlock_1 = require("./rules/codeBlock");
const emoji_1 = require("./rules/discord/emoji");
const role_1 = require("./rules/discord/role");
const autolink_1 = require("./rules/autolink");
const here_1 = require("./rules/discord/here");
const emoticon_1 = require("./rules/emoticon");
const user_1 = require("./rules/discord/user");
const spoiler_1 = require("./rules/spoiler");
const heading_1 = require("./rules/heading");
const text_1 = require("./rules/text");
const url_1 = require("./rules/url");
const em_1 = require("./rules/em");
const br_1 = require("./rules/br");
// rules normal users can use
exports.rules = {
    blockQuote: blockQuote_1.blockQuote,
    codeBlock: codeBlock_1.codeBlock,
    newline: simple_markdown_1.default.defaultRules.newline,
    escape: simple_markdown_1.default.defaultRules.escape,
    autolink: autolink_1.autolink,
    url: url_1.url,
    em: em_1.em,
    strong: simple_markdown_1.default.defaultRules.strong,
    underline: simple_markdown_1.default.defaultRules.u,
    strikethrough: strike_1.strikethrough,
    inlineCode: simple_markdown_1.default.defaultRules.inlineCode,
    text: text_1.text,
    emoticon: emoticon_1.emoticon,
    br: br_1.br,
    spoiler: spoiler_1.spoiler,
    heading: heading_1.heading,
    // discord specific
    user: user_1.user,
    channel: channel_1.channel,
    role: role_1.role,
    emoji: emoji_1.emoji,
    everyone: everyone_1.everyone,
    here: here_1.here,
    twemoji: twemoji_1.twemoji,
    timestamp: time_1.timestamp,
};
// for use in webhooks, embeds, etc
exports.rulesExtended = Object.assign(Object.assign({}, exports.rules), { link: simple_markdown_1.default.defaultRules.link });
// build the parser
const parser = simple_markdown_1.default.parserFor(exports.rules);
const parserExtended = simple_markdown_1.default.parserFor(exports.rulesExtended);
// parse function
function parse(input, type = 'normal') {
    if (type === 'normal')
        return parser(input, { inline: true });
    else
        return parserExtended(input, { inline: true });
}
exports.parse = parse;
exports.default = parse;
