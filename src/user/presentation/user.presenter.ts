import { User } from '../domain/entities/User'
import { AddUser } from '../domain/usecase/add'
import { ListUser } from '../domain/usecase/list'
import { Email } from '../domain/value-objects/Email'

export interface UserView {
    showWelcome(): void
    showListUser(users: User[]): void
    showEmptyList(): void
    askUserAction(): void
    //TODO showErrors()
    showBye(): void
}

export class UserPresenter {
    constructor(
        private view: UserView,
        private list: ListUser,
        private addUser: AddUser
    ) {}

    initialize(): void {
        this.view.showWelcome()
        this.loadUsers()
        this.view.askUserAction()
    }

    private loadUsers() {
        const users = this.list.execute()

        if (users.length === 0) {
            this.view.showEmptyList()
            return
        }

        this.view.showListUser(users)
    }

    /*public addUser(name: string, email:string, password: string){
        const user: User = new User({name: name, email: Email.create(email), password: password});

        this.addUser.save()
    }*/
}
