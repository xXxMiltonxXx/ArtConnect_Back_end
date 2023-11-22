import { UserEntity } from '../../entities/users.entity';
import { UserRepository } from '../../repositories/users.repository';


export interface GetUsersUseCase {
  execute(): Promise<UserEntity[]>
}


export class GetUser implements GetUsersUseCase {
  
  constructor(
    private readonly repository: UserRepository,
  ) {}
  
  execute(): Promise<UserEntity[]> {
    return this.repository.getAll();
  }

}

