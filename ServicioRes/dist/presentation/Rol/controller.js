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
exports.RolController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class RolController {
    //* DI
    constructor() {
        this.getRoles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const roles = yield postgres_1.prisma.rol.findMany();
            return res.json(roles);
        });
        this.getRolById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const rol = yield postgres_1.prisma.rol.findFirst({
                where: { id }
            });
            (rol)
                ? res.json(rol)
                : res.status(404).json({ error: `Rol with id ${id} not found` });
        });
        this.createRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createRolDto] = dtos_1.CreateRolDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const rol = yield postgres_1.prisma.rol.create({
                data: createRolDto
            });
            res.json(rol);
        });
        this.updateRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateRolDto] = dtos_1.UpdateRolDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const rol = yield postgres_1.prisma.rol.findFirst({
                where: { id }
            });
            if (!rol)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedRol = yield postgres_1.prisma.rol.update({
                where: { id },
                data: updateRolDto.values
            });
            res.json(updatedRol);
        });
        this.deleteRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const rol = yield postgres_1.prisma.rol.findFirst({
                where: { id }
            });
            if (!rol)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.rol.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Rol with id ${id} not found` });
        });
    }
}
exports.RolController = RolController;
