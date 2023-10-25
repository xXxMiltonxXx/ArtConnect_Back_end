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
exports.InvoiceController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class InvoiceController {
    //* DI
    constructor() {
        this.getInvoices = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const invoices = yield postgres_1.prisma.invoice.findMany();
            return res.json(invoices);
        });
        this.getInvoiceById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const invoice = yield postgres_1.prisma.invoice.findFirst({
                where: { id }
            });
            (invoice)
                ? res.json(invoice)
                : res.status(404).json({ error: `Invoice with id ${id} not found` });
        });
        this.createInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createInvoiceDto] = dtos_1.CreateInvoiceDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const invoice = yield postgres_1.prisma.invoice.create({
                data: createInvoiceDto
            });
            res.json(invoice);
        });
        this.updateInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateInvoiceDto] = dtos_1.UpdateInvoiceDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const invoice = yield postgres_1.prisma.invoice.findFirst({
                where: { id }
            });
            if (!invoice)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedInvoice = yield postgres_1.prisma.invoice.update({
                where: { id },
                data: updateInvoiceDto.values
            });
            res.json(updatedInvoice);
        });
        this.deleteInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const invoice = yield postgres_1.prisma.invoice.findFirst({
                where: { id }
            });
            if (!invoice)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.invoice.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Invoice with id ${id} not found` });
        });
    }
}
exports.InvoiceController = InvoiceController;
