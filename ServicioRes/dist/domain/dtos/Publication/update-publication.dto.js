"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePublicationDto = void 0;
class UpdatePublicationDto {
    constructor(id, name, date, status, description, image) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.status = status;
        this.description = description;
        this.image = image;
    }
    get values() {
        const returnObj = {};
        if (this.name !== undefined)
            returnObj.name = this.name;
        if (this.date !== undefined)
            returnObj.date = this.date;
        if (this.status !== undefined)
            returnObj.status = this.status;
        if (this.description !== undefined)
            returnObj.description = this.description;
        if (this.image !== undefined)
            returnObj.image = this.image;
        return returnObj;
    }
    static create(props) {
        const { id, name, date, status, description, image } = props;
        if (id == null || isNaN(id)) {
            return ['id must be a valid number', undefined];
        }
        return [undefined, new UpdatePublicationDto(id, name, date, status, description, image)];
    }
}
exports.UpdatePublicationDto = UpdatePublicationDto;
