"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLinkDto = void 0;
class CreateLinkDto {
    constructor(rolId, name, Link) {
        this.rolId = rolId;
        this.name = name;
        this.Link = Link;
    }
    static create(props) {
        const { rolId, name, Link } = props;
        if (!rolId || isNaN(Number(rolId))) {
            return ['rolId must be a valid number', undefined];
        }
        if (!name || !Link) {
            return ['name and link properties are required', undefined];
        }
        return [undefined, new CreateLinkDto(rolId, name, Link)];
    }
}
exports.CreateLinkDto = CreateLinkDto;
