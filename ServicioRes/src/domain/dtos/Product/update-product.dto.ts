export class UpdateProductDto {
  private constructor(
    public readonly id: number,
    public readonly userId: number | null,
    public readonly categoryId: number | null,
    public readonly serviceId: number | null,
    public readonly name: string | null,
    public readonly description: string | null,
    public readonly price: string | null,
    public readonly date_create: string | null,
    public readonly status: boolean | null
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.userId !== null) returnObj.userId = this.userId;
    if (this.categoryId !== null) returnObj.categoryId = this.categoryId;
    if (this.serviceId !== null) returnObj.serviceId = this.serviceId;
    if (this.name !== null) returnObj.name = this.name;
    if (this.description !== null) returnObj.description = this.description;
    if (this.price !== null) returnObj.price = this.price;
    if (this.date_create !== null) returnObj.date_create = this.date_create;
    if (this.status !== null) returnObj.status = this.status;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateProductDto?] {
    const {
      id,
      userId,
      categoryId,
      serviceId,
      name,
      description,
      price,
      date_create,
      status,
    } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (
      !userId &&
      categoryId === null &&
      serviceId === null &&
      name === null &&
      description === null &&
      price === null &&
      date_create === null &&
      status === null
    ) {
      return ['At least one property must be provided', undefined];
    }

    return [
      undefined,
      new UpdateProductDto(
        id,
        userId || null,
        categoryId || null,
        serviceId || null,
        name || null,
        description || null,
        price || null,
        date_create || null,
        status || null
      ),
    ];
  }
}
