export class UpdateReactDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
  ) { }

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.name) returnObj.name = this.name;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateReactDto?] {
    const { id, name } = props;

    if (id == null || isNaN(id)) {
      return ['id must be a valid number', undefined];
    }

    if (!name) {
      return ['At least one property must be provided', undefined];
    }

    return [undefined, new UpdateReactDto(id, name)];
  }
}
