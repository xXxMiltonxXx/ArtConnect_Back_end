export class UserEntity {

  private constructor(
    public email: string,
    public password: string,
    public name: string,
    public lname: string,
    public phone: string,
    public idCard: string,
    public semestre: number,
    public status: boolean,
    public biography: string,
    public alias?: string,
  ) { }

  public static fromObject(object: { [key: string]: any }): UserEntity {
    const { email, password, name, lname, phone, idCard, semestre, status, biography } = object;
    if (!email) throw 'email is required';
    if (!password) throw 'password is required';
    if (!name) throw 'name is required';
    if (!lname) throw 'lname ID is required';
    if (!phone) throw 'phone ID is required';
    if (!idCard) throw 'idCard ID is required';
    if (!semestre) throw 'semestre ID is required';
    if (!status) throw 'status ID is required';
    if (!biography) throw 'biography ID is required';
    

    return new UserEntity(email, password, name, lname, phone, idCard, semestre, status, biography)
  }

}

