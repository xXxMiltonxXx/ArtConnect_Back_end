export class UpdateCustomerDto {
  private constructor(
    public readonly id: number,
    public readonly email?: string,
    public readonly password?: string,
    public readonly name?: string,
    public readonly lname?: string,
    public readonly phone?: string,
    public readonly idCard?: string,
    public readonly company?: string,
    public readonly city?: string | null,
    public readonly job?: string,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.email) returnObj.email = this.email;
    if (this.password) returnObj.password = this.password;
    if (this.name) returnObj.name = this.name;
    if (this.lname) returnObj.lname = this.lname;
    if (this.phone) returnObj.phone = this.phone;
    if (this.idCard) returnObj.idCard = this.idCard;
    if (this.company) returnObj.company = this.company;
    if (this.city !== null) returnObj.city = this.city;
    if (this.job) returnObj.job = this.job;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCustomerDto?] {
    const {
      id,
      email,
      password,
      name,
      lname,
      phone,
      idCard,
      company,
      city,
      job,
    } = props;

    let newCity = city;
    if (city === null) {
      newCity = null;
    }

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (
      !email &&
      !password &&
      !name &&
      !lname &&
      !phone &&
      !idCard &&
      !company &&
      newCity === null &&
      !job
    ) {
      return ['At least one property must be provided', undefined];
    }

    return [
      undefined,
      new UpdateCustomerDto(
        id,
        email,
        password,
        name,
        lname,
        phone,
        idCard,
        company,
        newCity,
        job
      ),
    ];
  }
}
