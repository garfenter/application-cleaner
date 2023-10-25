import JustFlag from "./just_flag"

describe("Just flag", () => {
    test("should flag the elements that are duplicated", () => {
        const result = JustFlag([{key: "key1", _id: "val1"}, {key: "key1", _id: "val2"}])
        expect(result).toEqual([{key: "key1", _id: "val1", duplicated: true}, {key: "key1", _id: "val2", duplicated: true}])
    })
})