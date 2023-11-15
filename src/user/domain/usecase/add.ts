import { User } from '../entities/User'
import { UserRepository } from '../repositories/user.repository'

export class AddUser {
    constructor(private readonly userRepository: UserRepository) {}

    public save(user: User) {
        this.userRepository.save(user)
    }
}
