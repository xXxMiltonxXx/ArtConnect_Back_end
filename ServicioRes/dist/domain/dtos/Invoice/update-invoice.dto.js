"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInvoiceDto = void 0;
class UpdateInvoiceDto {
    constructor(id, date) {
        this.id = id;
        this.date = date;
    }
    get values() {
        const returnObj = {};
        if (this.date)
            returnObj.date = this.date;
        return returnObj;
    }
    static create(props) {
        const { id, date } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (!date) {
            return ['At least one property must be provided for updating', undefined];
        }
        return [undefined, new UpdateInvoiceDto(id, date)];
    }
}
exports.UpdateInvoiceDto = UpdateInvoiceDto;
