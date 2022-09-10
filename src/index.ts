import { spawn } from 'node:child_process'

import packageJson from '../package.json'

import { getConfig } from './getConfig'

const scripts = packageJson.superman

if (!scripts) {
    throw new Error('No scripts configured with superman.')
}

// TODO: type possible config

const scriptConfig = getConfig()

let finalCommand = 'yarn '

finalCommand = finalCommand.concat(scriptConfig.command)

finalCommand = scriptConfig.flags.reduce<string>((accumulator, value) => {
    if (typeof value === 'string') {
        return `${accumulator} ${value}`
    }

    return `${accumulator} ${value.prefix}=${value.suffix}`
}, finalCommand)

console.log('finalCommand: ', finalCommand)
// TODO: figute out why running the command throws ENOET, same command works fine in terminal

// TODO: research difference between child_process exec etc...
const command = spawn(finalCommand)

command.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

command.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

command.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


