import * as fs from 'fs'
import KeepLast from './strategies/keep_last'
import KeepFirst from './strategies/keep_first'
import JustFlag from './strategies/just_flag'
import SimpleMap from './algorithms/simple_map'

const strategies:{[key:string]:DedupStrategy} = {'keep_last': KeepLast, 'keep_first': KeepFirst, 'just_flag': JustFlag}
const algorithms:{[key:string]:DedupAlgorithm} = {'simple_map': SimpleMap}

const cleanElement = (element: Element | Scene | KnackObject, strategy: DedupStrategy, algorithm: DedupAlgorithm): Element => { 
    let property: keyof typeof element
    for(property in element) {
        const elements = element[property] as Element[]
        if (elements && elements.length > 1 && elements[0].key) {
            console.log(`Cleaning element ${element.key}, property ${property}`)
            element[property] = algorithm(elements, strategy).map((element: Element) => cleanElement(element, strategy, algorithm))
        }
    }
    return element
}

const cleanVersion = (version: Version, strategy: DedupStrategy, algorithm: DedupAlgorithm): Version => {
    let property: keyof typeof version
    for(property in version) {
        const elements = version[property] as Element[]
        if (elements.length > 1 && elements[0].key) {
            console.log(`Cleaning version ${version._id}, property ${property}`)
            version[property] = algorithm(elements, strategy).map((element: Element) => cleanElement(element, strategy, algorithm))
        }
    }
    return version
}

const cleanVersions = (versions: Version[], strategy: DedupStrategy, algorithm: DedupAlgorithm): Version[] => {
    return versions.map((version) => cleanVersion(version, strategy, algorithm))
}

const DedupCommand: Command = (options:any): void => {
    console.time("Deduplication")
    const strategy = options.strategy ? options.strategy : "keep_last"
    const algorithm = options.algorithm ? options.algorithm : "simple_map"
    const dryRun = options.dryRun ? options.dryRun : false
    const output = options.output ? options.output : "clean_application.json"

    const strategyFn:DedupStrategy = strategies[strategy]
    const algorithmFn:DedupAlgorithm = algorithms[algorithm]

    console.log(`Deduplication of ${options.file} with strategy ${strategy} and algorithm ${algorithm}`)

    const applicationFile = fs.readFileSync(options.file, 'utf8')
    const application: Application = JSON.parse(applicationFile)

    const cleanApplication: Application = {...application, versions: cleanVersions(application.versions, strategyFn, algorithmFn)}

    if (dryRun) {
        console.log(JSON.stringify(cleanApplication))
    } else {
        fs.writeFileSync(output, JSON.stringify(cleanApplication))
    }
    console.log(`Deduplication of ${options.file} with strategy ${strategy} and algorithm ${algorithm} completed`)
    console.timeEnd("Deduplication")
}

export default DedupCommand