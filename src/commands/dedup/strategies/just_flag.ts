const JustFlag: DedupStrategy = (elements: Element[]): Element[] => {
    return elements.map((element: Element) => ({...element, duplicated: true}))
}

export default JustFlag