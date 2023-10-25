"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLinkDto = void 0;
class UpdateLinkDto {
    constructor(id, rolId, name, Link) {
        this.id = id;
        this.rolId = rolId;
        this.name = name;
        this.Link = Link;
    }
    get values() {
        const returnObj = {};
        if (this.rolId !== undefined)
            returnObj.rolId = this.rolId;
        if (this.name !== undefined)
            returnObj.name = this.name;
        if (this.Link !== undefined)
            returnObj.link = this.Link;
        return returnObj;
    }
    static create(props) {
        const { id, rolId, name, Link } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (!rolId && !name && !Link) {
            return ['At least one property must be provided', undefined];
        }
        return [undefined, new UpdateLinkDto(id, rolId, name, Link)];
    }
}
exports.UpdateLinkDto = UpdateLinkDto;
