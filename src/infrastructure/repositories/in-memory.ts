import { User } from '../../core/domain/entities/User'
import { UserRepository } from '../../core/domain/repositories/user.repository'

export class InMemoryRepository implements UserRepository {
    save(entity: User): Promise<User> {
        //TODO
        throw new Error('Method not implemented.')
    }
    list(): User[] {
        //TODO
        throw new Error('Method not implemented.')
    }
    findById(id: string): Promise<User> {
        //TODO
        throw new Error('Method not implemented.')
    }
}
