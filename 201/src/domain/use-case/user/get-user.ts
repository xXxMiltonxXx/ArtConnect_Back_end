import { UserEntity } from '../../entities/users.entity';
import { UserRepository } from '../../repositories/users.repository';


export interface GetUserUseCase {
  execute( id: number ): Promise<UserEntity>
}


export class GetUser implements GetUserUseCase {
  
  constructor(
    private readonly repository: UserRepository,
  ) {}
  
  execute( id: number ): Promise<UserEntity> {
    return this.repository.findById(id);
  }

}

