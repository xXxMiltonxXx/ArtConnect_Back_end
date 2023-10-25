"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceDto = void 0;
class CreateServiceDto {
    constructor(name, date_start, date_end) {
        this.name = name;
        this.date_start = date_start;
        this.date_end = date_end;
    }
    static create(props) {
        const { name, date_start, date_end } = props;
        if (!name) {
            return ['name property is required', undefined];
        }
        return [undefined, new CreateServiceDto(name, date_start || null, date_end || null)];
    }
}
exports.CreateServiceDto = CreateServiceDto;
