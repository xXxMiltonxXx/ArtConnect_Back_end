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
exports.FollowerController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class FollowerController {
    //* DI
    constructor() {
        this.getFollowers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const followers = yield postgres_1.prisma.follower.findMany();
            return res.json(followers);
        });
        this.getFollowerById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const follower = yield postgres_1.prisma.follower.findFirst({
                where: { id }
            });
            (follower)
                ? res.json(follower)
                : res.status(404).json({ error: `follower with id ${id} not found` });
        });
        this.createFollower = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createFollowerDto] = dtos_1.CreateFollowerDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const follower = yield postgres_1.prisma.follower.create({
                data: createFollowerDto
            });
            res.json(follower);
        });
        this.updateFollower = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateFollowerDto] = dtos_1.UpdateFollowerDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const follower = yield postgres_1.prisma.follower.findFirst({
                where: { id }
            });
            if (!follower)
                return res.status(404).json({ error: `Follower with id ${id} not found` });
            const updatedFollower = yield postgres_1.prisma.follower.update({
                where: { id },
                data: updateFollowerDto.values
            });
            res.json(updatedFollower);
        });
        this.deleteFollower = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const follower = yield postgres_1.prisma.follower.findFirst({
                where: { id }
            });
            if (!follower)
                return res.status(404).json({ error: `Follower with id ${id} not found` });
            const deleted = yield postgres_1.prisma.follower.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Follower with id ${id} not found` });
        });
    }
}
exports.FollowerController = FollowerController;
