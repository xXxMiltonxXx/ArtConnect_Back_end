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
exports.LinkController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class LinkController {
    //* DI
    constructor() {
        this.getLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const links = yield postgres_1.prisma.link.findMany();
            return res.json(links);
        });
        this.getLinkById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const link = yield postgres_1.prisma.link.findFirst({
                where: { id }
            });
            (link)
                ? res.json(link)
                : res.status(404).json({ error: `Link with id ${id} not found` });
        });
        this.createLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createLinkDto] = dtos_1.CreateLinkDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const link = yield postgres_1.prisma.link.create({
                data: createLinkDto
            });
            res.json(link);
        });
        this.updateLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateLinkDto] = dtos_1.UpdateLinkDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const link = yield postgres_1.prisma.link.findFirst({
                where: { id }
            });
            if (!link)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedLink = yield postgres_1.prisma.link.update({
                where: { id },
                data: updateLinkDto.values
            });
            res.json(updatedLink);
        });
        this.deleteLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const link = yield postgres_1.prisma.link.findFirst({
                where: { id }
            });
            if (!link)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.link.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Link with id ${id} not found` });
        });
    }
}
exports.LinkController = LinkController;
