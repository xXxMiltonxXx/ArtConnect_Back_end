"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResponseDto = void 0;
class UpdateResponseDto {
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
    get values() {
        const returnObj = {};
        if (this.message !== undefined) {
            returnObj.message = this.message;
        }
        return returnObj;
    }
    static create(props) {
        const { id, message } = props;
        if (id == null) {
            return ['id property is required', undefined];
        }
        if (!message) {
            return ['message property is required', undefined];
        }
        return [undefined, new UpdateResponseDto(id, message)];
    }
}
exports.UpdateResponseDto = UpdateResponseDto;
