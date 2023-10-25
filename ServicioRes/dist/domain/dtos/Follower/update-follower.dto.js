"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFollowerDto = void 0;
class UpdateFollowerDto {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
    get values() {
        const returnObj = {};
        if (this.status)
            returnObj.status = this.status;
        return returnObj;
    }
    static create(props) {
        const { id, status } = props;
        let newStatus = status;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (status !== null) {
            return ['status must be a valid date'];
        }
        return [undefined, new UpdateFollowerDto(id, status)];
    }
}
exports.UpdateFollowerDto = UpdateFollowerDto;
