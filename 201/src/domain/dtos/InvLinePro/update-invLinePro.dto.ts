export class UpdateInvLineProDto {
  private constructor(
    public readonly id: number,
    public readonly productId?: number,
    public readonly invoiceId?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.productId != undefined) returnObj.productId = this.productId;
    if (this.invoiceId != undefined) returnObj.invoiceId = this.invoiceId;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateInvLineProDto?] {
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
