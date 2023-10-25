"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
class CreateProductDto {
    constructor(userId, categoryId, serviceId, name, description, price, date_create, status) {
        this.userId = userId;
        this.categoryId = categoryId;
        this.serviceId = serviceId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.date_create = date_create;
        this.status = status;
    }
    static create(props) {
        const { userId, categoryId, serviceId, name, description, price, date_create, status, } = props;
        if (!userId) {
            return ['userId property is required', undefined];
        }
        return [
            undefined,
            new CreateProductDto(userId, categoryId || null, serviceId || null, name, description || null, price || null, date_create || null, status),
        ];
    }
}
exports.CreateProductDto = CreateProductDto;
