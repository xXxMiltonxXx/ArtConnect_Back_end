export class UpdateCategoryDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly description?: string,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.name) returnObj.name = this.name;
    if (this.description) returnObj.description = this.description;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCategoryDto?] {
    const { id, name, description } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (!name && !description) {
      return ['At least one property must be provided', undefined];
    }

    return [undefined, new UpdateCategoryDto(id, name, description)];
  }
}
