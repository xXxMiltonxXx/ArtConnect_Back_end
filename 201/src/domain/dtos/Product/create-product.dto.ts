export class CreateProductDto {
  private constructor(
    public readonly userId: number,
    public readonly categoryId: number | null,
    public readonly serviceId: number | null,
    public readonly name: string,
    public readonly description: string | null,
    public readonly price: string | null,
    public readonly date_create: string | null,
    public readonly status: boolean
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateProductDto?] {
    const {
      userId,
      categoryId,
      serviceId,
      name,
      description,
      price,
      date_create,
      status,
    } = props;

    if (!userId) {
      return ['userId property is required', undefined];
    }

    return [
      undefined,
      new CreateProductDto(
        userId,
        categoryId || null,
        serviceId || null,
        name,
        description || null,
        price || null,
        date_create || null,
        status
      ),
    ];
  }
}
