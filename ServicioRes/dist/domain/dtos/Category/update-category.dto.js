"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryDto = void 0;
class UpdateCategoryDto {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    get values() {
        const returnObj = {};
        if (this.name)
            returnObj.name = this.name;
        if (this.description)
            returnObj.description = this.description;
        return returnObj;
    }
    static create(props) {
        const { id, name, description } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (!name && !description) {
            return ['At least one property must be provided', undefined];
        }
        return [undefined, new UpdateCategoryDto(id, name, description)];
    }
}
exports.UpdateCategoryDto = UpdateCategoryDto;
