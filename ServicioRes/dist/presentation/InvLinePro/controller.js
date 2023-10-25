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
exports.InvLineProController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class InvLineProController {
    //* DI
    constructor() {
        this.getInvLinePro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const invLinePro = yield postgres_1.prisma.inv_Line_Pro.findMany();
            return res.json(invLinePro);
        });
        this.getInvLineProById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const invLinePro = yield postgres_1.prisma.inv_Line_Pro.findFirst({
                where: { id }
            });
            (invLinePro)
                ? res.json(invLinePro)
                : res.status(404).json({ error: `Community with id ${id} not found` });
        });
        this.createInvLinePro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createInvLineProDto] = dtos_1.CreateInvLineProDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const invLinePro = yield postgres_1.prisma.inv_Line_Pro.create({
                data: createInvLineProDto
            });
            res.json(invLinePro);
        });
        this.updateInvLinePro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateInvLineProDto] = dtos_1.UpdateInvLineProDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const invLinePro = yield postgres_1.prisma.inv_Line_Pro.findFirst({
                where: { id }
            });
            if (!invLinePro)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedInvLinePro = yield postgres_1.prisma.inv_Line_Pro.update({
                where: { id },
                data: updateInvLineProDto.values
            });
            res.json(updatedInvLinePro);
        });
        this.deleteInvLinePro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const invLinePro = yield postgres_1.prisma.inv_Line_Pro.findFirst({
                where: { id }
            });
            if (!invLinePro)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.inv_Line_Pro.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `InvLinePro with id ${id} not found` });
        });
    }
}
exports.InvLineProController = InvLineProController;
