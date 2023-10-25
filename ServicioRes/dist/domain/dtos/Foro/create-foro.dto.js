"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateForoDto = void 0;
class CreateForoDto {
    constructor(subject, description, date_publication, date_update, comunityId) {
        this.subject = subject;
        this.description = description;
        this.date_publication = date_publication;
        this.date_update = date_update;
        this.comunityId = comunityId;
    }
    static create(props) {
        const { subject, description, date_publication, date_update, comunityId, } = props;
        if (comunityId == null || !description) {
            return ['comunityId or description property is required', undefined];
        }
        return [
            undefined,
            new CreateForoDto(subject || null, description || '', date_publication || null, date_update || null, comunityId),
        ];
    }
}
exports.CreateForoDto = CreateForoDto;
