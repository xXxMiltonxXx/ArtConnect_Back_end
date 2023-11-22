import { stat } from "fs";


export class UpdateFollowerDto {

  private constructor(
    public readonly id: number,
    public readonly status?: boolean,
  ) { }

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.status) returnObj.status = this.status;

    return returnObj;
  }


  static create(props: { [key: string]: any }): [string?, UpdateFollowerDto?] {

    const { id, status } = props;
    let newStatus = status;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (status !== null) {

      return ['status must be a valid date']

    }

    return [undefined, new UpdateFollowerDto(id, status)];
  }


}