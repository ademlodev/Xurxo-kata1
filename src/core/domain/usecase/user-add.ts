import { User } from '../entities/User'
import { UserRepository } from '../repositories/user.repository'

export class UserAdd {
    constructor(private readonly userRepository: UserRepository) {}

    public async save(user: User) {
        await this.userRepository.save(user)
    }
}
