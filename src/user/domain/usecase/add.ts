import { User } from '../entities/User'
import { UserRepository } from '../repositories/user.repository'

export class AddUser {
    constructor(private readonly userRepository: UserRepository) {}

    public save(newUser: User) {
        if (this.userRepository.findById(newUser.id.value) !== undefined) {
            throw new Error('User already exists')
        }
        this.userRepository.save(newUser)
    }
}
