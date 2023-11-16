import { MainDI } from './core/compositions/main.di'
import { InMemoryRepository } from './user/data/repositories/in-memory'
import { UserPresenter } from './user/presentation/user.presenter'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> ',
})

export class Application {
  private di: MainDI
  private userPresenter: UserPresenter

  constructor() {
    this.di = new MainDI(new InMemoryRepository())

    this.userPresenter = this.di.provideUserPresenter(rl)
  }

  run() {
    this.userPresenter.initialize()
  }
}
