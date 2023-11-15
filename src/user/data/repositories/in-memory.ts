import { User } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/user.repository'

export class InMemoryRepository implements UserRepository {
    private users: Array<User>

    constructor() {
        this.users = []
    }

    save(entity: User): void {
        const userRepeated = this.findById(entity.id.value);
        if(userRepeated != null) {
            //TODO throw new UserRepeatedException();
        }

        this.users.push(entity);
    }
    list(): Array<User> {
        return this.users;
    }

    findById(id: string): User | undefined {
        return this.users.find(user => user.id.value === id)
    }
}
