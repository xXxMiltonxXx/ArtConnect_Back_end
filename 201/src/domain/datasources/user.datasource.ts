import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UserEntity } from '../entities/users.entity';



export abstract class UserDatasource {

  abstract create( createUserDto: CreateUserDto ): Promise<VehicleEntity>;

  abstract getAll(): Promise<UserEntity[]>;

  abstract findById( id: number ): Promise<VehicleEntity>;
  abstract updateById( updateVehicleDto: UpdateVehicleDto ): Promise<VehicleEntity>;
  abstract deleteById( id: number ): Promise<VehicleEntity>;

}