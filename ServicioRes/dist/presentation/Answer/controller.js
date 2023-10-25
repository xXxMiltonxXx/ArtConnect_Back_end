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
exports.AnswerController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class AnswerController {
    //* DI
    constructor() {
        this.getAnswer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const answers = yield postgres_1.prisma.answer.findMany();
            return res.json(answers);
        });
        this.getAnswerById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const answer = yield postgres_1.prisma.answer.findFirst({
                where: { id }
            });
            (answer)
                ? res.json(answer)
                : res.status(404).json({ error: `Answer with id ${id} not found` });
        });
        this.createAnswer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createAnswerDto] = dtos_1.CreateAnswerDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const answer = yield postgres_1.prisma.answer.create({
                data: createAnswerDto
            });
            res.json(answer);
        });
        this.updateAnswer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateAnswerDto] = dtos_1.UpdateAnswerDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const answer = yield postgres_1.prisma.answer.findFirst({
                where: { id }
            });
            if (!answer)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedAnswer = yield postgres_1.prisma.answer.update({
                where: { id },
                data: updateAnswerDto.values
            });
            res.json(updatedAnswer);
        });
        this.deleteAnswer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const answer = yield postgres_1.prisma.answer.findFirst({
                where: { id }
            });
            if (!answer)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.answer.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Answer with id ${id} not found` });
        });
    }
}
exports.AnswerController = AnswerController;
