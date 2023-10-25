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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ReactController {
    //* DI
    constructor() {
        this.getReact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const reacts = yield postgres_1.prisma.react.findMany();
            return res.json(reacts);
        });
        this.getReactById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const react = yield postgres_1.prisma.react.findFirst({
                where: { id }
            });
            (react)
                ? res.json(react)
                : res.status(404).json({ error: `React with id ${id} not found` });
        });
        this.createReact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createReactDto] = dtos_1.CreateReactDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const react = yield postgres_1.prisma.react.create({
                data: createReactDto
            });
            res.json(react);
        });
        this.updateReact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateReactDto] = dtos_1.UpdateReactDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const react = yield postgres_1.prisma.react.findFirst({
                where: { id }
            });
            if (!react)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedReact = yield postgres_1.prisma.react.update({
                where: { id },
                data: updateReactDto.values
            });
            res.json(updatedReact);
        });
        this.deleteReact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const react = yield postgres_1.prisma.react.findFirst({
                where: { id }
            });
            if (!react)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.react.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `React with id ${id} not found` });
        });
    }
}
exports.ReactController = ReactController;
