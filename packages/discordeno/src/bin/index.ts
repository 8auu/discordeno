import { readFile, rename, stat } from 'node:fs/promises'
import { Command } from 'commander'
import { findUp } from 'find-up'
import { findConfig } from './config.js'
import { autoGeneratedNote, generateNewFile } from './generate/typescript.js'

const program = new Command()

program.name('discordeno').description('CLI to discordeno utilities').version('0.1.0')

program
  .command('generate')
  .description('Generate types/schema for discordeno')
  .option('-c, --config [path]', 'Path to the config file')
  .action(async (options) => {
    const config = await findConfig(options.config)

    const typesFile = await findUp('node_modules/@discordeno/bot/dist/types/transformers/types.d.ts', { allowSymlinks: true, type: 'file' })

    if (!typesFile) {
      throw new Error('Could not find @discordeno/bot transformer types file.')
    }

    // We use a .old file to preserve the original file in case we need it in the future
    // The reason for this is because when we write the updated .d.ts file we may lose some type information, so we still need the original file
    // However if a user updates the package version we want to use the updated version, so for this reason we check for "// <auto-generated>" at the beginning of the file

    const oldTypesFile = typesFile.replace('.d.ts', '.old.d.ts')

    const typesFileContent = await readFile(typesFile, 'utf-8')
    const startFile = typesFileContent.slice(0, autoGeneratedNote.length)

    // If we found that the current types.d.ts file has been auto generated then use the .old one
    const usingOldFile = startFile === autoGeneratedNote

    const fileToUse = usingOldFile ? oldTypesFile : typesFile
    const fileToUseStat = await stat(fileToUse).catch(() => null)

    // If somehow the file we decided to use does not exist we error out
    if (!fileToUseStat) {
      throw new Error('Could not find a valid file to use')
    }

    // If we are using the .d.ts file rename it to .old.d.ts so we can use it a later point
    if (!usingOldFile) {
      await rename(typesFile, oldTypesFile)
    }

    generateNewFile(config, oldTypesFile, typesFile)
  })

program.parse()
