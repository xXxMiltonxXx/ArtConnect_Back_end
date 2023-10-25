export class CreateInvoiceDto {
  private constructor(
    public readonly customerId: number,
    public readonly date: Date,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateInvoiceDto?] {
    const { customerId, date } = props;

    if (customerId == null || !date) {
      return ['customerId and date properties are required', undefined];
    }

    return [undefined, new CreateInvoiceDto(customerId, date)];
  }
}
