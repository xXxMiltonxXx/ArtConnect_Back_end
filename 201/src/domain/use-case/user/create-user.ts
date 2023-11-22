import { CreateUserDto } from '../../dtos';
import { UserEntity } from '../../entities/users.entity';
import { UserRepository } from '../../repositories/users.repository';


export interface CreateUserUseCase {
    execute(dto: CreateUserDto): Promise<UserEntity>
}

// ctrl+ shift + l
export class CreateUser implements CreateUserUseCase {

    constructor(
        private readonly repository: UserRepository,
    ) { }

    execute(dto: CreateUserDto): Promise<UserEntity> {
        return this.repository.create(dto);
    }

}