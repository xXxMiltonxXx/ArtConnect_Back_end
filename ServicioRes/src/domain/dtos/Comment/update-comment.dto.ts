export class UpdateCommentDto {
  private constructor(
    public readonly id: number,
    public readonly text?: string
  ) { }

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.text) returnObj.text = this.text;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCommentDto?] {
    const { id, text } = props;

    if (id == null) {
      return ['id property is required', undefined];
    }

    if (!text) {
      return ['text property is required for update', undefined];
    }

    return [undefined, new UpdateCommentDto(id, text)];
  }
}
