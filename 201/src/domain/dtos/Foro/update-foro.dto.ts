export class UpdateForoDto {
  private constructor(
    public readonly id: number,
    public readonly subject?: string | null,
    public readonly description?: string | null,
    public readonly date_publication?: Date | null,
    public readonly date_update?: Date | null,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.subject != null) returnObj.subject = this.subject;
    if (this.description != null) returnObj.description = this.description;
    if (this.date_publication != null) returnObj.date_publication = this.date_publication;
    if (this.date_update != null) returnObj.date_update = this.date_update;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateForoDto?] {
    const {
      id,
      subject,
      description,
      date_publication,
      date_update,
    } = props;

    if (id == null || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (
      subject == null &&
      description == null &&
      date_publication == null &&
      date_update == null
    ) {
      return ['At least one property must be provided', undefined];
    }

    return [
      undefined,
      new UpdateForoDto(id, subject, description, date_publication, date_update),
    ];
  }
}
