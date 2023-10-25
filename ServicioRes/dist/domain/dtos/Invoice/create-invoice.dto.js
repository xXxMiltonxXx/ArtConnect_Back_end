"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceDto = void 0;
class CreateInvoiceDto {
    constructor(customerId, date) {
        this.customerId = customerId;
        this.date = date;
    }
    static create(props) {
        const { customerId, date } = props;
        if (customerId == null || !date) {
            return ['customerId and date properties are required', undefined];
        }
        return [undefined, new CreateInvoiceDto(customerId, date)];
    }
}
exports.CreateInvoiceDto = CreateInvoiceDto;
