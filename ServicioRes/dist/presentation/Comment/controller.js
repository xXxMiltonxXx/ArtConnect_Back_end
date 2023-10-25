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
exports.CommentController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CommentController {
    //* DI
    constructor() {
        this.getComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const comments = yield postgres_1.prisma.comment.findMany();
            return res.json(comments);
        });
        this.getCommentById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const comment = yield postgres_1.prisma.comment.findFirst({
                where: { id }
            });
            (comment)
                ? res.json(comment)
                : res.status(404).json({ error: `Comment with id ${id} not found` });
        });
        this.createComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCommentDto] = dtos_1.CreateCommentDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const comment = yield postgres_1.prisma.comment.create({
                data: createCommentDto
            });
            res.json(comment);
        });
        this.updateComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateCommentDto] = dtos_1.UpdateCommentDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const comment = yield postgres_1.prisma.comment.findFirst({
                where: { id }
            });
            if (!comment)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedComment = yield postgres_1.prisma.comment.update({
                where: { id },
                data: updateCommentDto.values
            });
            res.json(updatedComment);
        });
        this.deleteComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const comment = yield postgres_1.prisma.comment.findFirst({
                where: { id }
            });
            if (!comment)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.comment.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Comment with id ${id} not found` });
        });
    }
}
exports.CommentController = CommentController;
