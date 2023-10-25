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
exports.UserLineLinkController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class UserLineLinkController {
    //* DI
    constructor() {
        this.getUserLineLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userLineLink = yield postgres_1.prisma.user_line_link.findMany();
            return res.json(userLineLink);
        });
        this.getUserLineLinkById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const userLineLink = yield postgres_1.prisma.user_line_link.findFirst({
                where: { id }
            });
            (userLineLink)
                ? res.json(userLineLink)
                : res.status(404).json({ error: `UserLineLink with id ${id} not found` });
        });
        this.createUserLineLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createUserLineLinkDto] = dtos_1.CreateUserLineLinkDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const userLineLink = yield postgres_1.prisma.user_line_link.create({
                data: createUserLineLinkDto
            });
            res.json(userLineLink);
        });
        this.updateUserLineLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateUserLineLinkDto] = dtos_1.UpdateUserLineLinkDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const userLineLink = yield postgres_1.prisma.user_line_link.findFirst({
                where: { id }
            });
            if (!userLineLink)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedUserLineLink = yield postgres_1.prisma.user_line_link.update({
                where: { id },
                data: updateUserLineLinkDto.values
            });
            res.json(updatedUserLineLink);
        });
        this.deleteUserLineLink = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const userLineLink = yield postgres_1.prisma.user_line_link.findFirst({
                where: { id }
            });
            if (!userLineLink)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.user_line_link.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `UserLineLink with id ${id} not found` });
        });
    }
}
exports.UserLineLinkController = UserLineLinkController;
