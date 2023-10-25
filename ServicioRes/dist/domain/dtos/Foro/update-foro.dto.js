"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateForoDto = void 0;
class UpdateForoDto {
    constructor(id, subject, description, date_publication, date_update) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.date_publication = date_publication;
        this.date_update = date_update;
    }
    get values() {
        const returnObj = {};
        if (this.subject != null)
            returnObj.subject = this.subject;
        if (this.description != null)
            returnObj.description = this.description;
        if (this.date_publication != null)
            returnObj.date_publication = this.date_publication;
        if (this.date_update != null)
            returnObj.date_update = this.date_update;
        return returnObj;
    }
    static create(props) {
        const { id, subject, description, date_publication, date_update, } = props;
        if (id == null || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (subject == null &&
            description == null &&
            date_publication == null &&
            date_update == null) {
            return ['At least one property must be provided', undefined];
        }
        return [
            undefined,
            new UpdateForoDto(id, subject, description, date_publication, date_update),
        ];
    }
}
exports.UpdateForoDto = UpdateForoDto;
