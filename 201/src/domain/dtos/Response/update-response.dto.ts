export class UpdateResponseDto {
  private constructor(
    public readonly id: number,
    public readonly message?: string | null
  ){}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.message !== undefined) {
      returnObj.message = this.message;
    }

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateResponseDto?] {
    const { id, message } = props;

    if (id == null) {
      return ['id property is required', undefined];
    }
    if(!message){
      return ['message property is required', undefined]
    }

    return [undefined, new UpdateResponseDto(id, message)];
  }
}



