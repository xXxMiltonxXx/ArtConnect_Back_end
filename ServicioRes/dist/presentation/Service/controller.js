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
exports.ServiceController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ServiceController {
    //* DI
    constructor() {
        this.getServices = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const services = yield postgres_1.prisma.comunity.findMany();
            return res.json(services);
        });
        this.getServiceById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const service = yield postgres_1.prisma.service.findFirst({
                where: { id }
            });
            (service)
                ? res.json(service)
                : res.status(404).json({ error: `Service with id ${id} not found` });
        });
        this.createService = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createServiceDto] = dtos_1.CreateServiceDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const service = yield postgres_1.prisma.service.create({
                data: createServiceDto
            });
            res.json(service);
        });
        this.updateService = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateServiceDto] = dtos_1.UpdateServiceDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const service = yield postgres_1.prisma.service.findFirst({
                where: { id }
            });
            if (!service)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const updatedService = yield postgres_1.prisma.service.update({
                where: { id },
                data: updateServiceDto.values
            });
            res.json(updatedService);
        });
        this.deleteService = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const service = yield postgres_1.prisma.service.findFirst({
                where: { id }
            });
            if (!service)
                return res.status(404).json({ error: `Movie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.service.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Service with id ${id} not found` });
        });
    }
}
exports.ServiceController = ServiceController;
