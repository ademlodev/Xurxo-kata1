import { User } from '../entities/User'
import { UserRepository } from '../repositories/user.repository'

export class ListUser {
    constructor(private readonly userRepository: UserRepository) {}

    public list(): Array<User> {
        return this.userRepository.list()
    }
}
