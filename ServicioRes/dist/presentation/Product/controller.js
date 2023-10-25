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
exports.ProductController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ProductController {
    //* DI
    constructor() {
        this.getProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const product = yield postgres_1.prisma.product.findMany();
            return res.json(product);
        });
        this.getProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const product = yield postgres_1.prisma.product.findFirst({
                where: { id }
            });
            (product)
                ? res.json(product)
                : res.status(404).json({ error: `Productwith id ${id} not found` });
        });
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createProductDto] = dtos_1.CreateProductDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const product = yield postgres_1.prisma.product.create({
                data: createProductDto
            });
            res.json(product);
        });
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateProductDto] = dtos_1.UpdateProductDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const product = yield postgres_1.prisma.product.findFirst({
                where: { id }
            });
            if (!product)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedProduct = yield postgres_1.prisma.product.update({
                where: { id },
                data: updateProductDto.values
            });
            res.json(updatedProduct);
        });
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const product = yield postgres_1.prisma.product.findFirst({
                where: { id }
            });
            if (!product)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.product.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Productwith id ${id} not found` });
        });
    }
}
exports.ProductController = ProductController;
