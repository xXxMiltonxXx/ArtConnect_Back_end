"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResponseDto = void 0;
class CreateResponseDto {
    constructor(message, foroId, answerId) {
        this.message = message;
        this.foroId = foroId;
        this.answerId = answerId;
    }
    static create(props) {
        const { message, foroId, answerId } = props;
        if (foroId == null || answerId == null) {
            return ['foroId and answerId properties are required', undefined];
        }
        return [undefined, new CreateResponseDto(message || null, foroId, answerId)];
    }
}
exports.CreateResponseDto = CreateResponseDto;
