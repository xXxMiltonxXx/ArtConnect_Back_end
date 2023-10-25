"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvLineProDto = void 0;
class CreateInvLineProDto {
    constructor(productId, invoiceId) {
        this.productId = productId;
        this.invoiceId = invoiceId;
    }
    static create(props) {
        const { productId, invoiceId } = props;
        if (productId == null || invoiceId == null) {
            return ['productId and invoiceId properties are required', undefined];
        }
        return [undefined, new CreateInvLineProDto(productId, invoiceId)];
    }
}
exports.CreateInvLineProDto = CreateInvLineProDto;
