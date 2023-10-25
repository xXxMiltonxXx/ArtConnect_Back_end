"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePublicationDto = void 0;
class CreatePublicationDto {
    constructor(name, date, status, customerId, userId, description, image) {
        this.name = name;
        this.date = date;
        this.status = status;
        this.customerId = customerId;
        this.userId = userId;
        this.description = description;
        this.image = image;
    }
    static create(props) {
        const { name, date, status, customerId, userId, description, image } = props;
        if (name == null) {
            return ['name property is required', undefined];
        }
        if (!customerId && !userId) {
            return ['customerId or userId property is required', undefined];
        }
        if (date == null || !(date instanceof Date)) {
            return ['date property must be a valid Date', undefined];
        }
        if (status == null) {
            return ['status property is required', undefined];
        }
        return [undefined, new CreatePublicationDto(name, date, status, customerId, userId, description, image)];
    }
}
exports.CreatePublicationDto = CreatePublicationDto;
