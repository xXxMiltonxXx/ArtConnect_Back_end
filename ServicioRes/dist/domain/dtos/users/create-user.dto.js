"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
class CreateUserDto {
    constructor(email, password, name, lname, phone, idCard, semestre, status, biography, alias) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lname = lname;
        this.phone = phone;
        this.idCard = idCard;
        this.semestre = semestre;
        this.status = status;
        this.biography = biography;
        this.alias = alias;
    }
    static create(props) {
        const { email, password, name, lname, phone, idCard, semestre, status, alias, biography } = props;
        if (!email)
            return ['Email property is required', undefined];
        if (!password)
            return ['password property is required', undefined];
        if (!lname)
            return ['Lastname property is required', undefined];
        if (!phone)
            return ['Phone property is required', undefined];
        if (!idCard)
            return ['IdCard property is required', undefined];
        if (!semestre)
            return ['Email property is required', undefined];
        return [undefined, new CreateUserDto(email, password, name, lname, phone, idCard, semestre, status, alias, biography)];
    }
}
exports.CreateUserDto = CreateUserDto;
