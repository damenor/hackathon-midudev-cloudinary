"use strict";
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
exports.appRouter = void 0;
const express_1 = require("express");
const puppeteer_1 = __importDefault(require("puppeteer"));
exports.appRouter = (0, express_1.Router)();
const isValidUrl = (urlString) => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');
    // const urlPattern = new RegExp(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)
    return !!urlPattern.test(urlString);
};
exports.appRouter.get('/', (_req, res) => res.send('API - Auth v2'));
exports.appRouter.get('/web', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.query.url;
    if (!url)
        return res.status(500).json({ error: true, message: 'La url es requerida' });
    // try {
    const browser = yield puppeteer_1.default.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: '/usr/bin/google-chrome',
        headless: true,
    });
    const page = yield browser.newPage();
    yield page.goto(url);
    const imagesWeb = yield page.$$eval('img', images => images.map(image => image.src));
    yield browser.close();
    const imagesNotDuplicates = [...new Set(imagesWeb)].filter(img => img !== '' && isValidUrl(img));
    return res.status(200).json({ images: imagesNotDuplicates });
    // } catch (error) {
    //   return res.status(500).json({ error: true, message: 'ups', errorMsg: JSON.stringify(error) }) 
    // }
}));
