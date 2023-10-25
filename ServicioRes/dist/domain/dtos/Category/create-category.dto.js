"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryDto = void 0;
class CreateCategoryDto {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    static create(props) {
        const { name, description } = props;
        if (!name) {
            return ['name property is required', undefined];
        }
        return [undefined, new CreateCategoryDto(name, description)];
    }
}
exports.CreateCategoryDto = CreateCategoryDto;
