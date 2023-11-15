import { User } from '../entities/User'
import { UserRepository } from '../repositories/user.repository'

export class FindById {
    constructor(private readonly userRepository: UserRepository) {}

    public findById(id: string): User | undefined {
        return this.userRepository.findById(id)
    }
}
