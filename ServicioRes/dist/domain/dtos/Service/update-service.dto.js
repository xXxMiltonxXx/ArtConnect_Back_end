"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceDto = void 0;
class UpdateServiceDto {
    constructor(id, name, date_start, date_end) {
        this.id = id;
        this.name = name;
        this.date_start = date_start;
        this.date_end = date_end;
    }
    get values() {
        const returnObj = {};
        if (this.name)
            returnObj.name = this.name;
        if (this.date_start !== undefined)
            returnObj.date_start = this.date_start;
        if (this.date_end !== undefined)
            returnObj.date_end = this.date_end;
        return returnObj;
    }
    static create(props) {
        const { id, name, date_start, date_end } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (!name && date_start === undefined && date_end === undefined) {
            return ['At least one property must be provided for update', undefined];
        }
        return [undefined, new UpdateServiceDto(id, name, date_start || null, date_end || null)];
    }
}
exports.UpdateServiceDto = UpdateServiceDto;
