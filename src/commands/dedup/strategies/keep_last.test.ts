import KeepLast from "./keep_last"

describe("KeepLast", () => {
    test("should keep last element", () => {
        const result = KeepLast([{key: "key1", _id: "val1"}, {key: "key1", _id: "val2"}, {key: "key1", _id: "val3"}])
        expect(result).toEqual([{key: "key1", _id: "val3"}])
    })
})