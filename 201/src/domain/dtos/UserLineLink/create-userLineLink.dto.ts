export class CreateUserLineLinkDto {
  private constructor(
    public readonly linkId: number,
    public readonly userId: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateUserLineLinkDto?] {
    const { linkId, userId } = props;

    if (!linkId || !userId) {
      return ['linkId and userId properties are required', undefined];
    }

    return [undefined, new CreateUserLineLinkDto(linkId, userId)];
  }
}
