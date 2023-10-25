"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnswerDto = void 0;
class CreateAnswerDto {
    constructor(message, foroId) {
        this.message = message;
        this.foroId = foroId;
    }
    static create(props) {
        const { message, foroId } = props;
        if (foroId == null) {
            return ['foroId property is required', undefined];
        }
        return [undefined, new CreateAnswerDto(message || null, foroId)];
    }
}
exports.CreateAnswerDto = CreateAnswerDto;
