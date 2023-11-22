export class UpdateUserLineLinkDto {
  private constructor(
    public readonly id: number,
    public readonly linkId?: number,
    public readonly userId?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.linkId !== undefined) {
      returnObj.linkId = this.linkId;
    }
    if (this.userId !== undefined) {
      returnObj.userId = this.userId;
    }

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateUserLineLinkDto?] {
    const { id, linkId, userId } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (linkId === undefined && userId === undefined) {
      return ['At least one property must be provided', undefined];
    }

    return [undefined, new UpdateUserLineLinkDto(id, linkId, userId)];
  }
}
