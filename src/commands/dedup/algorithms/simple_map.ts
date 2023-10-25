const SimpleMap: DedupAlgorithm = (elements: Element[], strategy: DedupStrategy) => {
    let duplicatesMap = new Map<string, Element[]>()
    elements.forEach(element => {
        let duplicates = duplicatesMap.get(element.key)
        if (!duplicates) {
            duplicatesMap.set(element.key, [element])
        } else {
            duplicates.push(element)
        }
    })
    return Array.from(duplicatesMap.values()).map((elements) => elements.length > 1 ? strategy(elements) : elements).flat()
}

export default SimpleMap