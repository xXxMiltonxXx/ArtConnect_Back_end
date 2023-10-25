

export class UpdateUserDto {

  private constructor(
    public readonly id: number,
    public readonly email?: string,
    public readonly password?: string,
    public readonly name ?: string,
    public readonly lname ?: string,
    public readonly phone ?: string,
    public readonly idCard ?: string,
    public readonly semestre ?: number,
    public readonly status ?: boolean,
    public readonly alias ?: string,
    public readonly biography ?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.email ) returnObj.email = this.email;
    if ( this.password ) returnObj.password = this.password;
    if ( this.name ) returnObj.name = this.name;
    if ( this.lname ) returnObj.lname = this.lname;
    if ( this.phone ) returnObj.phone = this.phone;
    if ( this.idCard ) returnObj.idCard = this.idCard;
    if ( this.semestre ) returnObj.semestre = this.semestre;
    if ( this.status ) returnObj.status = this.status;
    if ( this.alias ) returnObj.alias = this.alias;
    if ( this.biography ) returnObj.biography = this.biography;
    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateUserDto?]  {

    const { id,email, password,name, lname, phone,idCard, semestre, status, alias, biography } = props;
    let newName =name;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !email && !password && !name && !lname && !phone && !idCard && !semestre  || isNaN( Number(semestre)) && !status && !alias && !biography ) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateUserDto(id,email, password,name, lname, phone,idCard, semestre, status, alias, biography)];
  }


}