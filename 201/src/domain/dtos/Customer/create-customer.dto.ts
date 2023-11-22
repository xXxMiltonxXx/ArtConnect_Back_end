export class CreateCustomerDto {
  private constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly name: string,
    public readonly lname: string,
    public readonly phone: string,
    public readonly idCard: string,
    public readonly Company: string,
    public readonly city: string | null,
    public readonly job: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCustomerDto?] {
    const {
      email,
      password,
      name,
      lname,
      phone,
      idCard,
      Company,
      city,
      job,
    } = props;

    if (!email || !password || !name || !lname || !phone || !idCard || !Company || !job) {
      return ['All properties are required', undefined];
    }

    return [
      undefined,
      new CreateCustomerDto(
        email,
        password,
        name,
        lname,
        phone,
        idCard,
        Company,
        city || null,
        job
      ),
    ];
  }
}
