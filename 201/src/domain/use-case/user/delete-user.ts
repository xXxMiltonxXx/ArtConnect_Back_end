import { UserEntity } from '../../entities/users.entity';
import { UserRepository } from '../../repositories/users.repository';


export interface DeleteUserUseCase {
  execute( id: number ): Promise<UserEntity>
}

export class DeleteUser implements DeleteUserUseCase {
  
  constructor(
    private readonly repository: UserRepository,
  ) {}
  
  execute( id: number ): Promise<UserEntity> {
    return this.repository.deleteById(id);
  }

}

