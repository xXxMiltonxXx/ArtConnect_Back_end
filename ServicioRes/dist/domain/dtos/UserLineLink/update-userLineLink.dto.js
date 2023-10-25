"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserLineLinkDto = void 0;
class UpdateUserLineLinkDto {
    constructor(id, linkId, userId) {
        this.id = id;
        this.linkId = linkId;
        this.userId = userId;
    }
    get values() {
        const returnObj = {};
        if (this.linkId !== undefined) {
            returnObj.linkId = this.linkId;
        }
        if (this.userId !== undefined) {
            returnObj.userId = this.userId;
        }
        return returnObj;
    }
    static create(props) {
        const { id, linkId, userId } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (linkId === undefined && userId === undefined) {
            return ['At least one property must be provided', undefined];
        }
        return [undefined, new UpdateUserLineLinkDto(id, linkId, userId)];
    }
}
exports.UpdateUserLineLinkDto = UpdateUserLineLinkDto;
