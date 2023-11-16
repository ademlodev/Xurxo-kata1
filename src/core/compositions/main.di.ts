import { UserRepository } from '../../user/domain/repositories/user.repository'
import { AddUser } from '../../user/domain/usecase/add'
import { ListUser } from '../../user/domain/usecase/list'
import { UserTerminalView } from '../../user/presentation/user-terminal.view'
import { UserPresenter } from '../../user/presentation/user.presenter'
import * as readline from 'readline'

export class MainDI {
  constructor(private userRepository: UserRepository) {}

  public provideListUseCase() {
    return new ListUser(this.userRepository)
  }

  public provideAddUseCase() {
    return new AddUser(this.userRepository)
  }

  public provideUserPresenter(rl: readline.Interface) {
    return new UserPresenter(
      new UserTerminalView(rl),
      this.provideListUseCase(),
      this.provideAddUseCase()
    )
  }
}
