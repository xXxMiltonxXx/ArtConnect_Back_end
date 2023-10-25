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
exports.ResponseController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ResponseController {
    //* DI
    constructor() {
        this.getResponses = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const responses = yield postgres_1.prisma.response.findMany();
            return res.json(responses);
        });
        this.getResponseById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const response = yield postgres_1.prisma.response.findFirst({
                where: { id }
            });
            (response)
                ? res.json(response)
                : res.status(404).json({ error: `Community with id ${id} not found` });
        });
        this.createResponse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createResponseDto] = dtos_1.CreateResponseDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const response = yield postgres_1.prisma.response.create({
                data: createResponseDto
            });
            res.json(response);
        });
        this.updateResponse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateResponseDto] = dtos_1.UpdateResponseDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const response = yield postgres_1.prisma.response.findFirst({
                where: { id }
            });
            if (!response)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedResponse = yield postgres_1.prisma.response.update({
                where: { id },
                data: updateResponseDto.values
            });
            res.json(updatedResponse);
        });
        this.deleteResponse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const response = yield postgres_1.prisma.response.findFirst({
                where: { id }
            });
            if (!response)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.response.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Response with id ${id} not found` });
        });
    }
}
exports.ResponseController = ResponseController;
