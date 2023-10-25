export class UpdateLinkDto {
  private constructor(
    public readonly id: number,
    public readonly rolId?: number,
    public readonly name?: string,
    public readonly Link?: string,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.rolId !== undefined) returnObj.rolId = this.rolId;
    if (this.name !== undefined) returnObj.name = this.name;
    if (this.Link !== undefined) returnObj.link = this.Link;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateLinkDto?] {
    const { id, rolId, name, Link } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (!rolId && !name && !Link) {
      return ['At least one property must be provided', undefined];
    }

    return [undefined, new UpdateLinkDto(id, rolId, name, Link)];
  }
}
