"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactDto = void 0;
class CreateReactDto {
    constructor(publicationId, name) {
        this.publicationId = publicationId;
        this.name = name;
    }
    static create(props) {
        const { publicationId, name } = props;
        if (publicationId == null || isNaN(publicationId) || !name) {
            return ['publicationId and name properties are required', undefined];
        }
        return [undefined, new CreateReactDto(publicationId, name)];
    }
}
exports.CreateReactDto = CreateReactDto;
