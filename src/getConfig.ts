import packageJson from '../package.json'

// TODO: type the whole thing

function resolve(object: any, path: any) {
    let root = (object = [object])

    path = [0, ...path]

    while (path.length > 1) {
        object = object[path.shift()] 
    }

    return [object, path[0], root]
}

export const getConfig = () => {
    const scripts = packageJson.superman

    const path = process.argv.slice(2)[0]?.split(':')

    let [parent, key] = resolve(scripts, path)

    return parent[key]
}

