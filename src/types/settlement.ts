export type Settlement = {
  name: string
  settlementIcon: string
  description: () => React.ReactNode
  geography: {
    aliases: string[]
    type: string
    region: string[]
    size: string
  }
  commerce: {
    imports: string[]
    exports: string[]
  }
  politics: {
    type: string
    ruleType: string
    allegiances: string[]
  }
  society: {
    races: string[]
    religions: string[]
  }
  history: {
    speaker: {
      name: string
      year: number
    }[]
    population: {
      number: number
      year: number
    }[]
    description: () => React.ReactNode
  }
}
