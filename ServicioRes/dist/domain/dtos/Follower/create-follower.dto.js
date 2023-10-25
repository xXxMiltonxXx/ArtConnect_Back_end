"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFollowerDto = void 0;
class CreateFollowerDto {
    constructor(userId, comunityId, status, date) {
        this.userId = userId;
        this.comunityId = comunityId;
        this.status = status;
        this.date = date;
    }
    static create(props) {
        const { userId, comunityId, status, date } = props;
        if (!userId || status == null || !date)
            return ['Boolean property is required', undefined];
        return [undefined, new CreateFollowerDto(userId, comunityId, status, date)];
    }
}
exports.CreateFollowerDto = CreateFollowerDto;
