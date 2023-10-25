"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComunityDto = void 0;
class CreateComunityDto {
    constructor(userId, name, date_start) {
        this.userId = userId;
        this.name = name;
        this.date_start = date_start;
    }
    static create(props) {
        const { userId, name, date_start } = props;
        if (userId && !name && !date_start)
            return ['name property is required', undefined];
        return [undefined, new CreateComunityDto(userId, name, date_start)];
    }
}
exports.CreateComunityDto = CreateComunityDto;
