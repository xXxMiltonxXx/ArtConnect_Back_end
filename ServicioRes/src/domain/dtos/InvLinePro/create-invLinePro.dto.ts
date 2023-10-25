export class CreateInvLineProDto {
  private constructor(
    public readonly productId: number,
    public readonly invoiceId: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateInvLineProDto?] {
    const { productId, invoiceId } = props;

    if (productId == null || invoiceId == null) {
      return ['productId and invoiceId properties are required', undefined];
    }

    return [undefined, new CreateInvLineProDto(productId, invoiceId)];
  }
}
