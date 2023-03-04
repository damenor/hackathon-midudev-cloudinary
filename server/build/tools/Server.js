"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor({ router }) {
        this.start = () => {
            this.app.listen(this.app.get('PORT'), () => console.log(`Server on port ${this.app.get('PORT')}`));
        };
        this.config = () => {
            this.app.set('PORT', process.env.PORT);
            this.app.use(express_1.default.json());
        };
        this.routes = () => this.app.use(this.appRouter);
        this.middlewares = () => {
            this.app.use((0, cors_1.default)());
            this.app.use((0, morgan_1.default)('dev'));
            this.app.use((0, helmet_1.default)());
        };
        this.app = (0, express_1.default)();
        this.appRouter = router;
        this.config();
        this.middlewares();
        this.routes();
    }
}
exports.Server = Server;
