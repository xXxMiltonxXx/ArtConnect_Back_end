export class UpdateInvoiceDto {
  private constructor(
    public readonly id: number,
    public readonly date: Date,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.date) returnObj.date = this.date;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateInvoiceDto?] {
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
