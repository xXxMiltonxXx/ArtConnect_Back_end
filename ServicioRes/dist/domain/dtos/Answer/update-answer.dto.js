"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnswerDto = void 0;
class UpdateAnswerDto {
    constructor(id, message, foroId) {
        this.id = id;
        this.message = message;
        this.foroId = foroId;
    }
    get values() {
        const returnObj = {};
        if (this.message !== undefined || this.message !== null) {
            returnObj.message = this.message;
        }
        if (this.foroId !== undefined || this.message !== null) {
            returnObj.foroId = this.foroId;
        }
        return returnObj;
    }
    static create(props) {
        const { id, message, foroId } = props;
        if (id == null || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (message === undefined && foroId === undefined) {
            return ['Invalid input for update', undefined];
        }
        return [undefined, new UpdateAnswerDto(id, message || null, foroId || null)];
    }
}
exports.UpdateAnswerDto = UpdateAnswerDto;
