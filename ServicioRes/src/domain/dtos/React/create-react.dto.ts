export class CreateReactDto {
  private constructor(
    public readonly publicationId: number,
    public readonly name: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateReactDto?] {
    const { publicationId, name } = props;

    if (publicationId == null || isNaN(publicationId) || !name) {
      return ['publicationId and name properties are required', undefined];
    }

    return [undefined, new CreateReactDto(publicationId, name)];
  }
}
