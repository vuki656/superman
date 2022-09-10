type ComplexCommand = Record<'prefix' | 'suffix', string>

export type SupermanConfig = {
    command: string
    flags: (ComplexCommand | string)[]
}
