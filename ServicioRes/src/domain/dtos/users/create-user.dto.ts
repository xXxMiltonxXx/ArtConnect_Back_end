

export class CreateUserDto {

  private constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly name : string,
    public readonly lname: string,
    public readonly phone: string,
    public readonly idCard: string,
    public readonly semestre: number,
    public readonly status : boolean,
    public readonly biography : string,
    public readonly alias?: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateUserDto?]  {

    const { email, password,name, lname, phone,idCard, semestre, status, alias, biography } = props;

    if ( !email ) return ['Email property is required', undefined];
    if ( !password ) return ['password property is required', undefined];
    if ( !lname ) return ['Lastname property is required', undefined];
    if ( !phone ) return ['Phone property is required', undefined];
    if ( !idCard ) return ['IdCard property is required', undefined];
    if ( !semestre ) return ['Email property is required', undefined];

    return [undefined, new CreateUserDto(email,password, name,lname,phone,idCard,semestre,status,alias,biography)];
  }


}