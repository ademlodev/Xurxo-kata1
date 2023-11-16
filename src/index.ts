import { Application } from './application'

const app: Application = new Application()

app.run()

process.on('SIGINT', function () {
  console.log('Hasta luego!')
  process.exit()
})
