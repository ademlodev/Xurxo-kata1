import * as readline from 'readline'
import { User } from '../domain/entities/User'
import { UserView } from './user.presenter'

export class UserTerminalView implements UserView {
  constructor(private rl: readline.Interface) {}
  showWelcome() {
    console.log('Bienvenidos a User Terminal Kata:')
  }

  showListUser(users: User[]): void {
    console.log('Users: ')
    users.forEach((user: User) => {
      console.log('Usuario: ' + user.name + ' email: ' + user.email.value)
    })
  }

  showEmptyList(): void {
    console.log('Users is empty')
  }

  askUserAction(): void {
    console.log('Menu: ')
    console.log('1. Alta.')
    console.log('2. Salir.')
    this.rl.question('¿Qué desea hacer? ', (answer) => {
      switch (answer.toLowerCase()) {
        case '1':
          //TODO alta de usuario
          let name: string = ''
          console.log('Nombre: ')
          /*this.rl.question(
                        'Nombre: ',
                        (askName) => (this.name = askName)
                    )*/
          //this.presenter.addUser()
          break
        case '2':
          this.showBye()
          break
        default:
          this.askUserAction() // ¿¿¿¿
      }
    })
  }

  showBye(): void {
    console.log('Hasta luego!!')
    //App.stop???
  }
}
