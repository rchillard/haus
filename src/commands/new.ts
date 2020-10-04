import {Command, flags} from '@oclif/command'
import templateAPI from '../api/templateAPI'

export default class New extends Command {
  static description = 'Create a new HTML document'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(New)

    console.log(templateAPI)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/ryan/Code/haus/src/commands/new.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
