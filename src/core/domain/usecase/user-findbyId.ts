import { User } from '../entities/User'
import { UserRepository } from '../repositories/user.repository'

export class UserFindById {
    constructor(private readonly userRepository: UserRepository) {}

    public async findById(id: string): Promise<User> {
        return await this.userRepository.findById(id)
    }
}
