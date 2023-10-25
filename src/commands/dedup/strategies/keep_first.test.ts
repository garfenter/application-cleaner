import KeepFirst from "./keep_first"

describe("KeepFirst", () => {
    test("should keep first element", () => {
        const result = KeepFirst([{key: "key1", _id: "val1"}, {key: "key1", _id: "val2"}, {key: "key1", _id: "val3"}])
        expect(result).toEqual([{key: "key1", _id: "val1"}])
    })
})