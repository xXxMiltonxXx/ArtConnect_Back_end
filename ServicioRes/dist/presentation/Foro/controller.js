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
exports.ForoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ForoController {
    //* DI
    constructor() {
        this.getForo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const foros = yield postgres_1.prisma.foro.findMany();
            return res.json(foros);
        });
        this.getForoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const foro = yield postgres_1.prisma.foro.findFirst({
                where: { id }
            });
            (foro)
                ? res.json(foro)
                : res.status(404).json({ error: `Foro with id ${id} not found` });
        });
        this.createForo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createForoDto] = dtos_1.CreateForoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const foro = yield postgres_1.prisma.foro.create({
                data: createForoDto
            });
            res.json(foro);
        });
        this.updateForo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateForoDto] = dtos_1.UpdateForoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const foro = yield postgres_1.prisma.foro.findFirst({
                where: { id }
            });
            if (!foro)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedForo = yield postgres_1.prisma.foro.update({
                where: { id },
                data: updateForoDto.values
            });
            res.json(updatedForo);
        });
        this.deleteForo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const foro = yield postgres_1.prisma.foro.findFirst({
                where: { id }
            });
            if (!foro)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.foro.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Comunity with id ${id} not found` });
        });
    }
}
exports.ForoController = ForoController;
