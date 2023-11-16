import { User } from '../entities/User'
import { UserRepository } from '../repositories/user.repository'

export class ListUser {
    constructor(private readonly userRepository: UserRepository) {}

    public execute(): Array<User> {
        return this.userRepository.list()
    }
}
