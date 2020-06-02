import { existsSync, promises as fs } from 'fs'
import { join } from 'path'

import App from '../src/app/App.svelte'

async function main() {
  const templatePath = join(process.cwd(), 'src', 'index.template')
  const publicPath = join(process.cwd(), 'public')

  const template = await fs.readFile(templatePath)
  const app = App.render()

  if (!existsSync(publicPath)) {
    await fs.mkdir(publicPath)
  }

  await fs.writeFile(
    join(publicPath, 'index.html'),
    template.toString().replace('%svelte.head%', app.head).replace('%svelte.html%', app.html)
  )
}

main()
