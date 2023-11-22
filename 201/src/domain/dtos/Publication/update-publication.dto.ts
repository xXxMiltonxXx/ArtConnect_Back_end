export class UpdatePublicationDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly date?: Date,
    public readonly status?: boolean,
    public readonly description?: string,
    public readonly image?: Buffer,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.name !== undefined) returnObj.name = this.name;
    if (this.date !== undefined) returnObj.date = this.date;
    if (this.status !== undefined) returnObj.status = this.status;
    if (this.description !== undefined) returnObj.description = this.description;
    if (this.image !== undefined) returnObj.image = this.image;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdatePublicationDto?] {
    const { id, name, date, status, description, image } = props;

    if (id == null || isNaN(id)) {
      return ['id must be a valid number', undefined];
    }

    return [undefined, new UpdatePublicationDto(id, name, date, status, description, image)];
  }
}
