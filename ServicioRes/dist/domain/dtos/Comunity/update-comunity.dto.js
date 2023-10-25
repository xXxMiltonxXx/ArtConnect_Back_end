"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComunityDto = void 0;
class UpdateComunityDto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get values() {
        const returnObj = {};
        if (this.name)
            returnObj.name = this.name;
        return returnObj;
    }
    static create(props) {
        const { id, name } = props;
        let newName = name;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!name) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateComunityDto(id, name)];
    }
}
exports.UpdateComunityDto = UpdateComunityDto;
