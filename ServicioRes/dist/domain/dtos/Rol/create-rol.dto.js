"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolDto = void 0;
class CreateRolDto {
    constructor(name) {
        this.name = name;
    }
    static create(props) {
        const { name } = props;
        if (!name)
            return ['name property is required', undefined];
        return [undefined, new CreateRolDto(name)];
    }
}
exports.CreateRolDto = CreateRolDto;
