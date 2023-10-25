"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerDto = void 0;
class UpdateCustomerDto {
    constructor(id, email, password, name, lname, phone, idCard, company, city, job) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lname = lname;
        this.phone = phone;
        this.idCard = idCard;
        this.company = company;
        this.city = city;
        this.job = job;
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
        if (this.company)
            returnObj.company = this.company;
        if (this.city !== null)
            returnObj.city = this.city;
        if (this.job)
            returnObj.job = this.job;
        return returnObj;
    }
    static create(props) {
        const { id, email, password, name, lname, phone, idCard, company, city, job, } = props;
        let newCity = city;
        if (city === null) {
            newCity = null;
        }
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (!email &&
            !password &&
            !name &&
            !lname &&
            !phone &&
            !idCard &&
            !company &&
            newCity === null &&
            !job) {
            return ['At least one property must be provided', undefined];
        }
        return [
            undefined,
            new UpdateCustomerDto(id, email, password, name, lname, phone, idCard, company, newCity, job),
        ];
    }
}
exports.UpdateCustomerDto = UpdateCustomerDto;
