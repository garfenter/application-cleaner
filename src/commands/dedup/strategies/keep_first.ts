const KeepFirst: DedupStrategy = (elements: Element[]): Element[] => {
    return [elements[0]]
}

export default KeepFirst