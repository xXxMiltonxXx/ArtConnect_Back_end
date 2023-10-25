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
exports.UsersController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class UsersController {
    //* DI
    constructor() {
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield postgres_1.prisma.user.findMany();
            return res.json(users);
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const user = yield postgres_1.prisma.user.findFirst({
                where: { id }
            });
            (user)
                ? res.json(user)
                : res.status(404).json({ error: `User with id ${id} not found` });
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createUserDto] = dtos_1.CreateUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const user = yield postgres_1.prisma.user.create({
                data: createUserDto
            });
            res.json(user);
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateUserDto] = dtos_1.UpdateUserDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const user = yield postgres_1.prisma.user.findFirst({
                where: { id }
            });
            if (!user)
                return res.status(404).json({ error: `User with id ${id} not found` });
            const updatedUser = yield postgres_1.prisma.user.update({
                where: { id },
                data: updateUserDto.values
            });
            res.json(updatedUser);
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const user = yield postgres_1.prisma.user.findFirst({
                where: { id }
            });
            if (!user)
                return res.status(404).json({ error: `User with id ${id} not found` });
            const deleted = yield postgres_1.prisma.user.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `User with id ${id} not found` });
        });
    }
}
exports.UsersController = UsersController;
