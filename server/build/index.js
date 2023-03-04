"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes");
const tools_1 = require("./tools");
(0, dotenv_1.config)();
const server = new tools_1.Server({ router: routes_1.appRouter });
server.start();
