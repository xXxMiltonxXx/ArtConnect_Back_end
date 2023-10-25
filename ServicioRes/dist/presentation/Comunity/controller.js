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
exports.ComunityController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ComunityController {
    //* DI
    constructor() {
        this.getCommunities = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const communities = yield postgres_1.prisma.comunity.findMany();
            return res.json(communities);
        });
        this.getCommunityById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const community = yield postgres_1.prisma.comunity.findFirst({
                where: { id }
            });
            (community)
                ? res.json(community)
                : res.status(404).json({ error: `Community with id ${id} not found` });
        });
        this.createCommunity = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createComunityDto] = dtos_1.CreateComunityDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const community = yield postgres_1.prisma.comunity.create({
                data: createComunityDto
            });
            res.json(community);
        });
        this.updateComunity = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateComunityDto] = dtos_1.UpdateComunityDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const comunity = yield postgres_1.prisma.comunity.findFirst({
                where: { id }
            });
            if (!comunity)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedComunity = yield postgres_1.prisma.comunity.update({
                where: { id },
                data: updateComunityDto.values
            });
            res.json(updatedComunity);
        });
        this.deleteComunity = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const comunity = yield postgres_1.prisma.comunity.findFirst({
                where: { id }
            });
            if (!comunity)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.comunity.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Comunity with id ${id} not found` });
        });
    }
}
exports.ComunityController = ComunityController;
