export class CreateRolDto {
    private constructor(
      public readonly name: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateRolDto?]  {
  
      const {name} = props;
  
      if ( !name ) return ['name property is required', undefined];
  
  
      return [undefined, new CreateRolDto( name)];
    }
  }