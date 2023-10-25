"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
class UpdateProductDto {
    constructor(id, userId, categoryId, serviceId, name, description, price, date_create, status) {
        this.id = id;
        this.userId = userId;
        this.categoryId = categoryId;
        this.serviceId = serviceId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.date_create = date_create;
        this.status = status;
    }
    get values() {
        const returnObj = {};
        if (this.userId !== null)
            returnObj.userId = this.userId;
        if (this.categoryId !== null)
            returnObj.categoryId = this.categoryId;
        if (this.serviceId !== null)
            returnObj.serviceId = this.serviceId;
        if (this.name !== null)
            returnObj.name = this.name;
        if (this.description !== null)
            returnObj.description = this.description;
        if (this.price !== null)
            returnObj.price = this.price;
        if (this.date_create !== null)
            returnObj.date_create = this.date_create;
        if (this.status !== null)
            returnObj.status = this.status;
        return returnObj;
    }
    static create(props) {
        const { id, userId, categoryId, serviceId, name, description, price, date_create, status, } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (!userId &&
            categoryId === null &&
            serviceId === null &&
            name === null &&
            description === null &&
            price === null &&
            date_create === null &&
            status === null) {
            return ['At least one property must be provided', undefined];
        }
        return [
            undefined,
            new UpdateProductDto(id, userId || null, categoryId || null, serviceId || null, name || null, description || null, price || null, date_create || null, status || null),
        ];
    }
}
exports.UpdateProductDto = UpdateProductDto;
