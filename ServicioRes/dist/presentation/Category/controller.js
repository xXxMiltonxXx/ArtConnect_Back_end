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
exports.CategoryController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CategoryController {
    //* DI
    constructor() {
        this.getCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const category = yield postgres_1.prisma.category.findMany();
            return res.json(category);
        });
        this.getCategoryById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const category = yield postgres_1.prisma.category.findFirst({
                where: { id }
            });
            (category)
                ? res.json(category)
                : res.status(404).json({ error: `Category with id ${id} not found` });
        });
        this.createCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCategoryDto] = dtos_1.CreateCategoryDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const category = yield postgres_1.prisma.category.create({
                data: createCategoryDto
            });
            res.json(category);
        });
        this.updateCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateCategoryDto] = dtos_1.UpdateCategoryDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const category = yield postgres_1.prisma.category.findFirst({
                where: { id }
            });
            if (!category)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedCategory = yield postgres_1.prisma.category.update({
                where: { id },
                data: updateCategoryDto.values
            });
            res.json(updatedCategory);
        });
        this.deleteCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const category = yield postgres_1.prisma.category.findFirst({
                where: { id }
            });
            if (!category)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.category.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Category with id ${id} not found` });
        });
    }
}
exports.CategoryController = CategoryController;
