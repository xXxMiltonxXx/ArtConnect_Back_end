export class CreateForoDto {
  private constructor(
    public readonly subject: string | null,
    public readonly description: string,
    public readonly date_publication: Date | null,
    public readonly date_update: Date | null,
    public readonly comunityId: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateForoDto?] {
    const {
      subject,
      description,
      date_publication,
      date_update,
      comunityId,
    } = props;

    if (comunityId == null || !description) {
      return ['comunityId or description property is required', undefined];
    }

    return [
      undefined,
      new CreateForoDto(
        subject || null,
        description || '',
        date_publication || null,
        date_update || null,
        comunityId
      ),
    ];
  }
}


