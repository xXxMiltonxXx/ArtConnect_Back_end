"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserLineLinkDto = void 0;
class CreateUserLineLinkDto {
    constructor(linkId, userId) {
        this.linkId = linkId;
        this.userId = userId;
    }
    static create(props) {
        const { linkId, userId } = props;
        if (!linkId || !userId) {
            return ['linkId and userId properties are required', undefined];
        }
        return [undefined, new CreateUserLineLinkDto(linkId, userId)];
    }
}
exports.CreateUserLineLinkDto = CreateUserLineLinkDto;
