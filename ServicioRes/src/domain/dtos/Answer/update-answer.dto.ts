export class UpdateAnswerDto {
  private constructor(
    public readonly id: number,
    public readonly message?: string | null,
    public readonly foroId?: number | null,
  ){}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.message !== undefined || this.message !== null ) {
      returnObj.message = this.message;
    }

    if (this.foroId !== undefined || this.message !== null) {
      returnObj.foroId = this.foroId;
    }

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateAnswerDto?] {
    const { id, message, foroId } = props;

    if (id == null || isNaN(Number(id))  ) {
      return ['id must be a valid number', undefined];
    }
    if(message === undefined && foroId === undefined){
      return ['Invalid input for update', undefined];
    }

    return [undefined, new UpdateAnswerDto(id, message || null, foroId || null)];
  }
}




