export class CreateAnswerDto {
  private constructor(
    public readonly message: string | null,
    public readonly foroId: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateAnswerDto?] {
    const { message, foroId } = props;

    if (foroId == null) {
      return ['foroId property is required', undefined];
    }

    return [undefined, new CreateAnswerDto(message || null, foroId)];
  }
}



