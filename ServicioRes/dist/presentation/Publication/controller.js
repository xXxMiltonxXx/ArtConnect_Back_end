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
exports.PublicationController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class PublicationController {
    //* DI
    constructor() {
        this.getPublication = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const publications = yield postgres_1.prisma.publication.findMany();
            return res.json(publications);
        });
        this.getPublicationById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const publication = yield postgres_1.prisma.publication.findFirst({
                where: { id }
            });
            (publication)
                ? res.json(publication)
                : res.status(404).json({ error: `Publication with id ${id} not found` });
        });
        this.createPublication = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPublicationDto] = dtos_1.CreatePublicationDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const publication = yield postgres_1.prisma.publication.create({
                data: createPublicationDto
            });
            res.json(publication);
        });
        this.updatePublication = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatePublicationDto] = dtos_1.UpdatePublicationDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const publication = yield postgres_1.prisma.publication.findFirst({
                where: { id }
            });
            if (!publication)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedPublication = yield postgres_1.prisma.publication.update({
                where: { id },
                data: updatePublicationDto.values
            });
            res.json(updatedPublication);
        });
        this.deletePublication = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const publication = yield postgres_1.prisma.publication.findFirst({
                where: { id }
            });
            if (!publication)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.publication.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Publication with id ${id} not found` });
        });
    }
}
exports.PublicationController = PublicationController;
