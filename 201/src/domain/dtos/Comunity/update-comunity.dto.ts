

export class UpdateComunityDto {

    private constructor(
      public readonly id: number,
      public readonly name?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.name ) returnObj.name = this.name;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateComunityDto?]  {
  
      const { id, name } = props;
      let newName =name;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !name ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateComunityDto(id, name)];
    }
  
  
  }