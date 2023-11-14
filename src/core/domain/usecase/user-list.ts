import { UserRepository } from "../repositories/user.repository";

export class UserList {
    constructor(private readonly userRepository: UserRepository) {}

    public async list() {
        await this.userRepository.list();
    }
}
