import { User } from '../entities/User'

export interface UserRepository {
    save(user: User): void
    list(): Array<User>
    findById(id: string): User | undefined
}
