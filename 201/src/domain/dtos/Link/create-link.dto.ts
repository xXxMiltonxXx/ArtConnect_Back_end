export class CreateLinkDto {
    private constructor(
      public readonly rolId: number,
      public readonly name: string,
      public readonly Link: string,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateLinkDto?] {
      const { rolId, name, Link } = props;
  
      if (!rolId || isNaN(Number(rolId))) {
        return ['rolId must be a valid number', undefined];
      }
  
      if (!name || !Link) {
        return ['name and link properties are required', undefined];
      }
  
      return [undefined, new CreateLinkDto(rolId, name, Link)];
    }
  }
  