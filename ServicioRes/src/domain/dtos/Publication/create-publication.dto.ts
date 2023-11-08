export class CreatePublicationDto {
  private constructor(
    public readonly name: string,
    public readonly date: Date,
    public readonly status: boolean,
    public readonly customerId?: number,
    public readonly userId?: number,
    public readonly description?: string,
    public readonly image?: Buffer,
  ) { }

  static create(props: { [key: string]: any }): [string?, CreatePublicationDto?] {
    const { name, date, status, customerId, userId, description, image } = props;

    if (name == null) {
      return ['name property is required', undefined];
    }

    if (!customerId && !userId) {
      return ['customerId or userId property is required', undefined];
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return ['date property must be a valid Date', undefined];
    }

    if (status == null) {
      return ['status property is required', undefined];
    }

    return [undefined, new CreatePublicationDto(name, date, status, customerId, userId, description, image)];
  }
}
