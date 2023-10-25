const KeepLast: DedupStrategy = (elements: Element[]): Element[] => {
    console.log(`Removing duplicates, keeping last for key ${elements[0].key}`)
    return [elements[elements.length - 1]]
}

export default KeepLast