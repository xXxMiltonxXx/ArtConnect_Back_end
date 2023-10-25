export class CreateCategoryDto {
  private constructor(
    public readonly name: string,
    public readonly description?: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCategoryDto?] {
    const { name, description } = props;

    if (!name) {
      return ['name property is required', undefined];
    }

    return [undefined, new CreateCategoryDto(name, description)];
  }
}
