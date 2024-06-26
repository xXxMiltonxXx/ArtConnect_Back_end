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
exports.CustomerController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CustomerController {
    //* DI
    constructor() {
        this.getCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const customers = yield postgres_1.prisma.customer.findMany();
            return res.json(customers);
        });
        this.getCustomerById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const customer = yield postgres_1.prisma.customer.findFirst({
                where: { id }
            });
            (customer)
                ? res.json(customer)
                : res.status(404).json({ error: `Customer with id ${id} not found` });
        });
        this.createCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCustomerDto] = dtos_1.CreateCustomerDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const customer = yield postgres_1.prisma.customer.create({
                data: createCustomerDto
            });
            res.json(customer);
        });
        this.updateCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateCustomerDto] = dtos_1.UpdateCustomerDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const customer = yield postgres_1.prisma.customer.findFirst({
                where: { id }
            });
            if (!customer)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedCustomer = yield postgres_1.prisma.customer.update({
                where: { id },
                data: updateCustomerDto.values
            });
            res.json(updatedCustomer);
        });
        this.deleteCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const customer = yield postgres_1.prisma.customer.findFirst({
                where: { id }
            });
            if (!customer)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.customer.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Customer with id ${id} not found` });
        });
    }
}
exports.CustomerController = CustomerController;
