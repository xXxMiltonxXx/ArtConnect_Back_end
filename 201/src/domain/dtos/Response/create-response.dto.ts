export class CreateResponseDto {
  private constructor(
    public readonly message: string | null,
    public readonly foroId: number,
    public readonly answerId: number,
  ){}

  static create(props: { [key: string]: any }): [string?, CreateResponseDto?] {
    const { message, foroId, answerId } = props;

    if (foroId == null || answerId == null) {
      return ['foroId and answerId properties are required', undefined];
    }

    return [undefined, new CreateResponseDto(message || null, foroId, answerId)];
  }
}




