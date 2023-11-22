

export class CreateFollowerDto {

  private constructor(
    public readonly userId: number,
    public readonly comunityId: number | null,
    public readonly status: boolean,
    public readonly date: Date,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateFollowerDto?]  {

    const {userId, comunityId, status, date} = props;

    if(!userId || status == null || !date) return ['Boolean property is required', undefined];

    return [undefined, new CreateFollowerDto(userId, comunityId, status, date)];
  }


}