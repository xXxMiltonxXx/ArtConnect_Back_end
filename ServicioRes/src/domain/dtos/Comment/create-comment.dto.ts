export class CreateCommentDto {
  private constructor(
    public readonly publicationId: number,
    public readonly text: string
  ) { }

  static create(props: { [key: string]: any }): [string?, CreateCommentDto?] {
    const { publicationId, text } = props;

    if (publicationId == null) {
      return ['publicationId property is required', undefined];
    }

    if (!text) {
      return ['text property is required', undefined];
    }

    return [undefined, new CreateCommentDto(publicationId, text)];
  }
}
