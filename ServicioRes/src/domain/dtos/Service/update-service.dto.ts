export class UpdateServiceDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly date_start?: Date | null,
    public readonly date_end?: Date | null
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.name) returnObj.name = this.name;
    if (this.date_start !== undefined) returnObj.date_start = this.date_start;
    if (this.date_end !== undefined) returnObj.date_end = this.date_end;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateServiceDto?] {
    const { id, name, date_start, date_end } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (!name && date_start === undefined && date_end === undefined) {
      return ['At least one property must be provided for update', undefined];
    }

    return [undefined, new UpdateServiceDto(id, name, date_start || null, date_end || null)];
  }
}
