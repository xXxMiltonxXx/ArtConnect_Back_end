export class CreateComunityDto {
    private constructor(
      public readonly userId: number,
      public readonly name: string,
      public readonly date_start: Date,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateComunityDto?]  {
  
      const { userId, name, date_start} = props;
  
      if ( userId && !name && !date_start ) return ['name property is required', undefined];
  
  
      return [undefined, new CreateComunityDto(userId, name, date_start)];
    }
  }