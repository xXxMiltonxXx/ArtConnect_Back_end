"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentDto = void 0;
class UpdateCommentDto {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
    get values() {
        const returnObj = {};
        if (this.text)
            returnObj.text = this.text;
        return returnObj;
    }
    static create(props) {
        const { id, text } = props;
        if (id == null) {
            return ['id property is required', undefined];
        }
        if (!text) {
            return ['text property is required for update', undefined];
        }
        return [undefined, new UpdateCommentDto(id, text)];
    }
}
exports.UpdateCommentDto = UpdateCommentDto;
