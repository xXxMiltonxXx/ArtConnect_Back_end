"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerDto = void 0;
class CreateCustomerDto {
    constructor(email, password, name, lname, phone, idCard, Company, city, job) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lname = lname;
        this.phone = phone;
        this.idCard = idCard;
        this.Company = Company;
        this.city = city;
        this.job = job;
    }
    static create(props) {
        const { email, password, name, lname, phone, idCard, Company, city, job, } = props;
        if (!email || !password || !name || !lname || !phone || !idCard || !Company || !job) {
            return ['All properties are required', undefined];
        }
        return [
            undefined,
            new CreateCustomerDto(email, password, name, lname, phone, idCard, Company, city || null, job),
        ];
    }
}
exports.CreateCustomerDto = CreateCustomerDto;
