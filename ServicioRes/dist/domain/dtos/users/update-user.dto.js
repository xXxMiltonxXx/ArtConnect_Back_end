"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
class UpdateUserDto {
    constructor(id, email, password, name, lname, phone, idCard, semestre, status, alias, biography) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lname = lname;
        this.phone = phone;
        this.idCard = idCard;
        this.semestre = semestre;
        this.status = status;
        this.alias = alias;
        this.biography = biography;
    }
    get values() {
        const returnObj = {};
        if (this.email)
            returnObj.email = this.email;
        if (this.password)
            returnObj.password = this.password;
        if (this.name)
            returnObj.name = this.name;
        if (this.lname)
            returnObj.lname = this.lname;
        if (this.phone)
            returnObj.phone = this.phone;
        if (this.idCard)
            returnObj.idCard = this.idCard;
        if (this.semestre)
            returnObj.semestre = this.semestre;
        if (this.status)
            returnObj.status = this.status;
        if (this.alias)
            returnObj.alias = this.alias;
        if (this.biography)
            returnObj.biography = this.biography;
        return returnObj;
    }
    static create(props) {
        const { id, email, password, name, lname, phone, idCard, semestre, status, alias, biography } = props;
        let newName = name;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!email && !password && !name && !lname && !phone && !idCard && !semestre || isNaN(Number(semestre)) && !status && !alias && !biography) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateUserDto(id, email, password, name, lname, phone, idCard, semestre, status, alias, biography)];
    }
}
exports.UpdateUserDto = UpdateUserDto;
