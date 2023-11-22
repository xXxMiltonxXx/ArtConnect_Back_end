export class CreateServiceDto {
  private constructor(
    public readonly name: string,
    public readonly date_start: Date | null,
    public readonly date_end: Date | null
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateServiceDto?] {
    const { name, date_start, date_end } = props;

    if (!name) {
      return ['name property is required', undefined];
    }

    return [undefined, new CreateServiceDto(name, date_start || null, date_end || null)];
  }
}
