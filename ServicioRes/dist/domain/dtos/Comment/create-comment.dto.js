"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentDto = void 0;
class CreateCommentDto {
    constructor(publicationId, text) {
        this.publicationId = publicationId;
        this.text = text;
    }
    static create(props) {
        const { publicationId, text } = props;
        if (publicationId == null) {
            return ['publicationId property is required', undefined];
        }
        if (!text) {
            return ['text property is required', undefined];
        }
        return [undefined, new CreateCommentDto(publicationId, text)];
    }
}
exports.CreateCommentDto = CreateCommentDto;
