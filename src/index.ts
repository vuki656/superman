import packageJson from '../package.json'
import { getConfig } from './getConfig'

const scripts = packageJson.superman

if (!scripts) {
    throw new Error('No scripts configured with superman.')
}

// TODO: type possible config

const scriptConfig = getConfig()

console.log('scriptConfig: ', scriptConfig)
