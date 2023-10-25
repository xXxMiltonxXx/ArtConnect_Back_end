"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInvLineProDto = void 0;
class UpdateInvLineProDto {
    constructor(id, productId, invoiceId) {
        this.id = id;
        this.productId = productId;
        this.invoiceId = invoiceId;
    }
    get values() {
        const returnObj = {};
        if (this.productId != undefined)
            returnObj.productId = this.productId;
        if (this.invoiceId != undefined)
            returnObj.invoiceId = this.invoiceId;
        return returnObj;
    }
    static create(props) {
        const { id, productId, invoiceId } = props;
        if (id == null) {
            return ['id property is required', undefined];
        }
        if (productId == null && invoiceId == null) {
            return ['At least one property (productId or invoiceId) must be provided', undefined];
        }
        return [undefined, new UpdateInvLineProDto(id, productId, invoiceId)];
    }
}
exports.UpdateInvLineProDto = UpdateInvLineProDto;
