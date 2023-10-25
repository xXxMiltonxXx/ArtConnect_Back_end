"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReactDto = void 0;
class UpdateReactDto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get values() {
        const returnObj = {};
        if (this.name)
            returnObj.name = this.name;
        return returnObj;
    }
    static create(props) {
        const { id, name } = props;
        if (id == null || isNaN(id)) {
            return ['id must be a valid number', undefined];
        }
        if (!name) {
            return ['At least one property must be provided', undefined];
        }
        return [undefined, new UpdateReactDto(id, name)];
    }
}
exports.UpdateReactDto = UpdateReactDto;
